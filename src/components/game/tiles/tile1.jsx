import React from "react";
import { GRAY, DARK } from "../models/color"; 
import { CITY, FARM, ROAD } from "../models/structure";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";
import { BottomCenterFlushToken, BottomHalfCenterToken, CenterToken, LeftCenterFlushToken, LeftHalfCenterToken, RightCenterFlushToken, RightHalfCenterToken, TopCenterFlushToken, TopHalfCenterToken } from "../tokens/tokens";
import { BottomCity, LeftCity, RightCity, TopCity } from "../structures/city";
import { LeftRightRoad, TopBottomRoad } from "../structures/road";

export const CRFRNFF = [
    {
        type: CITY,
        sides: [TOP],
        path: TopCity(GRAY),
        token: TopCenterFlushToken,
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
        type: ROAD,
        sides: [RIGHT, LEFT],
        path: LeftRightRoad(GRAY),
        token: CenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTB, BOTTOMA, BOTTOMB, LEFTA],
        path: <rect fill={ DARK } x="0" y="39.38" width="75" height="35.62"/>,
        token: BottomHalfCenterToken,
        banner: undefined
    }
]

export const RCRFNFF = [
    {
        type: FARM,
        sides: [TOPA, LEFTA, LEFTB, BOTTOMB],
        path: <rect fill={ DARK } x="0" y="0" width="35.62" height="75"/>,
        token: LeftHalfCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [TOP, BOTTOM],
        path: TopBottomRoad(GRAY),
        token: CenterToken,
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
        type: CITY,
        sides: [RIGHT],
        path: RightCity(GRAY),
        token: RightCenterFlushToken,
        banner: undefined
    }
]

export const FRCRNFF = [
    {
        type: FARM,
        sides: [TOPA, TOPB, RIGHTA, LEFTB],
        path: <rect fill={ DARK } x="0" y="0" width="75" height="35.62"/>,
        token: TopHalfCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [RIGHT, LEFT],
        path: LeftRightRoad(GRAY),
        token: CenterToken,
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
        type: CITY,
        sides: [BOTTOM],
        path: BottomCity(GRAY),
        token: BottomCenterFlushToken,
        banner: undefined
    }
]

export const RFRCNFF = [
    {
        type: FARM,
        sides: [TOPB, RIGHTA, RIGHTB, BOTTOMA],
        path: <rect fill={ DARK } x="39.38" y="0" width="35.62" height="75"/>,
        token: RightHalfCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [TOP, BOTTOM],
        path: TopBottomRoad(GRAY),
        token: CenterToken,
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
        type: CITY,
        sides: [LEFT],
        path: LeftCity(GRAY),
        token: LeftCenterFlushToken,
        banner: undefined
    }
]
