import React, { useEffect, useState, forwardRef } from "react";
import { BsArrowClockwise, BsArrowUp } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { isMobile } from 'react-device-detect';
import Tile from "./Tile";
import TileDropSpace from "./TileDropSpace";
import { Token } from "./Token";

export const Game = forwardRef((props, ref) => {
    // eslint-disable-next-line no-unused-vars
    const { ws, game, network, chat, connected, error } = props;

    // websocket messages
    const placeTile = (team, x, y) => {
        if (!ws.current) return;
        ws.current.send(JSON.stringify({"ActionType": "PlaceTile", "Team": team, "MoreDetails": {"X": x, "Y": y}}));
    }

    const rotateTile = (team) => {
        if (!ws.current) return;
        ws.current.send(JSON.stringify({"ActionType": "RotateTileRight", "Team": team}));
    }

    const placeToken = (team, x, y, type, side) => {
        if (!ws.current) return;
        ws.current.send(JSON.stringify({"ActionType": "PlaceToken", "Team": team, "MoreDetails": {"X": x, "Y": y, "Type": type, "Side": side}}));
    }

    const pass = (team) => {
        if (!ws.current) return;
        ws.current.send(JSON.stringify({"ActionType": "PlaceToken", "Team": team, "MoreDetails": {"Pass": true}}));
    }

    // game data
    const [turn, setTurn] = useState("");
    const [board, setBoard] = useState([]);
    const [tokens, setTokens] = useState({});
    const [boardTokens, setBoardTokens] = useState([]);
    const [scores, setScores] = useState({});
    const [playTile, setPlayTile] = useState(null);
    const [lastPlacedTile, setLastPlacedTile] = useState(null);
    const [tilesRemaining, setTilesRemaining] = useState(0);
    useEffect(() => {
        if (game) setTurn(game.Turn)
        if (game && game.MoreData) setBoard(game.MoreData.Board)
        if (game && game.MoreData) setTokens(game.MoreData.Tokens)
        if (game && game.MoreData) setBoardTokens(game.MoreData.BoardTokens)
        if (game && game.MoreData) setScores(game.MoreData.Scores)
        if (game && game.MoreData) setPlayTile(game.MoreData.PlayTile)
        if (game && game.MoreData) setLastPlacedTile(game.MoreData.LastPlacedTile)
        if (game && game.MoreData) setTilesRemaining(game.MoreData.TilesRemaining)
    }, [game])

    // network data
    const [team, setCurrentTeam] = useState("");
    useEffect(() => {
        if (network && connected) setCurrentTeam(connected[network.Name])
    }, [network, connected])

    // board rendering
    const [zoom, setZoom] = useState(1);
    const [minX, setMinX] = useState(0);
    const [maxX, setMaxX] = useState(0);
    const [minY, setMinY] = useState(0);
    const [maxY, setMaxY] = useState(0);
    const [xyToPlaceable, setXYToPlaceable] = useState({});
    const [xyToTile, setXYToTile] = useState({});
    useEffect(() => {
        let newMinX = 0;
        let newMaxX = 0;
        let newMinY = 0;
        let newMaxY = 0;
        let xyToPlaceable = {};
        let newXYToTile = {};
        for (let i = 0; i < board.length; i++) {
            let tile = board[i];
            if (tile.X <= newMinX) newMinX = tile.X-1;
            if (tile.X >= newMaxX) newMaxX = tile.X+1;
            if (tile.Y <= newMinY) newMinY = tile.Y-1;
            if (tile.Y >= newMaxY) newMaxY = tile.Y+1;
            let canPlace = new Map([[`${tile.X+1}${tile.Y}`, true], [`${tile.X-1}${tile.Y}`, true], [`${tile.X}${tile.Y+1}`, true], [`${tile.X}${tile.Y-1}`, true]]);
            for (let j = 0; j < board.length; j++) {
                if (canPlace.get(`${board[j].X}${board[j].Y}`)) canPlace.set(`${board[j].X}${board[j].Y}`, false);
            }
            canPlace.forEach((v,k) => {
                if (xyToPlaceable.hasOwnProperty(k) && !xyToPlaceable[k]) return;
                xyToPlaceable[k] = v;
            });
            newXYToTile[`${tile.X}${tile.Y}`] = tile;
        }
        setMinX(newMinX);
        setMaxX(newMaxX);
        setMinY(newMinY);
        setMaxY(newMaxY);
        setXYToPlaceable(xyToPlaceable);
        setXYToTile(newXYToTile);
    }, [board]);
    
     // board resize logic
     const [tileSize, setTileSize] = useState(0);
     useEffect(() => {
        function handleResize() {
            if (!ref || !ref.current) return;
            else setTileSize(ref.current.clientHeight/6);
        }
        handleResize()
     });
     useEffect(() => {
        function handleResize() {
            if (!ref || !ref.current) return;
            else setTileSize(ref.current.clientHeight/6);
        }
         window.addEventListener("resize", handleResize);
         return _ => window.removeEventListener("resize", handleResize)
     }, [ref]);

    return (
        <DndProvider backend={ isMobile ? TouchBackend : HTML5Backend }>
            <div className="w-full flex flex-col justify-center items-center grow">
                <div className="box-border border border-zinc-100 relative overflow-auto w-full flex items-center justify-center flex-col grow">
                    <div className="sticky w-full top-0 h-0 flex justify-between z-[999]">
                        <div className="m-2 font-bold text-sm">
                            score
                            <div>
                                {
                                    Object.keys(scores).map(k =>
                                        <div key={k} className="flex items-center h-full">
                                            <div className={`mr-1 w-3 h-3 bg-${k}-500 rounded-full`}/>
                                            <div className="h-full">{scores[k]}</div>
                                        </div>)
                                }
                            </div>
                        </div>
                        <div className="m-2">
                            <div onClick={ () => {
                                if (zoom < 1) setZoom(zoom + 0.1)
                            }} className="rounded-full w-10 h-10 bg-zinc-600 cursor-pointer font-bold text-3xl flex items-center justify-center mb-2">+</div>
                            <div onClick={() => {
                            if (zoom >= .4) setZoom(zoom - 0.1)
                        }} className="rounded-full w-10 h-10 bg-zinc-600 cursor-pointer font-bold text-3xl flex items-center justify-center">-</div>
                        </div>
                    </div>
                    <div className="sticky w-full top-[93%] h-0 flex justify-between z-[999]">
                        <div className="m-2 font-bold text-sm">
                            { tilesRemaining } tiles left
                        </div>
                    </div>
                    <div className="relative overflow-auto w-full flex items-center justify-center flex-col grow">
                        <div className="absolute top-0 left-0 flex items-center justify-center flex-col min-w-full min-h-full">
                        {
                            Array.from({ length: maxY-minY+1 }, (_, y) => maxY+y*-1).map(y =>
                                <div key={ y } className="flex">
                                {
                                    Array.from({ length: maxX-minX+1 }, (_, x) => x+minX).map(x =>
                                        <div key={ `${x}${y}` } className={ lastPlacedTile && lastPlacedTile.X === x && lastPlacedTile.Y === y ? `box-border border-4 border-${ turn }-500` : "" } style={{ width: tileSize*zoom, height: tileSize*zoom }}>
                                        {
                                            xyToPlaceable[`${ x }${ y }`] ?
                                                <TileDropSpace x={ x } y={ y } /> :
                                                xyToTile[`${ x }${ y }`] ?
                                                    <Tile x={ xyToTile[`${x}${y}`].X } y={ xyToTile[`${x}${y}`].Y }
                                                            sides={ xyToTile[`${x}${y}`].Sides }
                                                            center={ xyToTile[`${x}${y}`].Center }
                                                            connectedCitySides={ xyToTile[`${x}${y}`].ConnectedCitySides }
                                                            banner={ xyToTile[`${x}${y}`].Banner }
                                                            colors={ xyToTile[`${x}${y}`].Teams }
                                                            farmColors={ xyToTile[`${x}${y}`].FarmTeams }
                                                            centerColor={ xyToTile[`${x}${y}`].CenterTeam }
                                                            tokens={ boardTokens }
                                                            tokenDroppable={ lastPlacedTile && lastPlacedTile.X === xyToTile[`${x}${y}`].X && lastPlacedTile.Y === xyToTile[`${x}${y}`].Y }
                                                    /> : null
                                        }
                                        </div>)
                                }
                                </div>)
                        }
                        </div>
                    </div>
                </div>

                <div className="my-4 w-full flex justify-between items-center" style={{ minHeight: tileSize }}>
                    {
                        turn === team && !playTile ? 
                            <>
                                <div className="flex flex-col items-center text-zinc-400 max-w-[20%]">
                                    <div className="text-xs font-light italic mb-1 text-center">Drag token to place</div>
                                    <BsArrowUp />    
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-2 font-bold">{ team ? tokens[team] : "0" }</div>
                                    <div style={{ width: tileSize/6, height: tileSize/6 }}>
                                        <Token size={tileSize/6} player={team} placeToken={placeToken}/>
                                    </div>
                                </div>
                                <div className="px-4 py-2 text-sm font-bold bg-zinc-600 cursor-pointer" onClick={ () => pass(team) }>
                                    skip
                                </div>
                                <div className="flex flex-col items-center text-zinc-400 max-w-[20%]">
                                    <div className="text-xs font-light italic mb-1 text-center">Or click skip to pass</div>
                                    <GiClick /> 
                                </div>
                            </> :
                            <>
                                <div className="flex flex-col items-center text-zinc-400 max-w-[20%]">
                                    <div className="text-xs font-light italic mb-1 text-center">Click tile to rotate</div>
                                    <BsArrowClockwise />    
                                </div>
                                <div className="box-border border border-zinc-100" style={{ width: tileSize, height: tileSize }}>
                                    {
                                        turn === team ?
                                            <div className="w-full h-full cursor-pointer" onClick={ (e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                rotateTile(connected[network.Name]);
                                            }}>
                                                <Tile x={ playTile.X } y={ playTile.Y } sides={ playTile.Sides } center={ playTile.Center }
                                                        connectedCitySides={ playTile.ConnectedCitySides } banner={ playTile.Banner }
                                                        colors={ playTile.Teams } farmColors={ playTile.FarmTeams }
                                                        centerColor={ playTile.CenterTeam } tokens={ [] } tokenDroppable={ false }
                                                        player={ connected[network.Name] } placeTile={ placeTile } /> 
                                            </div> : null
                                    }
                                </div>
                                <div className="flex flex-col items-center text-zinc-400 max-w-[20%]">
                                    <div className="text-xs font-light italic mb-1 text-center">Drag tile to place</div>
                                    <BsArrowUp />    
                                </div>
                            </>
                    }
                </div>
            </div>
        </DndProvider>
    )
})
