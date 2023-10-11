import React from "react";
import { FARM, ROAD } from "../models/structure";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";
import { DARK, GRAY } from "../models/color";
import { BOTTOM, LEFT, TOP, RIGHT } from "../models/side";
import { BottomHalfCenterToken, CenterToken, LeftHalfCenterToken, RightHalfCenterToken, TopHalfCenterToken } from "../tokens/tokens";
import { TopBottomRoad, LeftRightRoad } from "../structures/road";

export const RFRFNFF = [
    {
        type: FARM,
        sides: [TOPA, LEFTA, LEFTB, BOTTOMB],
        path: <rect fill={ DARK } x="0" y="0" width="35.62" height="75"/>,
        token: LeftHalfCenterToken,
        banner: undefined
    },
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
]

export const FRFRNFF = [
    {
        type: FARM,
        sides: [TOPA, TOPB, RIGHTA, LEFTB],
        path: <rect fill={ DARK } x="0" y="0" width="75" height="35.62"/>,
        token: TopHalfCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTB, BOTTOMA, BOTTOMB, LEFTA],
        path: <rect fill={ DARK } x="0" y="39.38" width="75" height="35.62"/>,
        token: BottomHalfCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [RIGHT, LEFT],
        path: LeftRightRoad(GRAY),
        token: CenterToken,
        banner: undefined
    },
]
