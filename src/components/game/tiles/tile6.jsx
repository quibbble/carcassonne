import React from "react";
import { CITY, ROAD, FARM } from "../models/structure";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { BottomCity, LeftCity, RightCity, TopCity } from "../structures/city";
import { DARK, GRAY } from "../models/color";
import { BottomCenterFlushToken, BottomCenterToken, BottomHalfCenterToken, BottomLeftInsideToken, BottomLeftToken, BottomRightInsideToken, BottomRightToken, LeftCenterFlushToken, LeftCenterToken, LeftHalfCenterToken, RightCenterFlushToken, RightCenterToken, RightHalfCenterToken, TopCenterFlushToken, TopCenterToken, TopHalfCenterToken, TopLeftInsideToken, TopLeftToken, TopRightInsideToken, TopRightToken } from "../tokens/tokens";
import { BottomRoad, LeftRoad, RightRoad, TopRoad } from "../structures/road";
import { TOPA, TOPB, BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB } from "../models/farmside";

export const CRRRNFF = [
    {
        type: CITY,
        sides: [TOP],
        path: TopCity(GRAY),
        token: TopCenterFlushToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [RIGHT],
        path: RightRoad(GRAY),
        token: RightCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [BOTTOM],
        path: BottomRoad(GRAY),
        token: BottomCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [LEFT],
        path: LeftRoad(GRAY),
        token: LeftCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTA, LEFTB],
        path: <path fill={ DARK } d="m75,0v35.63H0V0c11.35,7.57,24.42,11.36,37.5,11.36S63.65,7.57,75,0Z"/>,
        token: TopHalfCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTB, BOTTOMA],
        path: <rect fill={ DARK } x="39.38" y="39.37" width="35.62" height="35.63"/>,
        token: BottomRightToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [BOTTOMB, LEFTA],
        path: <rect fill={ DARK } y="39.37" width="35.63" height="35.63"/>,
        token: BottomLeftToken,
        banner: undefined
    },
]

export const RCRRNFF = [
    {
        type: ROAD,
        sides: [TOP],
        path: TopRoad(GRAY),
        token: TopCenterToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [RIGHT],
        path: RightCity(GRAY),
        token: RightCenterFlushToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [BOTTOM],
        path: BottomRoad(GRAY),
        token: BottomCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [LEFT],
        path: LeftRoad(GRAY),
        token: LeftCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [TOPB, BOTTOMA],
        path: <path fill={ DARK } d="m75,75h-35.63V0h35.63c-7.57,11.35-11.36,24.42-11.36,37.5s3.79,26.15,11.36,37.5Z"/>,
        token: RightHalfCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [BOTTOMB, LEFTA],
        path: <rect fill={ DARK } y="39.37" width="35.63" height="35.63"/>,
        token: BottomLeftToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [LEFTB, TOPA],
        path: <rect fill={ DARK } y="0" width="35.63" height="35.62"/>,
        token: TopLeftToken,
        banner: undefined
    }
]

export const RRCRNFF = [
    {
        type: ROAD,
        sides: [TOP],
        path: TopRoad(GRAY),
        token: TopCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [RIGHT],
        path: RightRoad(GRAY),
        token: RightCenterToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [BOTTOM],
        path: BottomCity(GRAY),
        token: BottomCenterFlushToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [LEFT],
        path: LeftRoad(GRAY),
        token: LeftCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTB, LEFTA],
        path: <path fill={ DARK } d="m0,75v-35.63s75,0,75,0v35.63c-11.35-7.57-24.42-11.36-37.5-11.36s-26.15,3.79-37.5,11.36Z"/>,
        token: BottomHalfCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [LEFTB, TOPA],
        path: <rect fill={ DARK } y="0" width="35.63" height="35.62"/>,
        token: TopLeftToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [TOPB, RIGHTA],
        path: <rect fill={ DARK } x="39.38" y="0" width="35.62" height="35.62"/>,
        token: TopRightToken,
        banner: undefined
    },
]

export const RRRCNFF = [
    {
        type: ROAD,
        sides: [TOP],
        path: TopRoad(GRAY),
        token: TopCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [RIGHT],
        path: RightRoad(GRAY),
        token: RightCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [BOTTOM],
        path: BottomRoad(GRAY),
        token: BottomCenterToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [LEFT],
        path: LeftCity(GRAY),
        token: LeftCenterFlushToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [TOPA, BOTTOMB],
        path: <path fill={ DARK } d="m0,0h35.63s0,75,0,75H0c7.57-11.35,11.36-24.42,11.36-37.5S7.57,11.35,0,0Z"/>,
        token: LeftHalfCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [TOPB, RIGHTA],
        path: <rect fill={ DARK } x="39.38" y="0" width="35.62" height="35.62"/>,
        token: TopRightToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTB, BOTTOMA],
        path: <rect fill={ DARK } x="39.38" y="39.37" width="35.62" height="35.63"/>,
        token: BottomRightToken,
        banner: undefined
    }
]
