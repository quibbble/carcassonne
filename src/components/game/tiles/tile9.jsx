import React from "react";
import { FARM, CITY } from "../models/structure";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";
import { DARK, GRAY } from "../models/color";
import { BottomCenterFlushToken, CenterToken, LeftCenterFlushToken, RightCenterFlushToken, TopCenterFlushToken } from "../tokens/tokens";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { BottomCity, LeftCity, RightCity, TopCity } from "../structures/city";

export const CFFFNFF = [
    {
        type: CITY,
        sides: [TOP],
        path: TopCity(GRAY),
        token: TopCenterFlushToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTA, RIGHTB, BOTTOMA, BOTTOMB, LEFTA, LEFTB],
        path: <path fill={ DARK } d="m75,0v75H0V0c11.35,7.57,24.43,11.36,37.5,11.36S63.65,7.57,75,0Z"/>,
        token: CenterToken,
        banner: undefined
    }
]

export const FCFFNFF = [
    {
        type: CITY,
        sides: [RIGHT],
        path: RightCity(GRAY),
        token: RightCenterFlushToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [TOPA, TOPB, BOTTOMA, BOTTOMB, LEFTA, LEFTB],
        path: <path fill={ DARK } d="m75,75H0V0h75c-7.57,11.35-11.36,24.43-11.36,37.5s3.79,26.15,11.36,37.5Z"/>,
        token: CenterToken,
        banner: undefined
    }
]

export const FFCFNFF = [
    {
        type: CITY,
        sides: [BOTTOM],
        path: BottomCity(GRAY),
        token: BottomCenterFlushToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [TOPA, TOPB, RIGHTA, RIGHTB, LEFTA, LEFTB],
        path: <path fill={ DARK } d="m0,75V0s75,0,75,0v75c-11.35-7.57-24.43-11.36-37.5-11.36-13.07,0-26.15,3.79-37.5,11.36Z"/>,
        token: CenterToken,
        banner: undefined
    }
]

export const FFFCNFF = [
    {
        type: CITY,
        sides: [LEFT],
        path: LeftCity(GRAY),
        token: LeftCenterFlushToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [TOPA, TOPB, RIGHTA, RIGHTB, BOTTOMA, BOTTOMB],
        path: <path fill={ DARK } d="m0,0h75s0,75,0,75H0c7.57-11.35,11.36-24.43,11.36-37.5S7.57,11.35,0,0Z"/>,
        token: CenterToken,
        banner: undefined
    }
]
