import React from "react";

// straight roads
export const TopRoad = (fill) =>
    <g>
        <rect fill={ fill } opacity={ 0 } x="31.88" width="11.25" height="37.5"/>
        <rect fill={ fill } x="35.63" width="3.75" height="37.5"/>
    </g>;
export const RightRoad = (fill) =>
    <g>
        <rect fill={ fill } opacity={ 0 } x="37.5" y="31.88" width="37.5" height="11.25"/>
        <rect fill={ fill } x="37.5" y="35.63" width="37.5" height="3.75"/>
    </g>;
export const BottomRoad = (fill) =>
    <g>
        <rect fill={ fill } opacity={ 0 } x="31.87" y="37.5" width="11.25" height="37.5"/>
        <rect fill={ fill } x="35.62" y="37.5" width="3.75" height="37.5"/>
    </g>;
export const LeftRoad = (fill) =>
    <g>
        <rect fill={ fill } opacity={ 0 } y="31.87" width="37.5" height="11.25"/>
        <rect fill={ fill } y="35.62" width="37.5" height="3.75"/>
    </g>;

// curved roads
export const TopLeftRoad = (fill) =>
    <g>
        <path fill={ fill } opacity={ 0 } d="M31.88,0H43.13A42.81,42.81,0,0,1,30.49,30.49,42.76,42.76,0,0,1,0,43.12V31.87A31.91,31.91,0,0,0,31.88,0Z"/>
        <path fill={ fill } d="M35.63,0h3.75A39.09,39.09,0,0,1,27.84,27.84,39,39,0,0,1,0,39.37V35.62A35.33,35.33,0,0,0,25.19,25.19,35.39,35.39,0,0,0,35.63,0Z"/>
    </g>;
export const TopRightRoad = (fill) =>
    <g>
        <path fill={ fill } opacity={ 0 } d="M75,31.88V43.13A42.81,42.81,0,0,1,44.51,30.49,42.8,42.8,0,0,1,31.88,0H43.13A31.91,31.91,0,0,0,75,31.88Z"/>
        <path fill={ fill } d="M75,35.63v3.75A39.09,39.09,0,0,1,47.16,27.84,39.08,39.08,0,0,1,35.63,0h3.75A35.38,35.38,0,0,0,49.81,25.19,35.39,35.39,0,0,0,75,35.63Z"/>
    </g>;
export const BottomRightRoad = (fill) =>
    <g>
        <path fill={ fill } opacity={ 0 } d="M43.13,75H31.88A43.12,43.12,0,0,1,75,31.88V43.12A31.91,31.91,0,0,0,43.13,75Z"/>
        <path fill={ fill } d="M39.38,75H35.62A39.4,39.4,0,0,1,75,35.62v3.76A35.61,35.61,0,0,0,39.38,75Z"/>
    </g>;
export const BottomLeftRoad = (fill) =>
    <g>
        <path fill={ fill } opacity={ 0 } d="M0,43.13V31.88A42.8,42.8,0,0,1,30.49,44.51,42.8,42.8,0,0,1,43.12,75H31.88A31.91,31.91,0,0,0,0,43.13Z"/>
        <path fill={ fill } d="M0,39.38V35.62A39.09,39.09,0,0,1,27.84,47.16,39.09,39.09,0,0,1,39.38,75H35.62A35.38,35.38,0,0,0,25.19,49.81,35.38,35.38,0,0,0,0,39.38Z"/>
    </g>;
