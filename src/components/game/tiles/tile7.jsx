import React from "react";
import { CITY, FARM, ROAD } from "../models/structure";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { BottomCity, LeftCity, RightCity, TopCity } from "../structures/city";
import { DARK, GRAY } from "../models/color";
import { BottomRightInsideToken, BottomLeftInsideToken, BottomCenterFlushToken, BottomHalfCenterToken, BottomLeftCurveToken, BottomRightCurveToken, TopLeftInsideToken, TopRightInsideToken, LeftCenterFlushToken, LeftHalfCenterToken, RightCenterFlushToken, RightHalfCenterToken, TopCenterFlushToken, TopHalfCenterToken, TopLeftCurveToken, TopRightCurveToken, BottomRightToken, BottomLeftToken, TopLeftToken, TopRightToken } from "../tokens/tokens";
import { BottomLeftRoad, BottomRightRoad, TopLeftRoad, TopRightRoad } from "../structures/road";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";

export const CRRFNFF = [
    {
        type: FARM,
        sides: [RIGHTA, BOTTOMB, LEFTA, LEFTB],
        path: <path fill={ DARK } d="m75,0v35.37c-10.52,0-20.4,4.09-27.84,11.53-7.44,7.44-11.53,17.33-11.53,27.84v.26H0V0c11.36,7.57,24.43,11.36,37.5,11.36S63.64,7.57,75,0Z"/>,
        token: LeftHalfCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTB, BOTTOMA],
        path: <path fill={ DARK } d="m75,39.12v35.88h-35.62v-.25c0-9.52,3.7-18.46,10.43-25.19,6.73-6.73,15.68-10.44,25.19-10.44Z"/>,
        token: BottomRightToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [TOP],
        path: TopCity(GRAY),
        token: TopCenterFlushToken,
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

export const FCRRNFF = [
    {
        type: FARM,
        sides: [BOTTOMB, LEFTA],
        path: <path fill={ DARK } d="m35.88,75H0v-35.62h.25c9.52,0,18.47,3.7,25.19,10.43,6.73,6.73,10.44,15.68,10.44,25.19Z"/>,
        token: BottomLeftToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [TOPA, TOPB, BOTTOMA, LEFTB],
        path: <path fill={ DARK } d="m75,75h-35.37c0-10.52-4.09-20.4-11.53-27.84-7.44-7.44-17.33-11.53-27.84-11.53h-.26V0h75c-7.57,11.36-11.36,24.43-11.36,37.5s3.79,26.14,11.36,37.5Z"/>,
        token: TopHalfCenterToken,
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
        sides: [BOTTOM, LEFT],
        path: BottomLeftRoad(GRAY),
        token: BottomLeftCurveToken,
        banner: undefined
    }
]

export const RFCRNFF = [
    {
        type: FARM,
        sides: [TOPB, RIGHTA, RIGHTB, LEFTA],
        path: <path fill={ DARK } d="m0,75v-35.37c10.52,0,20.4-4.09,27.84-11.53,7.44-7.44,11.53-17.33,11.53-27.84v-.26h35.63s0,75,0,75c-11.36-7.57-24.43-11.36-37.5-11.36-13.07,0-26.14,3.79-37.5,11.36Z"/>,
        token: RightHalfCenterToken,
        banner: undefined
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
    },
    {
        type: CITY,
        sides: [BOTTOM],
        path: BottomCity(GRAY),
        token: BottomCenterFlushToken,
        banner: undefined
    }
]

export const RRFCNFF = [
    {
        type: FARM,
        sides: [TOPA, RIGHTB, BOTTOMA, BOTTOMB],
        path: <path fill={ DARK } d="m0,0h35.37c0,10.52,4.09,20.4,11.53,27.84,7.44,7.44,17.33,11.53,27.84,11.53h.26v35.63s-75,0-75,0c7.57-11.36,11.36-24.43,11.36-37.5S7.57,11.36,0,0Z"/>,
        token: BottomHalfCenterToken,
        banner: undefined
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
    },
    {
        type: CITY,
        sides: [LEFT],
        path: LeftCity(GRAY),
        token: LeftCenterFlushToken,
        banner: undefined
    }
]
