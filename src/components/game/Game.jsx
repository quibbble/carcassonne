import React, { useEffect, useState, forwardRef, useCallback, createRef } from "react";
import { BsArrowClockwise, BsArrowUp } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import { Tile, DraggableTile } from "./Tile";
import TileDropSpace from "./TileDropSpace";
import { DraggableToken } from "./Token";
import { DndContext, PointerSensor, useSensors, useSensor, rectIntersection, closestCenter, pointerWithin, closestCorners } from '@dnd-kit/core';
import { BOTTOM, LEFT, RIGHT, TOP } from "./models/side";
import { FARM } from "./models/structure";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "./models/farmside";
import { COLORMAP } from "./models/color";

export const Game = forwardRef((props, ref) => {
    // eslint-disable-next-line no-unused-vars
    const { ws, game, network, chat, connected, error, shortcut} = props;

    // websocket messages
    const sendPlaceTileAction = useCallback((team, x, y, top, right, bottom, left, center, connectedCitySides, banner) => {
        if (!ws.current) return;
        ws.current.send(JSON.stringify({
            "ActionType": "PlaceTile", 
            "Team": team, 
            "MoreDetails": {
                "X": x, 
                "Y": y, 
                "Tile": {
                    "Top": top, 
                    "Right": right, 
                    "Bottom": bottom, 
                    "Left": left, 
                    "Center": center,
                    "ConnectedCitySides": connectedCitySides, 
                    "Banner": banner
                }
            }
        }));
    }, [ws])

    const sendRotateTileAction = useCallback((team, rotateRight=true) => {
        if (!ws.current) return;
        let actionType = rotateRight ? "RotateTileRight" : "RotateTileLeft"
        ws.current.send(JSON.stringify({"ActionType": actionType, "Team": team}));
    }, [ws])

    const sendPlaceTokenAction = useCallback((team, x, y, type, side) => {
        if (!ws.current) return;
        ws.current.send(JSON.stringify({"ActionType": "PlaceToken", "Team": team, "MoreDetails": {"X": x, "Y": y, "Type": type, "Side": side}}));
    }, [ws])

    const sendPassAction = useCallback((team) => {
        if (!ws.current) return;
        ws.current.send(JSON.stringify({"ActionType": "PlaceToken", "Team": team, "MoreDetails": {"Pass": true}}));
    }, [ws])

    // game data
    const [team, setCurrentTeam] = useState("");
    useEffect(() => {
        if (network && connected) setCurrentTeam(connected[network.Name])
    }, [network, connected])

    const [turn, setTurn] = useState("");
    const [board, setBoard] = useState([]);
    const [tokens, setTokens] = useState({});
    const [boardTokens, setBoardTokens] = useState([]);
    const [scores, setScores] = useState({});
    const [playTile, setPlayTile] = useState();
    const [lastPlacedTiles, setLastPlacedTiles] = useState();
    const [tilesRemaining, setTilesRemaining] = useState(0);
    useEffect(() => {
        if (game) setTurn(game.Turn)
        if (game && game.MoreData) setBoard(game.MoreData.Board)
        if (game && game.MoreData) setTokens(game.MoreData.Tokens)
        if (game && game.MoreData) setBoardTokens(game.MoreData.BoardTokens)
        if (game && game.MoreData) setScores(game.MoreData.Scores)
        if (game && game.MoreData) setPlayTile(game.MoreData.PlayTile)
        if (game && game.MoreData) setLastPlacedTiles(game.MoreData.LastPlacedTiles)
        if (game && game.MoreData) setTilesRemaining(game.MoreData.TilesRemaining)
    }, [game])

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

    // drag and drop
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    )

    const handleDragEnd = useCallback((e) => {
        if (!e.over || team !== game.Turn || game.Winners.length > 0) return

        let over = e.over.data.current
        let active = e.active.data.current

        if (active.type === "tile") sendPlaceTileAction(team, over.x, over.y, active.tile.Sides.Top.Structure, active.tile.Sides.Right.Structure, active.tile.Sides.Bottom.Structure, active.tile.Sides.Left.Structure, active.tile.Sides.Center.Structure, active.tile.CityConn, active.tile.Banner)
        else if (active.type === "token" && over.sides) sendPlaceTokenAction(team, over.x, over.y, over.type, over.sides[0])
    }, [team, game, sendPlaceTileAction, sendPlaceTokenAction])

    // board resize logic
    const [tileSize, setTileSize] = useState(0);

    const handleResize = useCallback(() => {
        if (!ref || !ref.current) return;
        else setTileSize(ref.current.clientHeight/6);
    }, [ref])

    useEffect(() => handleResize());

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return _ => window.removeEventListener("resize", handleResize)
    }, [handleResize]);

    const scrollRef = createRef()
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    const handleScroll = (e) => {
        const { scrollHeight, scrollWidth, scrollTop, scrollLeft, clientHeight, clientWidth } = e.target;
        const sX = scrollLeft
        const sY = scrollTop

        setScrollX(sX)
        setScrollY(sY)
    }

    // handle what happens on key press
    const handleKeyPress = useCallback((event) => {
        if (event.key === shortcut.skip) {
            // skip
            sendPassAction(team)
        } else if (event.key === shortcut.rotate) {
            // rotate
            if (game.Winners.length !== 0) {
                return
            }
            sendRotateTileAction(team)
        } else if (event.key === shortcut.rotateReverse) {
            // rotate other direction (maybe shirt+r better?)
            if (game.Winners.length !== 0) {
                return
            }
            sendRotateTileAction(team,false)
        }
    }, [team, game]);

    useEffect(() => {
        // attach the event listener
        document.addEventListener('keydown', handleKeyPress);

        // remove the event listener
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <DndContext autoScroll={ false } onDragEnd={ handleDragEnd } sensors={ sensors }>
            <div className="w-full flex flex-col justify-center items-center grow">
                <div ref={ scrollRef } onScrollCapture={ handleScroll } className="box-border border border-zinc-100 relative overflow-auto w-full flex items-center justify-center flex-col grow">
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
                            }} className="rounded-full w-10 h-10 bg-zinc-600 cursor-pointer font-bold text-3xl flex items-center justify-center mb-2 select-none">+</div>
                            <div onClick={() => {
                            if (zoom >= .4) setZoom(zoom - 0.1)
                        }} className="rounded-full w-10 h-10 bg-zinc-600 cursor-pointer font-bold text-3xl flex items-center justify-center select-none">-</div>
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
                                        <div key={ `${x}${y}` } className={ 
                                                lastPlacedTiles && Object.keys(lastPlacedTiles).find(k => lastPlacedTiles[k] && lastPlacedTiles[k].X == x && lastPlacedTiles[k].Y == y) ? `box-border border-2 border-${ Object.keys(lastPlacedTiles).find((k) => lastPlacedTiles[k] && lastPlacedTiles[k].X == x && lastPlacedTiles[k].Y == y) }-500` : "" 
                                            } style={{ width: tileSize*zoom, height: tileSize*zoom }}>
                                        {
                                            xyToPlaceable[`${ x }${ y }`] ?
                                                <TileDropSpace x={ x } y={ y } team={ team } /> :
                                                xyToTile[`${ x }${ y }`] ?
                                                    <Tile x={ xyToTile[`${x}${y}`].X } y={ xyToTile[`${x}${y}`].Y }
                                                            tile={{
                                                                Sides: {
                                                                    Top: {
                                                                        Structure: xyToTile[`${x}${y}`].Sides[TOP],
                                                                        Colors: xyToTile[`${x}${y}`].Teams[TOP] ? xyToTile[`${x}${y}`].Teams[TOP].map((team) => COLORMAP[team]) : []
                                                                    },
                                                                    Right: {
                                                                        Structure: xyToTile[`${x}${y}`].Sides[RIGHT],
                                                                        Colors: xyToTile[`${x}${y}`].Teams[RIGHT] ? xyToTile[`${x}${y}`].Teams[RIGHT].map((team) => COLORMAP[team]) : []
                                                                    },
                                                                    Bottom: {
                                                                        Structure: xyToTile[`${x}${y}`].Sides[BOTTOM],
                                                                        Colors: xyToTile[`${x}${y}`].Teams[BOTTOM] ? xyToTile[`${x}${y}`].Teams[BOTTOM].map((team) => COLORMAP[team]) : []
                                                                    },
                                                                    Left: {
                                                                        Structure: xyToTile[`${x}${y}`].Sides[LEFT],
                                                                        Colors: xyToTile[`${x}${y}`].Teams[LEFT] ? xyToTile[`${x}${y}`].Teams[LEFT].map((team) => COLORMAP[team]) : []
                                                                    },
                                                                    Center: {
                                                                        Structure: xyToTile[`${x}${y}`].Center,
                                                                        Colors: xyToTile[`${x}${y}`].CenterTeam ? [xyToTile[`${x}${y}`].CenterTeam].map((team) => COLORMAP[team]) : []
                                                                    },
                                                                    TopA: {
                                                                        Structure: FARM,
                                                                        Colors: xyToTile[`${x}${y}`].FarmTeams[TOPA] ? xyToTile[`${x}${y}`].FarmTeams[TOPA].map((team) => COLORMAP[team]) : [],
                                                                    },
                                                                    TopB: {
                                                                        Structure: FARM,
                                                                        Colors: xyToTile[`${x}${y}`].FarmTeams[TOPB] ? xyToTile[`${x}${y}`].FarmTeams[TOPB].map((team) => COLORMAP[team]) : [],
                                                                    },
                                                                    RightA: {
                                                                        Structure: FARM,
                                                                        Colors: xyToTile[`${x}${y}`].FarmTeams[RIGHTA] ? xyToTile[`${x}${y}`].FarmTeams[RIGHTA].map((team) => COLORMAP[team]) : [],
                                                                    },
                                                                    RightB: {
                                                                        Structure: FARM,
                                                                        Colors: xyToTile[`${x}${y}`].FarmTeams[RIGHTB] ? xyToTile[`${x}${y}`].FarmTeams[RIGHTB].map((team) => COLORMAP[team]) : [],
                                                                    },
                                                                    BottomA: {
                                                                        Structure: FARM,
                                                                        Colors: xyToTile[`${x}${y}`].FarmTeams[BOTTOMA] ? xyToTile[`${x}${y}`].FarmTeams[BOTTOMA].map((team) => COLORMAP[team]) : [],
                                                                    },
                                                                    BottomB: {
                                                                        Structure: FARM,
                                                                        Colors: xyToTile[`${x}${y}`].FarmTeams[BOTTOMB] ? xyToTile[`${x}${y}`].FarmTeams[BOTTOMB].map((team) => COLORMAP[team]) : [],
                                                                    },
                                                                    LeftA: {
                                                                        Structure: FARM,
                                                                        Colors: xyToTile[`${x}${y}`].FarmTeams[LEFTA] ? xyToTile[`${x}${y}`].FarmTeams[LEFTA].map((team) => COLORMAP[team]) : [],
                                                                    },
                                                                    LeftB: {
                                                                        Structure: FARM,
                                                                        Colors: xyToTile[`${x}${y}`].FarmTeams[LEFTB] ? xyToTile[`${x}${y}`].FarmTeams[LEFTB].map((team) => COLORMAP[team]) : [],
                                                                    }
                                                                },
                                                                CityConn: xyToTile[`${x}${y}`].ConnectedCitySides,
                                                                Banner: xyToTile[`${x}${y}`].Banner
                                                            }}
                                                            token={ boardTokens.reduce((acc, token) => acc ? acc : (token.X == x && token.Y == y ? { Side: token.Side, Color: COLORMAP[token.Team] } : undefined), undefined) }
                                                            tokenDroppable={ game.Winners.length === 0 && !playTile && lastPlacedTiles && lastPlacedTiles[turn] && lastPlacedTiles[turn].X === xyToTile[`${x}${y}`].X && lastPlacedTiles[turn].Y === xyToTile[`${x}${y}`].Y }
                                                            hoverColor={ COLORMAP[team] }
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
                                <div className="flex flex-col items-center text-zinc-400 max-w-[20%] select-none">
                                    <div className="text-xs font-light italic mb-1 text-center">Drag token to place</div>
                                    <BsArrowUp />    
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-2 font-bold">{ team ? tokens[team] : "0" }</div>
                                    <div style={{ width: tileSize/6, height: tileSize/6 }}>
                                        <DraggableToken id={ "token" } size={ tileSize/6 } team={ team } 
                                            scrollX={ scrollX } scrollY={ scrollY } />
                                    </div>
                                </div>
                                <div className="px-4 py-2 text-sm font-bold bg-zinc-600 cursor-pointer" onClick={ () => sendPassAction(team) }>
                                    skip
                                </div>
                                <div className="flex flex-col items-center text-zinc-400 max-w-[20%] select-none">
                                    <div className="text-xs font-light italic mb-1 text-center">Or click skip to pass</div>
                                    <GiClick /> 
                                </div>
                            </> :
                            <>
                                <div className="flex flex-col items-center text-zinc-400 max-w-[20%] select-none">
                                    <div className="text-xs font-light italic mb-1 text-center">Click tile to rotate</div>
                                    <BsArrowClockwise />    
                                </div>
                                <div className="box-border border border-zinc-100" style={{ width: tileSize, height: tileSize }}>
                                    {
                                        playTile ?
                                            <div className="w-full h-full cursor-pointer" onClick={ () => game.Winners.length === 0 ? sendRotateTileAction(team) : null }>
                                                <DraggableTile x={ playTile.X } y={ playTile.Y } 
                                                        tile={{
                                                            Sides: {
                                                                Top: {
                                                                    Structure: playTile.Sides[TOP],
                                                                    Colors: []
                                                                },
                                                                Right: {
                                                                    Structure: playTile.Sides[RIGHT],
                                                                    Colors: []
                                                                },
                                                                Bottom: {
                                                                    Structure: playTile.Sides[BOTTOM],
                                                                    Colors: []
                                                                },
                                                                Left: {
                                                                    Structure: playTile.Sides[LEFT],
                                                                    Colors: []
                                                                },
                                                                Center: {
                                                                    Structure: playTile.Center,
                                                                    Colors: []
                                                                }
                                                            },
                                                            CityConn: playTile.ConnectedCitySides,
                                                            Banner: playTile.Banner
                                                        }}
                                                        token={ undefined }
                                                        tokenDroppable={ false }
                                                        team={ team } 
                                                        scrollX={ scrollX } scrollY={ scrollY } /> 
                                            </div> : null
                                    }
                                </div>
                                <div className="flex flex-col items-center text-zinc-400 max-w-[20%] select-none">
                                    <div className="text-xs font-light italic mb-1 text-center">Drag tile to place</div>
                                    <BsArrowUp />    
                                </div>
                            </>
                    }
                </div>
            </div>
        </DndContext>
    )
})
