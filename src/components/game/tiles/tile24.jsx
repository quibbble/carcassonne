import React from "react";
import { CLOISTER, FARM } from "../models/structure";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA, RIGHTB, TOPA, TOPB } from "../models/farmside";
import { DARK, GRAY } from "../models/color";
import { CenterToken, TopLeftInsideToken, TopLeftToken } from "../tokens/tokens";
import { CENTER } from "../models/side";
import { Cloister } from "../structures/cloister";

export const FFFFMFF = [
    {
        type: FARM,
        sides: [TOPA, TOPB, RIGHTA, RIGHTB, BOTTOMA, BOTTOMB, LEFTA, LEFTB],
        path: <path fill={ DARK } d="m0,0v75h75V0H0Zm46.88,46.87h-18.75v-18.75h18.75v18.75Z"/>,
        token: TopLeftToken,
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
