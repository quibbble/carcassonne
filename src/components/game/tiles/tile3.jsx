import React from "react";
import { FARM, ROAD } from "../models/structure";
import { BottomRoad, LeftRoad, RightRoad, TopRoad } from "../structures/road";
import { BottomCenterToken, BottomHalfCenterToken, BottomLeftInsideToken, BottomLeftToken, BottomRightInsideToken, BottomRightToken, LeftCenterToken, LeftHalfCenterToken, RightCenterToken, RightHalfCenterToken, TopCenterToken, TopHalfCenterToken, TopLeftInsideToken, TopLeftToken, TopRightInsideToken, TopRightToken } from "../tokens/tokens";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { DARK, GRAY } from "../models/color";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";

export const FRRRNFF = [
    {
        type: FARM,
        sides: [TOPA, TOPB],
        path: <rect fill={ DARK } x="0" y="0" width="75" height="35.62"/>,
        token: TopHalfCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [RIGHT],
        path: RightRoad(GRAY),
        token: RightCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [BOTTOM],
        path: BottomRoad(GRAY),
        token: BottomCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [LEFT],
        path: LeftRoad(GRAY),
        token: LeftCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTB, BOTTOMA],
        path: <rect fill={ DARK } x="39.38" y="39.37" width="35.62" height="35.63"/>,
        token: BottomRightToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [BOTTOMB, LEFTA],
        path: <rect fill={ DARK } y="39.37" width="35.63" height="35.63"/>,
        token: BottomLeftToken,
        banner: undefined
    }
]

export const RFRRNFF = [
    {
        type: ROAD,
        sides: [TOP],
        path: TopRoad(GRAY),
        token: TopCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTA, RIGHTB],
        path: <rect fill={ DARK } x="39.38" y="0" width="35.62" height="75"/>,
        token: RightHalfCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [BOTTOM],
        path: BottomRoad(GRAY),
        token: BottomCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [LEFT],
        path: LeftRoad(GRAY),
        token: LeftCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [BOTTOMB, LEFTA],
        path: <rect fill={ DARK } y="39.37" width="35.63" height="35.63"/>,
        token: BottomLeftToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [LEFTB, TOPA],
        path: <rect fill={ DARK } y="0" width="35.63" height="35.62"/>,
        token: TopLeftToken,
        banner: undefined
    }
]

export const RRFRNFF = [
    {
        type: ROAD,
        sides: [TOP],
        path: TopRoad(GRAY),
        token: TopCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [RIGHT],
        path: RightRoad(GRAY),
        token: RightCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [BOTTOMA, BOTTOMB],
        path: <rect fill={ DARK } x="0" y="39.38" width="75" height="35.62"/>,
        token: BottomHalfCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [LEFT],
        path: LeftRoad(GRAY),
        token: LeftCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [TOPB, RIGHTA],
        path: <rect fill={ DARK } x="39.38" y="0" width="35.62" height="35.62"/>,
        token: TopRightToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [LEFTB, TOPA],
        path: <rect fill={ DARK } y="0" width="35.63" height="35.62"/>,
        token: TopLeftToken,
        banner: undefined
    }
]

export const RRRFNFF = [
    {
        type: ROAD,
        sides: [TOP],
        path: TopRoad(GRAY),
        token: TopCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [RIGHT],
        path: RightRoad(GRAY),
        token: RightCenterToken,
        banner: undefined
    },
    {
        type: ROAD,
        sides: [BOTTOM],
        path: BottomRoad(GRAY),
        token: BottomCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [LEFTA, LEFTB],
        path: <rect fill={ DARK } x="0" y="0" width="35.62" height="75"/>,
        token: LeftHalfCenterToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [TOPB, RIGHTA],
        path: <rect fill={ DARK } x="39.38" y="0" width="35.62" height="35.62"/>,
        token: TopRightToken,
        banner: undefined
    },
    {
        type: FARM,
        sides: [RIGHTB, BOTTOMA],
        path: <rect fill={ DARK } x="39.38" y="39.37" width="35.62" height="35.63"/>,
        token: BottomRightToken,
        banner: undefined
    }
]
