import React from "react";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";
import { CITY, FARM } from "../models/structure";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { BottomLeftTopCity, LeftTopRightCity, RightBottomLeftCity, TopRightBottomCity } from "../structures/city";
import { BottomCenterFlushToken, CenterToken, LeftCenterFlushToken, RightCenterFlushToken, TopCenterFlushToken } from "../tokens/tokens";
import { DARK, GRAY } from "../models/color";

export const CCFCNTF = [
    {
        type: CITY,
        sides: [TOP, RIGHT, LEFT],
        path: LeftTopRightCity(GRAY),
        token: CenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [BOTTOMA, BOTTOMB],
        path: <path fill={ DARK } d="m75,75H0c11.36-7.57,24.43-11.36,37.5-11.36s26.15,3.79,37.5,11.36Z"/>,
        token: BottomCenterFlushToken,
        banner: undefined
    }
]

export const CCCFNTF = [
    {
        type: CITY,
        sides: [TOP, RIGHT, BOTTOM],
        path: TopRightBottomCity(GRAY),
        token: CenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [LEFTA, LEFTB],
        path: <path fill={ DARK } d="m0,75V0c7.57,11.36,11.36,24.43,11.36,37.5S7.57,63.65,0,75Z"/>,
        token: LeftCenterFlushToken,
        banner: undefined
    }
]

export const FCCCNTF = [
    {
        type: CITY,
        sides: [RIGHT, BOTTOM, LEFT],
        path: RightBottomLeftCity(GRAY),
        token: CenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [TOPA, TOPB],
        path: <path fill={ DARK } d="m75,0c-11.35,7.57-24.42,11.35-37.5,11.35S11.36,7.57,0,0h75Z"/>,
        token: TopCenterFlushToken,
        banner: undefined
    }
]

export const CFCCNTF = [
    {
        type: CITY,
        sides: [TOP, BOTTOM, LEFT],
        path: BottomLeftTopCity(GRAY),
        token: CenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTA, RIGHTB],
        path: <path fill={ DARK } d="m75,75c-7.57-11.35-11.35-24.42-11.35-37.5s3.78-26.14,11.35-37.5v75Z"/>,
        token: RightCenterFlushToken,
        banner: undefined
    }
]
