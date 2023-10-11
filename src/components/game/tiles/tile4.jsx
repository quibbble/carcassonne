import React from "react";
import { FARM, ROAD } from "../models/structure";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";
import { DARK, GRAY } from "../models/color";
import { BottomLeftCurveToken, BottomLeftInsideToken, BottomLeftToken, BottomRightCurveToken, BottomRightInsideToken, BottomRightToken, TopLeftCurveToken, TopLeftInsideToken, TopLeftToken, TopRightCurveToken, TopRightInsideToken, TopRightToken } from "../tokens/tokens";
import { BOTTOM, LEFT, TOP, RIGHT } from "../models/side";
import { BottomLeftRoad, BottomRightRoad, TopLeftRoad, TopRightRoad } from "../structures/road";

export const FFRRNFF = [
    {
        type: FARM,
        sides: [TOPA, TOPB, RIGHTA, RIGHTB, BOTTOMA, LEFTB],
        path: <path fill={ DARK } d="m75,0v75h-35.37c0-10.51-4.09-20.4-11.53-27.84S10.78,35.63.26,35.63h-.26V0h75Z"/>,
        token: TopRightInsideToken,
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
        type: ROAD,
        sides: [BOTTOM, LEFT],
        path: BottomLeftRoad(GRAY),
        token: BottomLeftCurveToken,
        banner: undefined
    }
]

export const RFFRNFF = [
    {
        type: FARM,
        sides: [TOPB, RIGHTA, RIGHTB, BOTTOMA, BOTTOMB, LEFTA],
        path: <path fill={ DARK } d="m75,0v75H0v-35.37c10.52,0,20.41-4.09,27.85-11.53,7.43-7.44,11.53-17.32,11.53-27.84v-.26h35.62Z"/>,
        token: BottomRightInsideToken,
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
    }
]

export const RRFFNFF = [
    {
        type: FARM,
        sides: [TOPA, RIGHTB, BOTTOMA, BOTTOMB, LEFTA, LEFTB],
        path: <path fill={ DARK } d="m75,39.38v35.62H0V0h35.37c0,10.52,4.1,20.41,11.54,27.85s17.32,11.53,27.84,11.53h.25Z"/>,
        token: BottomLeftInsideToken,
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
    }
]

export const FRRFNFF = [
    {
        type: FARM,
        sides: [TOPA, TOPB, RIGHTA, BOTTOMB, LEFTA, LEFTB],
        path: <path fill={ DARK } d="m75,0v35.37c-10.51,0-20.4,4.1-27.84,11.53-7.44,7.44-11.53,17.33-11.53,27.85v.25H0V0h75Z"/>,
        token: TopLeftInsideToken,
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
        token: BottomRightCurveToken,
        banner: undefined
    }
]
