import React from "react";
import { CITY, FARM } from "../models/structure";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { DARK, GRAY } from "../models/color";
import { BottomCity, LeftCity, RightCity, TopCity } from "../structures/city";
import { BottomCenterFlushToken, CenterToken, LeftCenterFlushToken, RightCenterFlushToken, TopCenterFlushToken } from "../tokens/tokens";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";

export const CFCFNFF = [
    {
        type: CITY,
        sides: [TOP],
        path: TopCity(GRAY),
        token: TopCenterFlushToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTA, RIGHTB, LEFTA, LEFTB],
        path: <path fill={ DARK } d="m75,0v75c-11.35-7.57-24.43-11.36-37.5-11.36S11.35,67.43,0,75V0c11.35,7.57,24.43,11.36,37.5,11.36S63.65,7.57,75,0Z"/>,
        token: CenterToken,
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

export const FCFCNFF = [
    {
        type: CITY,
        sides: [RIGHT],
        path: RightCity(GRAY),
        token: RightCenterFlushToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [TOPA, TOPB, BOTTOMA, BOTTOMB],
        path: <path fill={ DARK } d="m75,75H0c7.57-11.35,11.36-24.43,11.36-37.5S7.57,11.35,0,0h75c-7.57,11.35-11.36,24.43-11.36,37.5s3.79,26.15,11.36,37.5Z"/>,
        token: CenterToken,
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
