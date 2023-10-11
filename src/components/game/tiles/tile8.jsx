import React from "react";
import { CITY, FARM, ROAD } from "../models/structure";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { BottomCity, LeftCity, RightCity, TopCity } from "../structures/city";
import { DARK, GRAY } from "../models/color";
import { BottomCenterFlushToken, BottomHalfCenterToken, BottomLeftCurveToken, BottomLeftInsideToken, BottomLeftToken, BottomRightCurveToken, BottomRightInsideToken, BottomRightToken, LeftCenterFlushToken, LeftHalfCenterToken, RightCenterFlushToken, RightHalfCenterToken, TopCenterFlushToken, TopHalfCenterToken, TopLeftCurveToken, TopLeftInsideToken, TopLeftToken, TopRightCurveToken, TopRightInsideToken, TopRightToken } from "../tokens/tokens";
import { BottomLeftRoad, BottomRightRoad, TopLeftRoad, TopRightRoad, TopRoad } from "../structures/road";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";

export const CFRRNFF = [
    {
        type: FARM,
        sides: [RIGHTA, RIGHTB, BOTTOMA, LEFTB],
        path: <path fill={ DARK } d="m75,0v75h-35.37c0-10.52-4.1-20.41-11.54-27.85-7.43-7.43-17.32-11.53-27.84-11.53H0V0c11.35,7.57,24.42,11.35,37.5,11.35S63.65,7.57,75,0Z"/>,
        token: RightHalfCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [BOTTOMB, LEFTA],
        path: <path fill={ DARK } d="m35.88,75H0v-35.62h.25c9.52,0,18.47,3.7,25.19,10.43,6.73,6.73,10.44,15.68,10.44,25.19Z"/>,
        token: BottomLeftToken,
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
        sides: [LEFT, BOTTOM],
        path: BottomLeftRoad(GRAY),
        token: BottomLeftCurveToken,
        banner: undefined
    }
]

export const RCFRNFF = [
    {
        type: FARM,
        sides: [TOPB, BOTTOMA, BOTTOMB, LEFTA],
        path: <path fill={ DARK } d="m75,75H0v-35.37c10.52,0,20.41-4.1,27.85-11.54,7.43-7.43,11.53-17.32,11.53-27.84V0h35.62c-7.57,11.35-11.35,24.42-11.35,37.5s3.78,26.15,11.35,37.5Z"/>,
        token: BottomHalfCenterToken,
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
        sides: [RIGHT],
        path: RightCity(GRAY),
        token: RightCenterFlushToken,
        banner: undefined
    }
]

export const RRCFNFF = [
    {
        type: FARM,
        sides: [TOPA, RIGHTB, LEFTA, LEFTB],
        path: <path fill={ DARK } d="m0,75V0s35.37,0,35.37,0c0,10.52,4.1,20.41,11.54,27.85,7.43,7.43,17.32,11.53,27.84,11.53h.25v35.62c-11.35-7.57-24.42-11.35-37.5-11.35s-26.15,3.78-37.5,11.35Z"/>,
        token: LeftHalfCenterToken,
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
        sides: [BOTTOM],
        path: BottomCity(GRAY),
        token: BottomCenterFlushToken,
        banner: undefined
    }
]

export const FRRCNFF = [
    {
        type: FARM,
        sides: [TOPA, TOPB, RIGHTA, BOTTOMB],
        path: <path fill={ DARK } d="m0,0h75s0,35.37,0,35.37c-10.52,0-20.41,4.1-27.85,11.54-7.43,7.43-11.53,17.32-11.53,27.84v.25H0c7.57-11.35,11.35-24.42,11.35-37.5S7.57,11.35,0,0Z"/>,
        token: TopHalfCenterToken,
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
        type: ROAD,
        sides: [RIGHT, BOTTOM],
        path: BottomRightRoad(GRAY),
        token: BottomRightInsideToken,
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
