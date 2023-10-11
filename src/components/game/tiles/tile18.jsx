import React from "react";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { CITY, FARM, ROAD } from "../models/structure";
import { BottomLeftBanner, BottomLeftTopCity, LeftTopRightCity, RightBottomLeftCity, TopLeftBanner, TopRightBanner, TopRightBottomCity } from "../structures/city";
import { BottomCenterFlushToken, BottomLeftFlushToken, BottomRightFlushToken, CenterToken, LeftBottomFlushToken, LeftCenterFlushToken, LeftTopFlushToken, RightBottomFlushToken, RightCenterFlushToken, RightTopFlushToken, TopCenterFlushToken, TopLeftFlushToken, TopRightFlushToken } from "../tokens/tokens";
import { DARK, GRAY } from "../models/color";
import { BottomRoad, LeftRoad, RightRoad, TopRoad } from "../structures/road";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";

export const CCRCNTT = [
    {
        type: ROAD,
        sides: [BOTTOM],
        path: BottomRoad(GRAY),
        token: BottomCenterFlushToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [TOP, RIGHT, LEFT],
        path: LeftTopRightCity(GRAY),
        token: CenterToken,
        banner: TopRightBanner(DARK)
    },
    {
        type: FARM,
        sides: [BOTTOMA],
        path: <path fill={ DARK } d="m75,75h-35.62v-11.32c12.45.34,24.81,4.12,35.62,11.32Z"/>,
        token: BottomRightFlushToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [BOTTOMB],
        path: <path fill={ DARK } d="m35.63,63.68v11.32H0c10.82-7.2,23.19-10.98,35.63-11.32Z"/>,
        token: BottomLeftFlushToken,
        banner: undefined
    }
]

export const CCCRNTT = [
    {
        type: ROAD,
        sides: [LEFT],
        path: LeftRoad(GRAY),
        token: LeftCenterFlushToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [TOP, RIGHT, BOTTOM],
        path: TopRightBottomCity(GRAY),
        token: CenterToken,
        banner: TopRightBanner(DARK)
    },
    {
        type: FARM,
        sides: [LEFTA],
        path: <path fill={ DARK } d="m0,75v-35.62h11.32c-.34,12.45-4.12,24.81-11.32,35.62Z"/>,
        token: LeftBottomFlushToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [LEFTB],
        path: <path fill={ DARK } d="m11.32,35.63H0V0c7.2,10.82,10.98,23.19,11.32,35.63Z"/>,
        token: LeftTopFlushToken,
        banner: undefined
    }
]

export const RCCCNTT = [
    {
        type: ROAD,
        sides: [TOP],
        path: TopRoad(GRAY),
        token: TopCenterFlushToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [RIGHT, BOTTOM, LEFT],
        path: RightBottomLeftCity(GRAY),
        token: CenterToken,
        banner: BottomLeftBanner(DARK)
    },
    {
        type: FARM,
        sides: [TOPA],
        path: <path fill={ DARK } d="m0,0h35.62s0,11.32,0,11.32C23.17,10.98,10.81,7.2,0,0Z"/>,
        token: TopLeftFlushToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [TOPB],
        path: <path fill={ DARK } d="m39.37,11.32V0s35.63,0,35.63,0c-10.82,7.2-23.19,10.98-35.63,11.32Z"/>,
        token: TopRightFlushToken,
        banner: undefined
    }
]

export const CRCCNTT = [
    {
        type: ROAD,
        sides: [RIGHT],
        path: RightRoad(GRAY),
        token: RightCenterFlushToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [TOP, BOTTOM, LEFT],
        path: BottomLeftTopCity(GRAY),
        token: CenterToken,
        banner: TopLeftBanner(DARK)
    },
    {
        type: FARM,
        sides: [RIGHTA],
        path: <path fill={ DARK } d="m75,0v35.62s-11.32,0-11.32,0C64.02,23.17,67.8,10.81,75,0Z"/>,
        token: RightTopFlushToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTB],
        path: <path fill={ DARK } d="m63.68,39.37h11.32s0,35.63,0,35.63c-7.2-10.82-10.98-23.19-11.32-35.63Z"/>,
        token: RightBottomFlushToken,
        banner: undefined
    }
]
