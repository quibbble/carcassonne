import React from "react";
import { CITY, ROAD, FARM } from "../models/structure";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { BottomLeftCity, BottomRightCity, TopLeftCity, TopRightCity } from "../structures/city";
import { DARK, GRAY } from "../models/color";
import { BottomLeftCurveToken, BottomLeftInsideToken, BottomLeftToken, BottomRightCurveToken, BottomRightInsideToken, BottomRightToken, LeftTopFlushToken, RightTopFlushToken, TopLeftCurveToken, TopLeftFlushToken, TopLeftInsideToken, TopLeftToken, TopRightCurveToken, TopRightFlushToken, TopRightInsideToken, TopRightToken } from "../tokens/tokens";
import { BottomLeftRoad, BottomRightRoad, TopLeftRoad, TopRightRoad } from "../structures/road";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";

export const CRRCNTF = [
    {
        type: FARM,
        sides: [RIGHTA, BOTTOMB],
        path: <path fill={ DARK } d="m75,0v35.37c-10.52,0-20.4,4.1-27.84,11.54-7.44,7.43-11.53,17.32-11.53,27.84v.25H0L75,0Z"/>,
        token: RightTopFlushToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [TOP, LEFT],
        path: TopLeftCity(GRAY),
        token: TopLeftInsideToken,
        banner: undefined,
        bbox: <polygon fill={ GRAY } points="0 50 50 0 0 0 0 50"/>
    },
    {
        type: FARM,
        sides: [RIGHTB, BOTTOMA],
        path: <path fill={ DARK } d="m75,39.12v35.88h-35.62v-.25c0-9.52,3.7-18.46,10.43-25.19,6.73-6.73,15.68-10.44,25.19-10.44Z"/>,
        token: BottomRightToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [RIGHT, BOTTOM],
        path: BottomRightRoad(GRAY),
        token: BottomRightCurveToken,
        banner: undefined
    }
]

export const CCRRNTF = [
    {
        type: FARM,
        sides: [LEFTB, BOTTOMA],
        path: <path fill={ DARK } d="m75,75h-35.37c0-10.52-4.1-20.4-11.54-27.84-7.43-7.44-17.32-11.53-27.84-11.53H0V0l75,75Z"/>,
        token: LeftTopFlushToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [TOP, RIGHT],
        path: TopRightCity(GRAY),
        token: TopRightInsideToken,
        banner: undefined, 
        bbox: <polygon fill={ GRAY } points="25 0 75 50 75 0 25 0"/>
    },
    {
        type: FARM,
        sides: [BOTTOMB, LEFTA],
        path: <path fill={ DARK } d="m35.88,75H0v-35.62h.25c9.52,0,18.47,3.7,25.19,10.43,6.73,6.73,10.44,15.68,10.44,25.19Z"/>,
        token: BottomLeftToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [BOTTOM, LEFT],
        path: BottomLeftRoad(GRAY),
        token: BottomLeftCurveToken,
        banner: undefined
    }
]

export const RCCRNTF = [
    {
        type: FARM,
        sides: [TOPB, LEFTA],
        path: <path fill={ DARK } d="m0,75v-35.37c10.52,0,20.4-4.1,27.84-11.54,7.44-7.43,11.53-17.32,11.53-27.84V0h35.63L0,75Z"/>,
        token: TopRightFlushToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [RIGHT, BOTTOM],
        path: BottomRightCity(GRAY),
        token: BottomRightInsideToken,
        banner: undefined,
        bbox: <polygon fill={ GRAY } points="75 25 25 75 75 75 75 25"/>,
    },
    {
        type: FARM,
        sides: [LEFTB, TOPA],
        path: <path fill={ DARK } d="m35.62,0v.26c0,9.52-3.7,18.46-10.43,25.19C18.46,32.18,9.51,35.88,0,35.88V0h35.62Z"/>,
        token: TopLeftToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [TOP, LEFT],
        path: TopLeftRoad(GRAY),
        token: TopLeftCurveToken,
        banner: undefined
    }
]

export const RRCCNTF = [
    {
        type: FARM,
        sides: [TOPA, RIGHTB],
        path: <path fill={ DARK } d="m0,0h35.37c0,10.52,4.1,20.4,11.54,27.84,7.43,7.44,17.32,11.53,27.84,11.53h.25v35.63L0,0Z"/>,
        token: TopLeftFlushToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [BOTTOM, LEFT],
        path: BottomLeftCity(GRAY),
        token: BottomLeftInsideToken,
        banner: undefined,
        bbox: <polygon fill={ GRAY } points="50 75 0 25 0 75 50 75"/>
    },
    {
        type: FARM,
        sides: [TOPB, RIGHTA],
        path: <path fill={ DARK } d="m75,0v35.63h-.26c-9.51,0-18.46-3.71-25.19-10.44S39.12,9.52,39.12,0h35.88Z"/>,
        token: TopRightToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [TOP, RIGHT],
        path: TopRightRoad(GRAY),
        token: TopRightCurveToken,
        banner: undefined
    }
]
