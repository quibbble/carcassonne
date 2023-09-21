import React, { forwardRef } from "react";
import TokenDropSpace from "./TokenDropSpace";
import {
    BottomLeftCurveLargeFarm, BottomLeftCurveSmallFarm,
    BottomLeftFarm, BottomRightCurveLargeFarm, BottomRightCurveSmallFarm,
    BottomRightFarm, TopLeftCurveLargeFarm, TopLeftCurveSmallFarm,
    TopLeftFarm,
    TopRightCurveLargeFarm,
    TopRightCurveSmallFarm,
    TopRightFarm
} from "./Farm";
import {
    BottomCity, BottomLeftBanner,
    BottomLeftCity, BottomLeftTopCity, BottomRightBanner,
    BottomRightCity,
    LeftCity, LeftMiddleBanner, LeftTopRightCity, RightBottomLeftCity,
    RightCity, RightLeftCity, TopBottomCity,
    TopCity, TopLeftBanner,
    TopLeftCity, TopMiddleBanner, TopRightBanner, TopRightBottomCity, TopRightBottomLeftCity,
    TopRightCity
} from "./City";
import {
    BottomLeftRoad,
    BottomRightRoad,
    BottomRoad,
    LeftRoad,
    RightRoad,
    TopLeftRoad,
    TopRightRoad,
    TopRoad
} from "./Road";
import {Cloister} from "./Cloister";
import {
    BottomCenterFlushToken,
    BottomCenterToken, BottomLeftFlushToken,
    BottomLeftInsideToken,
    BottomLeftToken,
    BottomRightFlushToken,
    BottomRightInsideToken,
    BottomRightToken,
    CenterToken, LeftBottomFlushToken, LeftCenterFlushToken,
    LeftCenterToken, LeftTopFlushToken, RightBottomFlushToken, RightCenterFlushToken,
    RightCenterToken, RightTopFlushToken,
    TopCenterFlushToken,
    TopCenterToken, TopLeftFlushToken,
    TopLeftInsideToken, TopLeftToken,
    TopRightFlushToken,
    TopRightInsideToken, TopRightToken
} from "./Token";
import { useDraggable } from '@dnd-kit/core';

const red = "#ef4444";
const blue = "#3b82f6";
const yellow = "#eab308";
const green = "#22c55e";
const orange = "#f97316";
const purple = "#a855f7";
const pink = "#ec4899";
const teal = "#14b8a6";
const gray = "#f4f4f5";
const dark = "#18181b";

export const ColorsMap = {
    red: red,
    blue: blue,
    yellow: yellow,
    green: green,
    orange: orange,
    purple: purple,
    pink: pink,
    teal: teal,
};

const top = "Top";
const right = "Right";
const bottom = "Bottom";
const left = "Left";

const topA = "TopA";
const topB = "TopB";
const rightA = "RightA";
const rightB = "RightB";
const bottomA = "BottomA";
const bottomB = "BottomB";
const leftA = "LeftA";
const leftB = "LeftB";

const road = "Road";
const city = "City";
const farm = "Farm";
const cloister = "Cloister";

const thief = "Thief";
const knight = "Knight";
const farmer = "Farmer";
const monk = "Monk";

function createCityColors(colors) {
    if (!colors || colors.length === 0) {
        return {
            definition: null,
            color: gray
        }
    } else if (colors.length === 1) {
        return {
            definition: null,
            color: ColorsMap[colors[0]]
        }
    } else if (colors.length === 2) {
        const id = `city${colors[0]}${colors[1]}`;
        return {
            definition:
                <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53"
                                spreadMethod="repeat" gradientTransform="rotate(-135)">
                    <stop offset="0" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.5" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.5" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="1.0" stopColor={ColorsMap[colors[1]]}/>
                </linearGradient>,
            color: `url(#${id})`
        }
    } else if (colors.length === 3) {
        const id = `city${colors[0]}${colors[1]}${colors[2]}`;
        return {
            definition:
                <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53"
                                spreadMethod="repeat" gradientTransform="rotate(-135)">
                    <stop offset="0" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.33" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.33" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="0.67" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="0.67" stopColor={ColorsMap[colors[2]]}/>
                    <stop offset="1.0" stopColor={ColorsMap[colors[2]]}/>
                </linearGradient>,
            color: `url(#${id})`
        }
    } else if (colors.length === 4) {
        const id = `city${colors[0]}${colors[1]}${colors[2]}${colors[3]}`;
        return {
            definition:
                <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53"
                                spreadMethod="repeat" gradientTransform="rotate(-135)">
                    <stop offset="0" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.25" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.25" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="0.5" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="0.5" stopColor={ColorsMap[colors[2]]}/>
                    <stop offset="0.75" stopColor={ColorsMap[colors[2]]}/>
                    <stop offset="0.75" stopColor={ColorsMap[colors[3]]}/>
                    <stop offset="1.0" stopColor={ColorsMap[colors[3]]}/>
                </linearGradient>,
            color: `url(#${id})`
        }
    } else if (colors.length === 5) {
        const id = `city${colors[0]}${colors[1]}${colors[2]}${colors[3]}${colors[4]}`;
        return {
            definition:
                <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53"
                                spreadMethod="repeat" gradientTransform="rotate(-135)">
                    <stop offset="0" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.2" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.2" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="0.4" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="0.4" stopColor={ColorsMap[colors[2]]}/>
                    <stop offset="0.6" stopColor={ColorsMap[colors[2]]}/>
                    <stop offset="0.6" stopColor={ColorsMap[colors[3]]}/>
                    <stop offset="0.8" stopColor={ColorsMap[colors[3]]}/>
                    <stop offset="0.8" stopColor={ColorsMap[colors[4]]}/>
                    <stop offset="1.0" stopColor={ColorsMap[colors[4]]}/>
                </linearGradient>,
            color: `url(#${id})`
        }
    }
}

function createRoadColors(colors, side) {
    if (!colors || colors.length === 0) {
        return {
            definition: null,
            color: gray
        }
    } else if (colors.length === 1) {
        return {
            definition: null,
            color: ColorsMap[colors[0]]
        }
    } else if (colors.length === 2) {
        const id = `road${colors[0]}${colors[1]}`;
        return {
            definition:
                <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="25"
                                spreadMethod="repeat" gradientTransform="rotate(45)">
                    <stop offset="0" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.5" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.5" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="1.0" stopColor={ColorsMap[colors[1]]}/>
                </linearGradient>,
            color: `url(#${id})`
        }
    } else if (colors.length === 3) {
        const id = `road${colors[0]}${colors[1]}${colors[2]}`;
            return {
                definition:
                    <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="25"
                                    spreadMethod="repeat" gradientTransform="rotate(45)">
                        <stop offset="0" stopColor={ColorsMap[colors[0]]}/>
                        <stop offset="0.33" stopColor={ColorsMap[colors[0]]}/>
                        <stop offset="0.33" stopColor={ColorsMap[colors[1]]}/>
                        <stop offset="0.66" stopColor={ColorsMap[colors[1]]}/>
                        <stop offset="0.66" stopColor={ColorsMap[colors[2]]}/>
                        <stop offset="1.0" stopColor={ColorsMap[colors[2]]}/>
                    </linearGradient>,
                color: `url(#${id})`
            }
    } else if (colors.length === 4) {
        const id = `road${colors[0]}${colors[1]}${colors[2]}${colors[3]}`;
            return {
                definition:
                    <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="25"
                                    spreadMethod="repeat" gradientTransform="rotate(45)">
                        <stop offset="0" stopColor={ColorsMap[colors[0]]}/>
                        <stop offset="0.25" stopColor={ColorsMap[colors[0]]}/>
                        <stop offset="0.25" stopColor={ColorsMap[colors[1]]}/>
                        <stop offset="0.5" stopColor={ColorsMap[colors[1]]}/>
                        <stop offset="0.5" stopColor={ColorsMap[colors[2]]}/>
                        <stop offset="0.75" stopColor={ColorsMap[colors[2]]}/>
                        <stop offset="0.75" stopColor={ColorsMap[colors[3]]}/>
                        <stop offset="1.0" stopColor={ColorsMap[colors[3]]}/>
                    </linearGradient>,
                color: `url(#${id})`
            }
    } else if (colors.length === 5) {
        const id = `road${colors[0]}${colors[1]}${colors[2]}${colors[3]}${colors[4]}`;
            return {
                definition:
                    <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="25"
                                    spreadMethod="repeat" gradientTransform="rotate(45)">
                        <stop offset="0" stopColor={ColorsMap[colors[0]]}/>
                        <stop offset="0.2" stopColor={ColorsMap[colors[0]]}/>
                        <stop offset="0.2" stopColor={ColorsMap[colors[1]]}/>
                        <stop offset="0.4" stopColor={ColorsMap[colors[1]]}/>
                        <stop offset="0.4" stopColor={ColorsMap[colors[2]]}/>
                        <stop offset="0.6" stopColor={ColorsMap[colors[2]]}/>
                        <stop offset="0.6" stopColor={ColorsMap[colors[3]]}/>
                        <stop offset="0.8" stopColor={ColorsMap[colors[3]]}/>
                        <stop offset="0.8" stopColor={ColorsMap[colors[4]]}/>
                        <stop offset="1.0" stopColor={ColorsMap[colors[4]]}/>
                    </linearGradient>,
                color: `url(#${id})`
            }
    }
}

function createFarmColors(colors) {
    if (!colors || colors.length === 0) {
        return {
            definition: null,
            color: dark
        }
    } else if (colors.length === 1) {
        return {
            definition: null,
            color: ColorsMap[colors[0]]
        }
    } else if (colors.length === 2) {
        const id = `farm${colors[0]}${colors[1]}`;
        return {
            definition:
                <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53.5"
                                        spreadMethod="repeat" gradientTransform="rotate(-45)">
                    <stop offset="0" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.5" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.5" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="1.0" stopColor={ColorsMap[colors[1]]}/>
                </linearGradient>,
            color: `url(#${id})`
        }
    } else if (colors.length === 3) {
        const id = `farm${colors[0]}${colors[1]}${colors[2]}`;
        return {
            definition:
                <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53.5"
                                spreadMethod="repeat" gradientTransform="rotate(-45)">
                    <stop offset="0" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.33" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.33" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="0.67" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="0.67" stopColor={ColorsMap[colors[2]]}/>
                    <stop offset="1.0" stopColor={ColorsMap[colors[2]]}/>
                </linearGradient>,
            color: `url(#${id})`
        }
    } else if (colors.length === 4) {
        const id = `farm${colors[0]}${colors[1]}${colors[2]}${colors[3]}`;
        return {
            definition:
                <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53.5"
                                spreadMethod="repeat" gradientTransform="rotate(-45)">
                    <stop offset="0" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.25" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.25" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="0.5" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="0.5" stopColor={ColorsMap[colors[2]]}/>
                    <stop offset="0.75" stopColor={ColorsMap[colors[2]]}/>
                    <stop offset="0.75" stopColor={ColorsMap[colors[3]]}/>
                    <stop offset="1.0" stopColor={ColorsMap[colors[3]]}/>
                </linearGradient>,
            color: `url(#${id})`
        }
    } else if (colors.length === 5) {
        const id = `farm${colors[0]}${colors[1]}${colors[2]}${colors[3]}${colors[4]}`;
        return {
            definition:
                <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53.5"
                                spreadMethod="repeat" gradientTransform="rotate(-45)">
                    <stop offset="0" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.2" stopColor={ColorsMap[colors[0]]}/>
                    <stop offset="0.2" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="0.4" stopColor={ColorsMap[colors[1]]}/>
                    <stop offset="0.4" stopColor={ColorsMap[colors[2]]}/>
                    <stop offset="0.6" stopColor={ColorsMap[colors[2]]}/>
                    <stop offset="0.6" stopColor={ColorsMap[colors[3]]}/>
                    <stop offset="0.8" stopColor={ColorsMap[colors[3]]}/>
                    <stop offset="0.8" stopColor={ColorsMap[colors[4]]}/>
                    <stop offset="1.0" stopColor={ColorsMap[colors[4]]}/>
                </linearGradient>,
            color: `url(#${id})`
        }
    }
}

export function DraggableTile({ x, y, sides, center, connectedCitySides, banner, colors, farmColors, centerColor, tokenDroppable, tokens, team, scrollX, scrollY }) {
    const {attributes, isDragging, listeners, setNodeRef, over, transform} = useDraggable({
        id: "tile",
        data: {
            type: "tile",
            x: x,
            y: y
        }
    });

    const style = {
        opacity: isDragging ? 0.5 : undefined,
        touchAction: "none",
        transform: transform && (transform.x != 0 || transform.y != 0) ? 
            over ? 
                `translate3d(${transform.x - scrollX}px, ${transform.y - scrollY}px, 0)` : 
                `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined
    }

    return (
        <Tile ref={ setNodeRef } style={ style } 
            {...attributes} {...listeners}
            x={ x } y={ y } sides={ sides } center={ center } 
            connectedCitySides={ connectedCitySides } 
            banner={ banner } colors={ colors } farmColors={ farmColors } 
            centerColor={ centerColor } tokenDroppable={ tokenDroppable } 
            tokens={ tokens } team={ team } />
    )
}

export const Tile = forwardRef(({ x, y, sides, center, connectedCitySides, banner, colors, farmColors, centerColor, tokenDroppable, tokens, team, ...props }, ref) => {

    let colorDefinitions = [];

    // farm
    let farms = [];
    let numRoads = 0;
    for (const side of [top, right, bottom, left]) if (sides[side] === road) numRoads++;

    let numCities = 0;
    for (const side of [top, right, bottom, left]) if (sides[side] === city) numCities++;

    // check for curved road,
    if (numRoads === 2 && !(sides[top] === road && sides[bottom] === road) && !(sides[right] === road && sides[left] === road)) {
        if (sides[top] === road && sides[right] === road) {
            let mainColor = createFarmColors(farmColors[topA] ? farmColors[topA] : farmColors[rightB]);
            if (mainColor.definition) colorDefinitions.push(mainColor.definition);
            let minColor = createFarmColors(farmColors[topB]);
            if (minColor.definition) colorDefinitions.push(minColor.definition);

            if (tokenDroppable) {
                if (sides[bottom] === city && sides[left] === city) {
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[left] === city ? topA : leftB} el={TopLeftFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={topB} el={TopRightCurveLargeFarm(minColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={topB} el={TopRightCurveSmallFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[right] === city ? bottomA : rightB} el={BottomRightFarm(mainColor.color)} />);
                } else {
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[left] === city ? topA : leftB} el={TopLeftFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={topB} el={TopRightCurveLargeFarm(minColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={topB} el={TopRightCurveSmallFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[right] === city ? bottomA : rightB} el={BottomRightFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[bottom] === city ? leftA : bottomB} el={BottomLeftFarm(mainColor.color)} />);
                }
            } else {
                farms.push(TopLeftFarm(mainColor.color));
                farms.push(TopRightCurveLargeFarm(minColor.color));
                farms.push(TopRightCurveSmallFarm(mainColor.color));
                farms.push(BottomRightFarm(mainColor.color));
                farms.push(BottomLeftFarm(mainColor.color));
            }
        } else if (sides[right] === road && sides[bottom] === road) {
            let mainColor = createFarmColors(farmColors[rightA] ? farmColors[rightA] : farmColors[bottomB]);
            if (mainColor.definition) colorDefinitions.push(mainColor.definition);
            let minColor = createFarmColors(farmColors[bottomA]);
            if (minColor.definition) colorDefinitions.push(minColor.definition);

            if (tokenDroppable) {
                if (sides[top] === city && sides[left] === city) {
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[top] === city ? rightA : topB} el={TopRightFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={bottomA} el={BottomRightCurveLargeFarm(minColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={bottomA} el={BottomRightCurveSmallFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[bottom] === city ? leftA : bottomB} el={BottomLeftFarm(mainColor.color)} />);
                } else {
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[left] === city ? topA : leftB} el={TopLeftFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[top] === city ? rightA : topB} el={TopRightFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={bottomA} el={BottomRightCurveLargeFarm(minColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={bottomA} el={BottomRightCurveSmallFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[bottom] === city ? leftA : bottomB} el={BottomLeftFarm(mainColor.color)} />);
                }
            } else {
                farms.push(TopLeftFarm(mainColor.color));
                farms.push(TopRightFarm(mainColor.color));
                farms.push(BottomRightCurveLargeFarm(minColor.color));
                farms.push(BottomRightCurveSmallFarm(mainColor.color));
                farms.push(BottomLeftFarm(mainColor.color));
            }
        } else if (sides[bottom] === road && sides[left] === road) {
            let mainColor = createFarmColors(farmColors[bottomA] ? farmColors[bottomA] : farmColors[leftB]);
            if (mainColor.definition) colorDefinitions.push(mainColor.definition);
            let minColor = createFarmColors(farmColors[bottomB]);
            if (minColor.definition) colorDefinitions.push(minColor.definition);

            if (tokenDroppable) {
                if (sides[top] === city && sides[right] === city) {
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[left] === city ? topA : leftB} el={TopLeftFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[right] === city ? bottomA : rightB} el={BottomRightFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={bottomB} el={BottomLeftCurveLargeFarm(minColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={bottomB} el={BottomLeftCurveSmallFarm(mainColor.color)} />);
                } else {
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[left] === city ? topA : leftB} el={TopLeftFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[top] === city ? rightA : topB} el={TopRightFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[right] === city ? bottomA : rightB} el={BottomRightFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={bottomB} el={BottomLeftCurveLargeFarm(minColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={bottomB} el={BottomLeftCurveSmallFarm(mainColor.color)} />);
                }
            } else {
                farms.push(TopLeftFarm(mainColor.color));
                farms.push(TopRightFarm(mainColor.color));
                farms.push(BottomRightFarm(mainColor.color));
                farms.push(BottomLeftCurveLargeFarm(minColor.color));
                farms.push(BottomLeftCurveSmallFarm(mainColor.color));
            }
        } else if (sides[left] === road && sides[top] === road) {
            let mainColor = createFarmColors(farmColors[topB] ? farmColors[topB] : farmColors[leftA]);
            if (mainColor.definition) colorDefinitions.push(mainColor.definition);
            let minColor = createFarmColors(farmColors[topA]);
            if (minColor.definition) colorDefinitions.push(minColor.definition);

            if (tokenDroppable) {
                if (sides[bottom] === city && sides[right] === city) {
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={topA} el={TopLeftCurveLargeFarm(minColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={topA} el={TopLeftCurveSmallFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[top] === city ? rightA : topB} el={TopRightFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[bottom] === city ? leftA : bottomB} el={BottomLeftFarm(mainColor.color)} />);
                } else {
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={topA} el={TopLeftCurveLargeFarm(minColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={topA} el={TopLeftCurveSmallFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[top] === city ? rightA : topB} el={TopRightFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[right] === city ? bottomA : rightB} el={BottomRightFarm(mainColor.color)} />);
                    farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[bottom] === city ? leftA : bottomB} el={BottomLeftFarm(mainColor.color)} />);
                }
            } else {
                farms.push(TopLeftCurveLargeFarm(minColor.color));
                farms.push(TopLeftCurveSmallFarm(mainColor.color));
                farms.push(TopRightFarm(mainColor.color));
                farms.push(BottomRightFarm(mainColor.color));
                farms.push(BottomLeftFarm(mainColor.color));
            }
        }
    } else {
        let topLeftColor = createFarmColors(farmColors[topA] ? farmColors[topA] : farmColors[leftB]);
        if (topLeftColor.definition) colorDefinitions.push(topLeftColor.definition);
        let topRightColor = createFarmColors(farmColors[topB] ? farmColors[topB] : farmColors[rightA]);
        if (topRightColor.definition) colorDefinitions.push(topRightColor.definition);
        let bottomRightColor = createFarmColors(farmColors[bottomA] ? farmColors[bottomA] : farmColors[rightB]);
        if (bottomRightColor.definition) colorDefinitions.push(bottomRightColor.definition);
        let bottomLeftColor = createFarmColors(farmColors[bottomB] ? farmColors[bottomB] : farmColors[leftA]);
        if (bottomLeftColor.definition) colorDefinitions.push(bottomLeftColor.definition);

        if (tokenDroppable) {
            if (numCities === 2 && sides[top] === city && sides[right] === city) {
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[left] === city ? topA : leftB} el={TopLeftFarm(topLeftColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[right] === city ? bottomA : rightB} el={BottomRightFarm(bottomRightColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[bottom] === city ? leftA : bottomB} el={BottomLeftFarm(bottomLeftColor.color)} />);
            } else if (numCities === 2 && sides[top] === city && sides[left] === city) {
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[top] === city ? rightA : topB} el={TopRightFarm(topRightColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[right] === city ? bottomA : rightB} el={BottomRightFarm(bottomRightColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[bottom] === city ? leftA : bottomB} el={BottomLeftFarm(bottomLeftColor.color)} />);
            } else if (numCities === 2 && sides[bottom] === city && sides[right] === city) {
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[left] === city ? topA : leftB} el={TopLeftFarm(topLeftColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[top] === city ? rightA : topB} el={TopRightFarm(topRightColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[bottom] === city ? leftA : bottomB} el={BottomLeftFarm(bottomLeftColor.color)} />);
            } else if (numCities === 2 && sides[bottom] === city && sides[left] === city) {
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[left] === city ? topA : leftB} el={TopLeftFarm(topLeftColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[top] === city ? rightA : topB} el={TopRightFarm(topRightColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[right] === city ? bottomA : rightB} el={BottomRightFarm(bottomRightColor.color)} />);
            } else if (numCities === 3 && sides[bottom] === city && sides[left] === city && sides[top]) {
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[top] === city ? rightA : topB} el={TopRightFarm(topRightColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[right] === city ? bottomA : rightB} el={BottomRightFarm(bottomRightColor.color)} />);
            } else if (numCities === 3 && sides[left] === city && sides[top] === city && sides[right]) {
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[right] === city ? bottomA : rightB} el={BottomRightFarm(bottomRightColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[bottom] === city ? leftA : bottomB} el={BottomLeftFarm(bottomLeftColor.color)} />);
            } else if (numCities === 3 && sides[top] === city && sides[right] === city && sides[bottom]) {
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[left] === city ? topA : leftB} el={TopLeftFarm(topLeftColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[bottom] === city ? leftA : bottomB} el={BottomLeftFarm(bottomLeftColor.color)} />);
            } else if (numCities === 3 && sides[right] === city && sides[bottom] === city && sides[left]) {
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[left] === city ? topA : leftB} el={TopLeftFarm(topLeftColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[top] === city ? rightA : topB} el={TopRightFarm(topRightColor.color)} />);
            } else {
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[left] === city ? topA : leftB} el={TopLeftFarm(topLeftColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[top] === city ? rightA : topB} el={TopRightFarm(topRightColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[right] === city ? bottomA : rightB} el={BottomRightFarm(bottomRightColor.color)} />);
                farms.push(<TokenDropSpace team={team} x={x} y={y} type={farm} side={sides[bottom] === city ? leftA : bottomB} el={BottomLeftFarm(bottomLeftColor.color)} />);
            }
        } else {
            farms.push(TopLeftFarm(topLeftColor.color));
            farms.push(TopRightFarm(topRightColor.color));
            farms.push(BottomRightFarm(bottomRightColor.color));
            farms.push(BottomLeftFarm(bottomLeftColor.color));
        }
    }

    // cities and banner
    let cities = [];
    if (!connectedCitySides || numCities === 1) {
        if (sides[top] === city) {
            let cityColor = createCityColors(colors[top]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={top} el={TopCity(cityColor.color)} />);
            else cities.push(TopCity(cityColor.color));
        }
        if (sides[right] === city) {
            let cityColor = createCityColors(colors[right]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={right} el={RightCity(cityColor.color)} />);
            else cities.push(RightCity(cityColor.color));
        }
        if (sides[bottom] === city) {
            let cityColor = createCityColors(colors[bottom]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={bottom} el={BottomCity(cityColor.color)} />);
            else cities.push(BottomCity(cityColor.color));
        }
        if (sides[left] === city) {
            let cityColor = createCityColors(colors[left]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={left} el={LeftCity(cityColor.color)} />);
            else cities.push(LeftCity(cityColor.color));
        }
    } else if (numCities === 2) {
        if (sides[top] === city && sides[right] === city) {
            let cityColor = createCityColors(colors[top]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={top} el={TopRightCity(cityColor.color)} />);
            else cities.push(TopRightCity(cityColor.color));
            if (banner) cities.push(TopRightBanner(dark))
        } else if (sides[right] === city && sides[bottom] === city) {
            let cityColor = createCityColors(colors[bottom]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={bottom} el={BottomRightCity(cityColor.color)} />);
            else cities.push(BottomRightCity(cityColor.color));
            if (banner) cities.push(BottomRightBanner(dark))
        } else if (sides[bottom] === city && sides[left] === city) {
            let cityColor = createCityColors(colors[bottom]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={bottom} el={BottomLeftCity(cityColor.color)} />);
            else cities.push(BottomLeftCity(cityColor.color));
            if (banner) cities.push(BottomLeftBanner(dark))
        } else if (sides[left] === city && sides[top] === city) {
            let cityColor = createCityColors(colors[top]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={top} el={TopLeftCity(cityColor.color)} />);
            else cities.push(TopLeftCity(cityColor.color));
            if (banner) cities.push(TopLeftBanner(dark))
        } else if (sides[top] === city && sides[bottom] === city) {
            let cityColor = createCityColors(colors[top]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={top} el={TopBottomCity(cityColor.color)} />);
            else cities.push(TopBottomCity(cityColor.color));
            if (banner) cities.push(TopMiddleBanner(dark))
        } else if (sides[left] === city && sides[right] === city) {
            let cityColor = createCityColors(colors[right]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={right} el={RightLeftCity(cityColor.color)} />);
            else cities.push(RightLeftCity(cityColor.color));
            if (banner) cities.push(LeftMiddleBanner(dark))
        }
    } else if (numCities === 3) {
        if (sides[top] === city && sides[right] === city && sides[bottom] === city) {
            let cityColor = createCityColors(colors[right]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={right} el={TopRightBottomCity(cityColor.color)} />);
            else cities.push(TopRightBottomCity(cityColor.color));
            if (banner) cities.push(TopRightBanner(dark))
        } else if (sides[right] === city && sides[bottom] === city && sides[left] === city) {
            let cityColor = createCityColors(colors[bottom]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={bottom} el={RightBottomLeftCity(cityColor.color)} />);
            else cities.push(RightBottomLeftCity(cityColor.color));
            if (banner) cities.push(BottomLeftBanner(dark))
        } else if (sides[bottom] === city && sides[left] === city && sides[top] === city) {
            let cityColor = createCityColors(colors[left]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={left} el={BottomLeftTopCity(cityColor.color)} />);
            else cities.push(BottomLeftTopCity(cityColor.color));
            if (banner) cities.push(TopLeftBanner(dark))
        } else if (sides[left] === city && sides[top] === city && sides[right] === city) {
            let cityColor = createCityColors(colors[top]);
            if (cityColor.definition) colorDefinitions.push(cityColor.definition);
            if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={top} el={LeftTopRightCity(cityColor.color)} />);
            else cities.push(LeftTopRightCity(cityColor.color));
            if (banner) cities.push(TopLeftBanner(dark))
        }
    } else if (numCities === 4) {
        let cityColor = createCityColors(colors[top]);
        if (cityColor.definition) colorDefinitions.push(cityColor.definition);
        if (tokenDroppable) cities.push(<TokenDropSpace team={team} x={x} y={y} type={city} side={top} el={TopRightBottomLeftCity(cityColor.color)} />);
        else cities.push(TopRightBottomLeftCity(cityColor.color));
        if (banner) cities.push(TopLeftBanner(dark))
    }

    // roads
    let roads = [];
    if (numRoads === 2 && !(sides[top] === road && sides[bottom] === road) && !(sides[right] === road && sides[left] === road)) {
        if (sides[top] === road && sides[right] === road) {
            let roadColor = createRoadColors(colors[top], topB);
            if (roadColor.definition) colorDefinitions.push(roadColor.definition);
            if (tokenDroppable) roads.push(<TokenDropSpace team={team} x={x} y={y} type={road} side={top} el={TopRightRoad(roadColor.color)} />);
            else roads.push(TopRightRoad(roadColor.color));
        } else if (sides[right] === road && sides[bottom] === road) {
            let roadColor = createRoadColors(colors[right], rightB);
            if (roadColor.definition) colorDefinitions.push(roadColor.definition);
            if (tokenDroppable) roads.push(<TokenDropSpace team={team} x={x} y={y} type={road} side={right} el={BottomRightRoad(roadColor.color)} />);
            else roads.push(BottomRightRoad(roadColor.color));
        } else if (sides[bottom] === road && sides[left] === road) {
            let roadColor = createRoadColors(colors[bottom], bottomB);
            if (roadColor.definition) colorDefinitions.push(roadColor.definition);
            if (tokenDroppable) roads.push(<TokenDropSpace team={team} x={x} y={y} type={road} side={bottom} el={BottomLeftRoad(roadColor.color)} />);
            else roads.push(BottomLeftRoad(roadColor.color));
        } else if (sides[left] === road && sides[top] === road) {
            let roadColor = createRoadColors(colors[left], leftB);
            if (roadColor.definition) colorDefinitions.push(roadColor.definition);
            if (tokenDroppable) roads.push(<TokenDropSpace team={team} x={x} y={y} type={road} side={left} el={TopLeftRoad(roadColor.color)} />);
            else roads.push(TopLeftRoad(roadColor.color));
        }
    } else {
        if (sides[top] === road) {
            let roadColor = createRoadColors(colors[top], top);
            if (roadColor.definition) colorDefinitions.push(roadColor.definition);
            if (tokenDroppable) roads.push(<TokenDropSpace team={team} x={x} y={y} type={road} side={top} el={TopRoad(roadColor.color)} />);
            else roads.push(TopRoad(roadColor.color));
        }
        if (sides[right] === road) {
            let roadColor = createRoadColors(colors[right], right);
            if (roadColor.definition) colorDefinitions.push(roadColor.definition);
            if (tokenDroppable) roads.push(<TokenDropSpace team={team} x={x} y={y} type={road} side={right} el={RightRoad(roadColor.color)} />);
            else roads.push(RightRoad(roadColor.color));
        }
        if (sides[bottom] === road) {
            let roadColor = createRoadColors(colors[bottom], bottom);
            if (roadColor.definition) colorDefinitions.push(roadColor.definition);
            if (tokenDroppable) roads.push(<TokenDropSpace team={team} x={x} y={y} type={road} side={bottom} el={BottomRoad(roadColor.color)} />);
            else roads.push(BottomRoad(roadColor.color));
        }
        if (sides[left] === road) {
            let roadColor = createRoadColors(colors[left], left);
            if (roadColor.definition) colorDefinitions.push(roadColor.definition);
            if (tokenDroppable) roads.push(<TokenDropSpace team={team} x={x} y={y} type={road} side={left} el={LeftRoad(roadColor.color)} />);
            else roads.push(LeftRoad(roadColor.color));
        }
    }

    // cloisters
    let cloisters = [];
    if (center === cloister) {
        if (tokenDroppable) cloisters.push(<TokenDropSpace team={team} x={x} y={y} type={cloister} side={""} el={Cloister(centerColor ? ColorsMap[centerColor] : gray)} />);
        else cloisters.push(Cloister(centerColor ? ColorsMap[centerColor] : gray));
    }

    // token
    let token = null;
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].X === x && tokens[i].Y === y) {
            let color = ColorsMap[tokens[i].Team];
            if (tokens[i].Type === farmer) {
                if (center === cloister || numRoads === 4) {
                    if ([topB, rightA].includes(tokens[i].Side)) token = TopRightToken(color);
                    else if ([rightB, bottomA].includes(tokens[i].Side)) token = BottomRightToken(color);
                    else if ([bottomB, leftA].includes(tokens[i].Side)) token = BottomLeftToken(color);
                    else if ([leftB, topA].includes(tokens[i].Side)) token = TopLeftToken(color);
                } else  if ((numCities === 0 && numRoads === 0) || (numRoads === 0 && !connectedCitySides)) token = CenterToken(color);
                else if (numCities === 1) {
                    if (numRoads === 2) {
                        if (sides[top] === road && sides[right] === road) {
                            if ([topB, rightA].includes(tokens[i].Side)) token = TopRightToken(color);
                            else token = CenterToken(color);
                        } else if (sides[right] === road && sides[bottom] === road) {
                            if ([rightB, bottomA].includes(tokens[i].Side)) token = BottomRightToken(color);
                            else token = CenterToken(color);
                        } else if (sides[bottom] === road && sides[left] === road) {
                            if ([bottomB, leftA].includes(tokens[i].Side)) token = BottomLeftToken(color);
                            else token = CenterToken(color);
                        } else if (sides[left] === road && sides[top] === road) {
                            if ([leftB, topA].includes(tokens[i].Side)) token = TopLeftToken(color);
                            else token = CenterToken(color);
                        } else if (sides[top] === road && sides[bottom] === road) {
                            if (sides[left] === city) {
                                if ([topB, rightA, rightB, bottomA].includes(tokens[i].Side)) token = RightCenterToken(color);
                                else token = TopLeftFlushToken(color);
                            } else if (sides[right] === city) {
                                if ([topA, leftA, leftB, bottomB].includes(tokens[i].Side)) token = LeftCenterToken(color);
                                else token = TopRightFlushToken(color);
                            }
                        } else if (sides[left] === road && sides[right] === road) {
                            if (sides[top] === city) {
                                if ([rightB, bottomA, bottomB, leftA].includes(tokens[i].Side)) token = BottomCenterToken(color);
                                else token = LeftTopFlushToken(color);
                            } else if (sides[bottom] === city) {
                                if ([topA, topB, rightA, leftB].includes(tokens[i].Side)) token = TopCenterToken(color);
                                else token = LeftBottomFlushToken(color);
                            }
                        }
                    } else if (numRoads === 3) {
                        if (sides[top] === city) {
                            if ([rightA, leftB].includes(tokens[i].Side)) token = LeftTopFlushToken(color);
                            else if ([rightB, bottomA].includes(tokens[i].Side)) token = BottomRightToken(color);
                            else if ([bottomB, leftA].includes(tokens[i].Side)) token = BottomLeftToken(color);
                        } else if (sides[right] === city) {
                            if ([topB, bottomA].includes(tokens[i].Side)) token = TopRightFlushToken(color);
                            else if ([topA, leftB].includes(tokens[i].Side)) token = TopLeftToken(color);
                            else if ([bottomB, leftA].includes(tokens[i].Side)) token = BottomLeftToken(color);
                        } else if (sides[bottom] === city) {
                            if ([rightB, leftA].includes(tokens[i].Side)) token = LeftBottomFlushToken(color);
                            else if ([topA, leftB].includes(tokens[i].Side)) token = TopLeftToken(color);
                            else if ([topB, rightA].includes(tokens[i].Side)) token = TopRightToken(color);
                        } else if (sides[left] === city) {
                            if ([topA, bottomB].includes(tokens[i].Side)) token = TopLeftFlushToken(color);
                            else if ([topB, rightA].includes(tokens[i].Side)) token = TopRightToken(color);
                            else if ([rightB, bottomA].includes(tokens[i].Side)) token = BottomRightToken(color);
                        }
                    }
                } else if (numCities === 2) {
                    if (sides[top] === city && sides[right] === city) {
                        if ([leftB, bottomA].includes(tokens[i].Side) && numRoads > 0) token = LeftTopFlushToken(color);
                        else token = BottomLeftToken(color);
                    } else if (sides[right] === city && sides[bottom] === city) {
                        if ([topB, leftA].includes(tokens[i].Side) && numRoads > 0) token = TopRightFlushToken(color);
                        else token = TopLeftToken(color);
                    } else if (sides[bottom] === city && sides[left] === city) {
                        if ([rightB, topA].includes(tokens[i].Side) && numRoads > 0) token = TopLeftFlushToken(color);
                        else token = TopRightToken(color);
                    } else if (sides[left] === city && sides[top] === city) {
                        if ([rightA, bottomB].includes(tokens[i].Side) && numRoads > 0) token = RightTopFlushToken(color);
                        else token = BottomRightToken(color);
                    } else if (sides[top] === city && sides[bottom] === city) {
                        if ([leftA, leftB].includes(tokens[i].Side)) token = LeftCenterFlushToken(color);
                        else if ([rightA, rightB].includes(tokens[i].Side)) token = RightCenterFlushToken(color);
                    } else if (sides[left] === city && sides[right] === city) {
                        if ([topA, topB].includes(tokens[i].Side)) token = TopCenterFlushToken(color);
                        else if ([bottomA, bottomB].includes(tokens[i].Side)) token = BottomCenterFlushToken(color);
                    }
                } else if (numCities === 3) {
                    if (sides[top] === city && sides[right] === city && sides[bottom] === city) {
                        if (numRoads > 0) {
                            if (tokens[i].Side === leftA) token = LeftBottomFlushToken(color);
                            else if (tokens[i].Side === leftB) token = LeftTopFlushToken(color);
                        } else token = LeftCenterFlushToken(color);
                    } else if (sides[right] === city && sides[bottom] === city && sides[left] === city) {
                        if (numRoads > 0) {
                            if (tokens[i].Side === topA) token = TopLeftFlushToken(color);
                            else if (tokens[i].Side === topB) token = TopRightFlushToken(color);
                        } else token = TopCenterFlushToken(color);
                    } else if (sides[bottom] === city && sides[left] === city && sides[top] === city) {
                        if (numRoads > 0) {
                            if (tokens[i].Side === rightA) token = RightTopFlushToken(color);
                            else if (tokens[i].Side === rightB) token = RightBottomFlushToken(color);
                        } else token = RightCenterFlushToken(color);
                    } else if (sides[left] === city && sides[top] === city && sides[right] === city) {
                        if (numRoads > 0) {
                            if (tokens[i].Side === bottomA) token = BottomRightFlushToken(color);
                            else if (tokens[i].Side === bottomB) token = BottomLeftFlushToken(color);
                        } else token = BottomCenterFlushToken(color);
                    }
                } else if (numRoads === 2) {
                    if (sides[top] === road && sides[right] === road) {
                        if ([topB, rightA].includes(tokens[i].Side)) token = TopRightToken(color);
                        else token = CenterToken(color);
                    } else if (sides[right] === road && sides[bottom] === road) {
                        if ([rightB, bottomA].includes(tokens[i].Side)) token = BottomRightToken(color);
                        else token = CenterToken(color);
                    } else if (sides[bottom] === road && sides[left] === road) {
                        if ([bottomB, leftA].includes(tokens[i].Side)) token = BottomLeftToken(color);
                        else token = CenterToken(color);
                    } else if (sides[left] === road && sides[top] === road) {
                        if ([leftB, topA].includes(tokens[i].Side)) token = TopLeftToken(color);
                        else token = CenterToken(color);
                    } else if (sides[top] === road && sides[bottom] === road) {
                        if ([topB, rightA, rightB, bottomA].includes(tokens[i].Side)) token = RightCenterToken(color);
                        else if ([bottomB, leftA, leftB, topA].includes(tokens[i].Side)) token = LeftCenterToken(color);
                    } else if (sides[left] === road && sides[right] === road) {
                        if ([leftB, topA, topB, rightA].includes(tokens[i].Side)) token = TopCenterToken(color);
                        else if ([rightB, bottomA, bottomB, leftA].includes(tokens[i].Side)) token = BottomCenterToken(color);
                    }
                } else if (numRoads === 3) {
                    if (sides[top] === farm) {
                        if ([leftB, topA, topB, rightA].includes(tokens[i].Side)) token = TopCenterToken(color);
                        else if ([rightB, bottomA].includes(tokens[i].Side)) token = BottomRightToken(color);
                        else if ([bottomB, leftA].includes(tokens[i].Side)) token = BottomLeftToken(color);
                    } else if (sides[right] === farm) {
                        if ([topB, rightA, rightB, bottomA].includes(tokens[i].Side)) token = RightCenterToken(color);
                        else if ([bottomB, leftA].includes(tokens[i].Side)) token = BottomLeftToken(color);
                        else if ([leftB, topA].includes(tokens[i].Side)) token = TopLeftToken(color);
                    } else if (sides[bottom] === farm) {
                        if ([rightB, bottomA, bottomB, leftA].includes(tokens[i].Side)) token = BottomCenterToken(color);
                        else if ([leftB, topA].includes(tokens[i].Side)) token = TopLeftToken(color);
                        else if ([topB, rightA].includes(tokens[i].Side)) token = TopRightToken(color);
                    } else if (sides[left] === farm) {
                        if ([bottomB, leftA, leftB, topA].includes(tokens[i].Side)) token = LeftCenterToken(color);
                        else if ([topB, rightA].includes(tokens[i].Side)) token = TopRightToken(color);
                        else if ([rightB, bottomA].includes(tokens[i].Side)) token = BottomRightToken(color);
                    }
                }
            } else if (tokens[i].Type === knight) {
                if (numCities === 1 || !connectedCitySides) {
                    if (tokens[i].Side === top) token = TopCenterFlushToken(color);
                    else if (tokens[i].Side === right) token = RightCenterFlushToken(color);
                    else if (tokens[i].Side === bottom) token = BottomCenterFlushToken(color);
                    else if (tokens[i].Side === left) token = LeftCenterFlushToken(color);
                } else if (numCities === 2) {
                    if (sides[top] === city && sides[right] === city) token = TopRightInsideToken(color);
                    if (sides[right] === city && sides[bottom] === city) token = BottomRightInsideToken(color);
                    if (sides[bottom] === city && sides[left] === city) token = BottomLeftInsideToken(color);
                    if (sides[left] === city && sides[top] === city) token = TopLeftInsideToken(color);
                    if (sides[top] === city && sides[bottom] === city) token = CenterToken(color);
                    if (sides[left] === city && sides[right] === city) token = CenterToken(color);
                } else if (numCities === 3 || numCities === 4) token = CenterToken(color);
            } else if (tokens[i].Type === thief) {
                if (numRoads === 1 || numRoads === 3 || numRoads === 4) {
                    if (tokens[i].Side === top) token = TopCenterToken(color);
                    else if (tokens[i].Side === right) token = RightCenterToken(color);
                    else if (tokens[i].Side === bottom) token = BottomCenterToken(color);
                    else if (tokens[i].Side === left) token = LeftCenterToken(color);
                } else if (numRoads === 2) {
                    if (sides[top] === road && sides[right] === road) token = TopRightInsideToken(color);
                    else if (sides[right] === road && sides[bottom] === road) token = BottomRightInsideToken(color);
                    else if (sides[bottom] === road && sides[left] === road) token = BottomLeftInsideToken(color);
                    else if (sides[left] === road && sides[top] === road) token = TopLeftInsideToken(color);
                    else token = CenterToken(color);
                }
            } else if (tokens[i].Type === monk) token = CenterToken(color)
        }
    }

    return (
        <div ref={ ref } { ...props } className="w-full h-full overflow-hidden bg-zinc-900 box-border border border-zinc-100">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
                    <defs>{colorDefinitions.map((el, i) => React.cloneElement(el, { key:  i }))}</defs>
                    {farms.map((el, i) => React.cloneElement(el, { key:  i }))}
                    {roads.map((el, i) => React.cloneElement(el, { key:  i }))}
                    {cities.map((el, i) => React.cloneElement(el, { key:  i }))}
                    {cloisters.map((el, i) => React.cloneElement(el, { key:  i }))}
                    {token ? token : <></>}
                    {
                        x === 0 && y === 0 ?
                        <>
                            <text x="33" y="8" className="font-bold text-[0.4rem]" fill={dark}>city</text>
                            <text x="31" y="25" className="font-bold text-[0.4rem]" fill={gray}>farm</text>
                            <text x="31" y="40" className="font-bold text-[0.4rem]" fill={dark}>road</text>
                            <text x="31" y="58" className="font-bold text-[0.4rem]" fill={gray}>farm</text>
                        </> : null
                    }
                </svg>
            </div>
        </div>
    )
})
