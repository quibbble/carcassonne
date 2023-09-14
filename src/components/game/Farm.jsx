import React from "react";

const opacity = "0.5";

export const TopLeftFarm = (fill) => <rect fill={ fill } opacity={opacity} width="37.5" height="37.5"/>;
export const TopRightFarm = (fill) => <rect fill={ fill } opacity={opacity} x="37.5" width="37.5" height="37.5"/>;
export const BottomRightFarm = (fill) => <rect fill={ fill } opacity={opacity} x="37.5" y="37.5" width="37.5" height="37.5"/>;
export const BottomLeftFarm = (fill) => <rect fill={ fill } opacity={opacity} y="37.5" width="37.5" height="37.5"/>;

export const TopLeftCurveLargeFarm = (fill) => <path fill={ fill } opacity={opacity} d="M0,37.5H0V0H37.5A37.5,37.5,0,0,1,0,37.5Z"/>;
export const TopLeftCurveSmallFarm = (fill) => <path fill={ fill } opacity={opacity} d="M37.5,0V37.5H0a37.41,37.41,0,0,0,26.52-11A37.43,37.43,0,0,0,37.5,0Z"/>;

export const TopRightCurveLargeFarm = (fill) => <path fill={ fill } opacity={opacity} d="M75,37.5h0A37.5,37.5,0,0,1,37.5,0H75Z"/>;
export const TopRightCurveSmallFarm = (fill) => <path fill={ fill } opacity={opacity} d="M75,37.5H37.5V0A37.5,37.5,0,0,0,75,37.5Z"/>;

export const BottomRightCurveLargeFarm = (fill) => <path fill={ fill } opacity={opacity} d="M75,75H37.5A37.5,37.5,0,0,1,75,37.5h0Z"/>;
export const BottomRightCurveSmallFarm = (fill) => <path fill={ fill } opacity={opacity} d="M75,37.5A37.49,37.49,0,0,0,37.5,75V37.5Z"/>;

export const BottomLeftCurveLargeFarm = (fill) => <path fill={ fill } opacity={opacity} d="M37.5,75H0V37.5H0A37.5,37.5,0,0,1,37.5,75Z"/>;
export const BottomLeftCurveSmallFarm = (fill) => <path fill={ fill } opacity={opacity} d="M37.5,37.5V75a37.43,37.43,0,0,0-11-26.52A37.41,37.41,0,0,0,0,37.5Z"/>;
