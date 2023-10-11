// tokens with padding around them
export const TopLeftToken = (fill) => <rect fill={fill} x="4.38" y="4.38" width="10" height="10" rx="5"/>;
export const TopCenterToken = (fill) => <rect fill={fill} x="32.5" y="4.38" width="10" height="10" rx="5"/>;
export const TopRightToken = (fill) => <rect fill={fill} x="60.63" y="4.38" width="10" height="10" rx="5"/>;
export const RightCenterToken = (fill) => <rect fill={fill} x="60.63" y="32.5" width="10" height="10" rx="5"/>;
export const BottomRightToken = (fill) => <rect fill={fill} x="60.63" y="60.63" width="10" height="10" rx="5"/>;
export const BottomCenterToken = (fill) => <rect fill={fill} x="32.5" y="60.63" width="10" height="10" rx="5"/>;
export const BottomLeftToken = (fill) => <rect fill={fill} x="4.38" y="60.63" width="10" height="10" rx="5"/>;
export const LeftCenterToken = (fill) => <rect fill={fill} x="4.38" y="32.5" width="10" height="10" rx="5"/>;

// tokens flush with edge of tile
export const TopLeftFlushToken = (fill) =>  <rect fill={fill} x="20" width="10" height="10" rx="5"/>;
export const TopCenterFlushToken = (fill) => <rect fill={fill} x="32.5" width="10" height="10" rx="5"/>;
export const TopRightFlushToken = (fill) =>  <rect fill={fill} x="45" width="10" height="10" rx="5"/>;
export const RightTopFlushToken = (fill) =>  <rect fill={fill} x="65" y="20" width="10" height="10" rx="5"/>;
export const RightCenterFlushToken = (fill) => <rect fill={fill} x="65" y="32.5" width="10" height="10" rx="5"/>;
export const RightBottomFlushToken = (fill) => <rect fill={fill} x="65" y="45" width="10" height="10" rx="5"/>;
export const BottomRightFlushToken = (fill) => <rect fill={fill} x="45" y="65" width="10" height="10" rx="5"/>;
export const BottomCenterFlushToken = (fill) => <rect fill={fill} x="32.5" y="65" width="10" height="10" rx="5"/>;
export const BottomLeftFlushToken = (fill) => <rect fill={fill} x="20" y="65" width="10" height="10" rx="5"/>;
export const LeftBottomFlushToken = (fill) => <rect fill={fill} y="45" width="10" height="10" rx="5"/>;
export const LeftCenterFlushToken = (fill) => <rect fill={fill} y="32.5" width="10" height="10" rx="5"/>;
export const LeftTopFlushToken = (fill) => <rect fill={fill} y="20" width="10" height="10" rx="5"/>;

// inner corner tokens
export const TopLeftInsideToken = (fill) => <rect fill={fill} x="21.73" y="21.73" width="10" height="10" rx="5"/>;
export const TopRightInsideToken = (fill) => <rect fill={fill} x="43.27" y="21.73" width="10" height="10" rx="5"/>;
export const BottomRightInsideToken = (fill) => <rect fill={fill} x="43.27" y="43.27" width="10" height="10" rx="5"/>;
export const BottomLeftInsideToken = (fill) => <rect fill={fill} x="21.73" y="43.27" width="10" height="10" rx="5"/>;

// middle of half of tile
export const TopHalfCenterToken = (fill) => <rect fill={fill} x="32.5" y="17.5" width="10" height="10" rx="5"/>;
export const RightHalfCenterToken = (fill) => <rect fill={fill} x="47.5" y="32.5" width="10" height="10" rx="5"/>;
export const BottomHalfCenterToken = (fill) => <rect fill={fill} x="32.5" y="47.5" width="10" height="10" rx="5"/>;
export const LeftHalfCenterToken = (fill) => <rect fill={fill} x="17.5" y="32.5" width="10" height="10" rx="5"/>;

// curve tokens
export const TopRightCurveToken = (fill) => <rect fill={fill} x="44" y="21" width="10" height="10" rx="5"/>;
export const TopLeftCurveToken = (fill) => <rect fill={fill} x="21" y="21" width="10" height="10" rx="5"/>;
export const BottomRightCurveToken = (fill) => <rect fill={fill} x="44" y="44" width="10" height="10" rx="5"/>;
export const BottomLeftCurveToken = (fill) => <rect fill={fill} x="21" y="44" width="10" height="10" rx="5"/>;

// center token
export const CenterToken = (fill) => <rect fill={fill} x="32.5" y="32.5" width="10" height="10" rx="5"/>;
