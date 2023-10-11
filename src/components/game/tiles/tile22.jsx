import React from "react";
import { CITY } from "../models/structure";
import { BOTTOM, LEFT, RIGHT, TOP } from "../models/side";
import { TopLeftBanner, TopRightBottomLeftCity } from "../structures/city";
import { CenterToken } from "../tokens/tokens";
import { DARK, GRAY } from "../models/color";

export const CCCCNTT = [
    {
        type: CITY,
        sides: [TOP, RIGHT, BOTTOM, LEFT],
        path: TopRightBottomLeftCity(GRAY),
        token: CenterToken,
        banner: TopLeftBanner(DARK)
    }
]
