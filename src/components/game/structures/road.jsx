// straight roads
export const TopBottomRoad = (fill) => <rect fill={ fill } x="35.62" y="0" width="3.75" height="75"/>
export const LeftRightRoad = (fill) => <rect fill={ fill } x="0" y="35.63" width="75" height="3.75"/>
export const TopRoad = (fill) => <rect fill={ fill } x="35.63" y="0" width="3.75" height="35.62"/>
export const RightRoad = (fill) => <rect fill={ fill } x="39.38" y="35.63" width="35.62" height="3.75"/>
export const BottomRoad = (fill) => <rect fill={ fill } x="35.63" y="39.38" width="3.75" height="35.62"/>
export const LeftRoad = (fill) => <rect fill={ fill } x="0" y="35.63" width="35.62" height="3.75"/>

// curved roads
export const TopLeftRoad = (fill) => <path fill={ fill } d="M35.63,0h3.75A39.09,39.09,0,0,1,27.84,27.84,39,39,0,0,1,0,39.37V35.62A35.33,35.33,0,0,0,25.19,25.19,35.39,35.39,0,0,0,35.63,0Z"/>
export const TopRightRoad = (fill) => <path fill={ fill } d="M75,35.63v3.75A39.09,39.09,0,0,1,47.16,27.84,39.08,39.08,0,0,1,35.63,0h3.75A35.38,35.38,0,0,0,49.81,25.19,35.39,35.39,0,0,0,75,35.63Z"/>
export const BottomRightRoad = (fill) => <path fill={ fill } d="M39.38,75H35.62A39.4,39.4,0,0,1,75,35.62v3.76A35.61,35.61,0,0,0,39.38,75Z"/>
export const BottomLeftRoad = (fill) => <path fill={ fill } d="M0,39.38V35.62A39.09,39.09,0,0,1,27.84,47.16,39.09,39.09,0,0,1,39.38,75H35.62A35.38,35.38,0,0,0,25.19,49.81,35.38,35.38,0,0,0,0,39.38Z"/>
