import React, { useEffect, useRef, useState } from "react";
import { BsArrowClockwise, BsArrowUp, BsArrowLeft } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import { CONFIG } from "../components/Config";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { isMobile } from 'react-device-detect';
import Tile from "./game/Tile";
import TileDropSpace from "./game/TileDropSpace";
import { Token } from "./game/Token";

export default function GamePage() {
    const history = useHistory();
    const { gid } = useParams();

    // websocket connectivity logic 
    const ws = useRef();
    const [game, setGame] = useState();
    const [network, setNetwork] = useState();
    // const [chat, setChat] = useState([]);
    const [connected, setConnected] = useState();
    // const [error, setError] = useState();

    useEffect(() => {
        ws.current = new WebSocket(`ws${ CONFIG.scheme }://${ CONFIG.host }/game/join?GameKey=${ CONFIG.key }&GameID=${ gid }`);
        ws.current.onopen = () => {};
        ws.current.onclose = () => history.push("/");
        ws.current.onmessage = async e => {
            let msg = JSON.parse(e.data);
            if (msg.Type === "Game") setGame(msg.Payload);
            else if (msg.Type === "Network") setNetwork(msg.Payload);
            // else if (msg.Type === "Chat") setChat(c => c.concat([msg.Payload]));
            else if (msg.Type === "Connected") setConnected(msg.Payload);
            // else if (msg.Type === "Error") setError(msg.Payload);
        };
        ws.current.onerror = () => history.push("/");
    }, [ws, history, gid]);

    // websocket messages
    const setTeam = (team) => {
        if (!ws.current) return;
        ws.current.send(JSON.stringify({"ActionType": "SetTeam", "MoreDetails": {"Team": team}}));
    }

    const resetGame = () => {
        if (!ws.current) return;
        ws.current.send(JSON.stringify({"ActionType": "Reset", "MoreDetails": {"MoreOptions": {"Seed": Date.now()}}}));
    }

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

    // trigger used to force a refresh of the page to check for potential need to display unsupported screen
    const [trigger, setTrigger] = useState(true);
    useEffect(() => {
        const handleResize = () => setTrigger(!trigger);
        window.addEventListener("resize", handleResize);
        return _ => window.removeEventListener("resize", handleResize)
    });

    // copied logic
    const [copied, setCopied] = useState(0);
    useEffect(() => {
        if (copied > 0) setTimeout(() => setCopied(copied-1), 1000);
    }, [copied]);

    // board resize logic
    const [tileSize, setTileSize] = useState(0);
    const ref = useRef(null);
    function handleResize() {
        if (!ref || !ref.current) return;
        else setTileSize(ref.current.clientHeight/6);
    }
    useEffect(() => handleResize());
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return _ => window.removeEventListener("resize", handleResize)
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center p-2 md:p-4">
            <div ref={ref} className="h-full w-full flex flex-col items-center max-w-6xl grow">
                {/* TAILWIND HACK - Tailwind preloads only used classes so anything not in initial render will not work */}
                <div className="text-red-500 text-blue-500 text-green-500 text-yellow-500 text-orange-500 text-pink-500 text-purple-500 text-teal-500"/>
                <div className="border-red-500 border-blue-500 border-green-500 border-yellow-500 border-orange-500 border-pink-500 border-purple-500 border-teal-500"/>
                <div className="bg-red-500 bg-blue-500 bg-green-500 bg-yellow-500 bg-orange-500 bg-pink-500 bg-pink-500 bg-purple-500 bg-teal-500"/>
                <div className="fill-red-500 fill-blue-500 fill-green-500 fill-yellow-500 fill-orange-500 fill-pink-500 fill-pink-500 fill-purple-500 fill-teal-500"/>
                {/* END HACK */}
                <div className="relative w-full mb-1 justfy-self-start font-thin text-sm">
                    Share this link with friends:&nbsp;
                    <span className="underline cursor-pointer" onClick={() => {
                        setCopied(1);
                        navigator.clipboard.writeText(`${ window.location.protocol }//${ window.location.host }/${ gid }`)
                    }}>
                        { `${ window.location.protocol }//${ window.location.host }/${ gid }` }
                    </span>
                    {
                        copied > 0 ?
                            <div className="absolute mt-2 w-full flex justify-center">
                                <div className="absolute top-[-12px] w-6 overflow-hidden inline-block">
                                    <div className=" h-4 w-4 bg-zinc-600 rotate-45 transform origin-bottom-left" />
                                </div>
                                <div className="font-bold text-xs text-center bg-zinc-600 px-2 py-1">copied!</div>
                            </div> : null
                    }
                </div>            
                <hr className="w-full mb-2" />
                <div className="flex w-full justify-between items-center mb-4">
                    <div className="flex">
                        { game ? game.Teams.map(el => <div key={ el } className={ `cursor-pointer mr-1 w-6 h-6 rounded-full border-4 border-${ el }-500 ${ network && connected && connected[network.Name] === el  ? `bg-${ connected[network.Name] }-500` : "" }` } onClick={ () => setTeam(el) }/>) : null }
                    </div>
                    <div className={ `font-extrabold ${ game && team && game.Winners.length === 0 ? `text-${ game.Turn }-500` : "text-zinc-100" }` }>
                    { 
                        game && team ? 
                            game.Message : 
                            <div className="flex items-center">
                                <BsArrowLeft className="mr-1" />
                                <div>select a team</div>
                            </div>
                    }
                    </div>
                </div>

                <DndProvider backend={ isMobile ? TouchBackend : HTML5Backend }>
                    <div className=" w-full flex flex-col justify-center items-center grow">
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

                <hr className="w-full mb-2"/>
                <div className="w-full flex justify-between items-center">
                    <div className="title leading-4 text-2xl font-black text-orange-500 cursor-pointer">
                        <a href={ `${ window.location.protocol }//${ window.location.host }` }>Carcassonne</a>
                    </div>
                    <div className="flex">
                        <div className="flex">
                            <div className="px-3 py-1 font-bold cursor-pointer flex items-center justify-center text-xs bg-zinc-600 mr-2" onClick={ () => resetGame() }>new game</div>
                        </div>
                        <div className="italic text-xs bg-blue-500 py-1 px-2">
                            <a href="https://quibbble.com">more <span className="quibbble text-sm not-italic">quibbble</span> games</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
