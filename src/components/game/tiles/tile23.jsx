import React from "react";
import { CLOISTER, FARM, ROAD } from "../models/structure";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";
import { BottomCenterFlushToken, CenterToken, LeftCenterFlushToken, RightCenterFlushToken, TopCenterFlushToken, TopLeftInsideToken, TopLeftToken, TopRightInsideToken, TopRightToken } from "../tokens/tokens";
import { BOTTOM, CENTER, LEFT, RIGHT, TOP } from "../models/side";
import { BottomRoad, LeftRoad, RightRoad, TopRoad } from "../structures/road";
import { DARK, GRAY } from "../models/color";
import { Cloister } from "../structures/cloister";

export const FFRFMFF = [
    {
        type: FARM,
        sides: [TOPA, TOPB, RIGHTA, RIGHTB, BOTTOMA, BOTTOMB, LEFTA, LEFTB],
        path: <polygon fill={ DARK } points="75 0 75 75 39.38 75 39.38 46.87 46.88 46.87 46.88 28.12 28.13 28.12 28.13 46.87 35.63 46.87 35.63 75 0 75 0 0 75 0"/>,
        token: TopLeftToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [BOTTOM],
        path: BottomRoad(GRAY),
        token: BottomCenterFlushToken,
        banner: undefined
    },
    {
        type: CLOISTER,
        sides: [CENTER],
        path: Cloister(GRAY),
        token: CenterToken,
        banner: undefined
    }
]

export const FFFRMFF = [
    {
        type: FARM,
        sides: [TOPA, TOPB, RIGHTA, RIGHTB, BOTTOMA, BOTTOMB, LEFTA, LEFTB],
        path: <polygon fill={ DARK } points="75 75 0 75 0 39.38 28.13 39.38 28.13 46.88 46.88 46.88 46.88 28.13 28.13 28.13 28.13 35.63 0 35.63 0 0 75 0 75 75"/>,
        token: TopLeftToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [LEFT],
        path: LeftRoad(GRAY),
        token: LeftCenterFlushToken,
        banner: undefined
    },
    {
        type: CLOISTER,
        sides: [CENTER],
        path: Cloister(GRAY),
        token: CenterToken,
        banner: undefined
    }
]

export const RFFFMFF = [
    {
        type: FARM,
        sides: [TOPA, TOPB, RIGHTA, RIGHTB, BOTTOMA, BOTTOMB, LEFTA, LEFTB],
        path: <polygon fill={ DARK } points="0 75 0 0 35.62 0 35.62 28.13 28.12 28.13 28.12 46.88 46.87 46.88 46.87 28.13 39.37 28.13 39.37 0 75 0 75 75 0 75"/>,
        token: TopLeftToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [TOP],
        path: TopRoad(GRAY),
        token: TopCenterFlushToken,
        banner: undefined
    },
    {
        type: CLOISTER,
        sides: [CENTER],
        path: Cloister(GRAY),
        token: CenterToken,
        banner: undefined
    }
]


export const FRFFMFF = [
    {
        type: FARM,
        sides: [TOPA, TOPB, RIGHTA, RIGHTB, BOTTOMA, BOTTOMB, LEFTA, LEFTB],
        path: <polygon fill={ DARK } points="0 0 75 0 75 35.62 46.87 35.62 46.87 28.12 28.12 28.12 28.12 46.87 46.87 46.87 46.87 39.37 75 39.37 75 75 0 75 0 0"/>,
        token: TopLeftToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [RIGHT],
        path: RightRoad(GRAY),
        token: RightCenterFlushToken,
        banner: undefined
    },
    {
        type: CLOISTER,
        sides: [CENTER],
        path: Cloister(GRAY),
        token: CenterToken,
        banner: undefined
    }
]
