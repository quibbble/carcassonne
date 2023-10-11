import React from "react";
import { CITY, FARM } from "../models/structure";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { DARK, GRAY } from "../models/color";
import { BottomCenterFlushToken, CenterToken, LeftCenterFlushToken, RightCenterFlushToken, TopCenterFlushToken } from "../tokens/tokens";
import { LeftMiddleBanner, RightLeftCity, TopBottomCity, TopMiddleBanner } from "../structures/city";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";

export const FCFCNTT = [
    {
        type: FARM,
        sides: [TOPA, TOPB],
        path: <path fill={ DARK } d="m75,0c-11.35,7.57-24.42,11.35-37.5,11.35S11.36,7.57,0,0h75Z"/>,
        token: TopCenterFlushToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [LEFT, RIGHT],
        path: RightLeftCity(GRAY),
        token: CenterToken,
        banner: LeftMiddleBanner(DARK)
    },
    {
        type: FARM,
        sides: [BOTTOMA, BOTTOMB],
        path: <path fill={ DARK } d="m75,75H0c11.36-7.57,24.43-11.36,37.5-11.36s26.15,3.79,37.5,11.36Z"/>,
        token: BottomCenterFlushToken,
        banner: undefined
    }
]

export const CFCFNTT = [
    {
        type: FARM,
        sides: [LEFTA, LEFTB],
        path: <path fill={ DARK } d="m0,75V0c7.57,11.36,11.36,24.43,11.36,37.5S7.57,63.65,0,75Z"/>,
        token: LeftCenterFlushToken,
        banner: undefined
    },
    {
        type: CITY,
        sides: [TOP, BOTTOM],
        path: TopBottomCity(GRAY),
        token: CenterToken,
        banner: TopMiddleBanner(DARK)
    },
    {
        type: FARM,
        sides: [RIGHTA, RIGHTB],
        path: <path fill={ DARK } d="m75,75c-7.57-11.35-11.35-24.42-11.35-37.5s3.78-26.14,11.35-37.5v75Z"/>,
        token: RightCenterFlushToken,
        banner: undefined
    }
]
