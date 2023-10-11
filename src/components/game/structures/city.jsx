// single city
export const TopCity = (fill) => <path fill={ fill }  d="M0,0H75A67.6,67.6,0,0,1,0,0Z"/>;
export const RightCity = (fill) => <path fill={ fill }  d="M75,0h0V75h0A67.6,67.6,0,0,1,75,0Z"/>;
export const BottomCity = (fill) => <path fill={ fill }  d="M75,75H0A67.6,67.6,0,0,1,75,75Z"/>;
export const LeftCity = (fill) => <path fill={ fill }  d="M0,75H0V0H0A67.6,67.6,0,0,1,0,75Z"/>;

// double diagonal city
export const TopLeftCity = (fill) => <polygon fill={ fill } points="0 75 75 0 0 0 0 75"/>;
export const TopRightCity = (fill) => <polygon fill={ fill } points="0 0 75 75 75 0 0 0"/>;
export const BottomRightCity = (fill) => <polygon fill={ fill } points="75 0 0 75 75 75 75 0"/>;
export const BottomLeftCity = (fill) => <polygon fill={ fill } points="75 75 0 0 0 75 75 75"/>;

// double across city
export const TopBottomCity = (fill) => <path fill={ fill } d="M75,75H0A67.52,67.52,0,0,0,11.35,37.5,67.55,67.55,0,0,0,0,0H75a67.62,67.62,0,0,0,0,75Z"/>;
export const RightLeftCity = (fill) => <path fill={ fill } d="M75,0V75A67.62,67.62,0,0,0,0,75V0A67.55,67.55,0,0,0,37.5,11.35,67.52,67.52,0,0,0,75,0Z"/>;

// triple city
export const LeftTopRightCity = (fill) => <path fill={ fill } d="M75,0V75A67.62,67.62,0,0,0,0,75V0Z"/>;
export const TopRightBottomCity = (fill) => <path fill={ fill } d="M75,75H0A67.52,67.52,0,0,0,11.35,37.5,67.55,67.55,0,0,0,0,0H75Z"/>;
export const RightBottomLeftCity = (fill) => <path fill={ fill } d="M0,75V0A67.52,67.52,0,0,0,37.5,11.35,67.55,67.55,0,0,0,75,0V75Z"/>;
export const BottomLeftTopCity = (fill) => <path fill={ fill } d="M0,0H75a67.62,67.62,0,0,0,0,75H0Z"/>;

// quadruple city
export const TopRightBottomLeftCity = (fill) => <rect fill={ fill } width="75" height="75"/>;

// corner banners
export const TopLeftBanner = (fill) => <polygon fill={ fill } points="3.75 3.75 9.38 6.56 15 3.75 9.38 15 3.75 3.75"/>;
export const TopRightBanner = (fill) => <polygon fill={ fill } points="60 3.75 65.63 6.56 71.25 3.75 65.63 15 60 3.75"/>;
export const BottomRightBanner = (fill) => <polygon fill={ fill } points="60 60 65.63 62.81 71.25 60 65.63 71.25 60 60"/>;
export const BottomLeftBanner = (fill) => <polygon fill={ fill } points="3.75 60 9.38 62.81 15 60 9.38 71.25 3.75 60"/>;

// middle banners
export const TopMiddleBanner = (fill) => <polygon fill={ fill } points="31.88 3.75 37.5 6.56 43.13 3.75 37.5 15 31.88 3.75"/>;
export const RightMiddleBanner = (fill) => <polygon fill={ fill } points="60 31.88 65.63 34.69 71.25 31.88 65.63 43.13 60 31.88"/>;
export const BottomMiddleBanner = (fill) => <polygon fill={ fill } points="31.88 60 37.5 62.81 43.13 60 37.5 71.25 31.88 60"/>;
export const LeftMiddleBanner = (fill) => <polygon fill={ fill } points="3.75 31.88 9.38 34.69 15 31.88 9.38 43.13 3.75 31.88"/>;
