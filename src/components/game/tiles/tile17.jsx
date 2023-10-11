import React from "react";
import { CITY, FARM } from "../models/structure";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { BottomLeftCity, BottomRightCity, TopLeftCity, TopRightCity } from "../structures/city";
import { BottomLeftInsideToken, BottomRightInsideToken, TopLeftInsideToken, TopRightInsideToken } from "../tokens/tokens";
import { DARK, GRAY } from "../models/color";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";

export const CFFCNTF = [
    {
        type: CITY,
        sides: [TOP, LEFT],
        path: TopLeftCity(GRAY),
        token: TopLeftInsideToken,
        banner: undefined,
        bbox: <polygon fill={ GRAY } points="0 50 50 0 0 0 0 50"/>
    },
    {
        type: FARM,
        sides: [RIGHTA, RIGHTB, BOTTOMA, BOTTOMB],
        path: <polygon fill={ DARK } points="75 0 75 75 0 75 75 0"/>,
        token: BottomRightInsideToken,
        banner: undefined
    },
]

export const CCFFNTF = [
    {
        type: CITY,
        sides: [TOP, RIGHT],
        path: TopRightCity(GRAY),
        token: TopRightInsideToken,
        banner: undefined,
        bbox: <polygon fill={ GRAY } points="25 0 75 50 75 0 25 0"/>
    },
    {
        type: FARM,
        sides: [BOTTOMA, BOTTOMB, LEFTA, LEFTB],
        path: <polygon fill={ DARK } points="75 75 0 75 0 0 75 75"/>,
        token: BottomLeftInsideToken,
        banner: undefined
    },
]

export const FCCFNTF = [
    {
        type: CITY,
        sides: [RIGHT, BOTTOM],
        path: BottomRightCity(GRAY),
        token: BottomRightInsideToken,
        banner: undefined,
        bbox: <polygon fill={ GRAY } points="75 25 25 75 75 75 75 25"/>,
    },
    {
        type: FARM,
        sides: [TOPA, TOPB, LEFTA, LEFTB],
        path: <polygon fill={ DARK } points="0 75 0 0 75 0 0 75"/>,
        token: TopLeftInsideToken,
        banner: undefined
    },
]

export const FFCCNTF = [
    {
        type: CITY,
        sides: [BOTTOM, LEFT],
        path: BottomLeftCity(GRAY),
        token: BottomLeftInsideToken,
        banner: undefined,
        bbox: <polygon fill={ GRAY } points="50 75 0 25 0 75 50 75"/>
    },
    {
        type: FARM,
        sides: [TOPA, TOPB, RIGHTA, RIGHTB],
        path: <polygon fill={ DARK } points="0 0 75 0 75 75 0 0"/>,
        token: TopRightInsideToken,
        banner: undefined
    },
]
