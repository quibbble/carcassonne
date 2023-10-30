import React from "react";
import { CITY, FARM } from "../models/structure";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { DARK, GRAY } from "../models/color";
import { BottomCity, LeftCity, RightCity, TopCity } from "../structures/city";
import { BottomCenterFlushToken, CenterToken, LeftCenterFlushToken, RightCenterFlushToken, TopCenterFlushToken } from "../tokens/tokens";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";

export const CFFCNFF = [
    {
        type: CITY,
        sides: [TOP],
        path: TopCity(GRAY),
        token: TopCenterFlushToken,
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
        sides: [RIGHTA, RIGHTB, BOTTOMA, BOTTOMB],
        path: <path fill={ DARK } d="m75,0v75s-75,0-75,0c7.57-11.35,11.36-24.43,11.36-37.5S7.57,11.36,0,0c11.36,7.57,24.43,11.36,37.5,11.36S63.65,7.57,75,0Z"/>,
        token: CenterToken,
        banner: undefined
    }
]

export const CCFFNFF = [
    {
        type: CITY,
        sides: [TOP],
        path: TopCity(GRAY),
        token: TopCenterFlushToken,
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
        type: FARM,
        sides: [BOTTOMA, BOTTOMB, LEFTA, LEFTB],
        path: <path fill={ DARK } d="m75,75H0S0,0,0,0c11.35,7.57,24.43,11.36,37.5,11.36S63.65,7.57,75,0c-7.57,11.36-11.36,24.43-11.36,37.5,0,13.07,3.79,26.14,11.36,37.5Z"/>,
        token: CenterToken,
        banner: undefined
    }
]

export const FCCFNFF = [
    {
        type: CITY,
        sides: [RIGHT],
        path: RightCity(GRAY),
        token: RightCenterFlushToken,
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
        type: FARM,
        sides: [TOPA, TOPB, LEFTA, LEFTB],
        path: <path fill={ DARK } d="m0,75V0s75,0,75,0c-7.57,11.35-11.36,24.43-11.36,37.5,0,13.07,3.79,26.14,11.36,37.5-11.36-7.57-24.43-11.35-37.5-11.35-13.07,0-26.14,3.79-37.5,11.36Z"/>,
        token: CenterToken,
        banner: undefined
    }
]

export const FFCCNFF = [
    {
        type: CITY,
        sides: [BOTTOM],
        path: BottomCity(GRAY),
        token: BottomCenterFlushToken,
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
        sides: [TOPA, TOPB, RIGHTA, RIGHTB],
        path: <path fill={ DARK } d="m0,0h75s0,75,0,75c-11.35-7.57-24.43-11.35-37.5-11.35-13.07,0-26.14,3.79-37.5,11.36,7.57-11.36,11.35-24.43,11.35-37.5C11.36,24.43,7.57,11.36,0,0Z"/>,
        token: CenterToken,
        banner: undefined
    }
]
