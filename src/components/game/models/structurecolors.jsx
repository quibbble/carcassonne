import { DARK, GRAY } from "./color";

export const CityColors = (colors) => {
    if (!colors || colors.length === 0) return { def: null, color: GRAY }
    else if (colors.length === 1) return { def: null, color: colors[0] }
    else if (colors.length === 2) {
        const id = `city${colors[0]}${colors[1]}`;
        return {
                    def:
                        <linearGradient id={ id } gradientUnits="userSpaceOnUse" x2="53" spreadMethod="repeat" gradientTransform="rotate(-135)">
                            <stop offset="0" stopColor={colors[0]}/>
                            <stop offset="0.5" stopColor={colors[0]}/>
                            <stop offset="0.5" stopColor={colors[1]}/>
                            <stop offset="1.0" stopColor={colors[1]}/>
                        </linearGradient>,
                    color: `url(#${id})`
                }
    } else if (colors.length === 3) {
        const id = `city${colors[0]}${colors[1]}${colors[2]}`;
        return {
                    def:
                        <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53" spreadMethod="repeat" gradientTransform="rotate(-135)">
                            <stop offset="0" stopColor={colors[0]}/>
                            <stop offset="0.33" stopColor={colors[0]}/>
                            <stop offset="0.33" stopColor={colors[1]}/>
                            <stop offset="0.67" stopColor={colors[1]}/>
                            <stop offset="0.67" stopColor={colors[2]}/>
                            <stop offset="1.0" stopColor={colors[2]}/>
                        </linearGradient>,
                    color: `url(#${id})`
                }
    } else if (colors.length === 4) {
        const id = `city${colors[0]}${colors[1]}${colors[2]}${colors[3]}`;
        return {
                    def:
                        <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53" spreadMethod="repeat" gradientTransform="rotate(-135)">
                            <stop offset="0" stopColor={colors[0]}/>
                            <stop offset="0.25" stopColor={colors[0]}/>
                            <stop offset="0.25" stopColor={colors[1]}/>
                            <stop offset="0.5" stopColor={colors[1]}/>
                            <stop offset="0.5" stopColor={colors[2]}/>
                            <stop offset="0.75" stopColor={colors[2]}/>
                            <stop offset="0.75" stopColor={colors[3]}/>
                            <stop offset="1.0" stopColor={colors[3]}/>
                        </linearGradient>,
                    color: `url(#${id})`
                }
    } else if (colors.length === 5) {
        const id = `city${colors[0]}${colors[1]}${colors[2]}${colors[3]}${colors[4]}`;
        return {
            def:
                <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53" spreadMethod="repeat" gradientTransform="rotate(-135)">
                    <stop offset="0" stopColor={colors[0]}/>
                    <stop offset="0.2" stopColor={colors[0]}/>
                    <stop offset="0.2" stopColor={colors[1]}/>
                    <stop offset="0.4" stopColor={colors[1]}/>
                    <stop offset="0.4" stopColor={colors[2]}/>
                    <stop offset="0.6" stopColor={colors[2]}/>
                    <stop offset="0.6" stopColor={colors[3]}/>
                    <stop offset="0.8" stopColor={colors[3]}/>
                    <stop offset="0.8" stopColor={colors[4]}/>
                    <stop offset="1.0" stopColor={colors[4]}/>
                </linearGradient>,
            color: `url(#${id})`
        }
    }
    return { def: null, color: GRAY }
}

export const RoadColors = (colors) => {
    if (!colors || colors.length === 0) return { def: null, color: GRAY }
    else if (colors.length === 1) return { def: null, color: colors[0] }
    else if (colors.length === 2) {
        const id = `road${colors[0]}${colors[1]}`;
        return {
                    def:
                        <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="25" spreadMethod="repeat" gradientTransform="rotate(45)">
                            <stop offset="0" stopColor={colors[0]}/>
                            <stop offset="0.5" stopColor={colors[0]}/>
                            <stop offset="0.5" stopColor={colors[1]}/>
                            <stop offset="1.0" stopColor={colors[1]}/>
                        </linearGradient>,
                    color: `url(#${id})`
                }
    } else if (colors.length === 3) {
        const id = `road${colors[0]}${colors[1]}${colors[2]}`;
            return {
                        def:
                            <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="25" spreadMethod="repeat" gradientTransform="rotate(45)">
                                <stop offset="0" stopColor={colors[0]}/>
                                <stop offset="0.33" stopColor={colors[0]}/>
                                <stop offset="0.33" stopColor={colors[1]}/>
                                <stop offset="0.66" stopColor={colors[1]}/>
                                <stop offset="0.66" stopColor={colors[2]}/>
                                <stop offset="1.0" stopColor={colors[2]}/>
                            </linearGradient>,
                        color: `url(#${id})`
                    }
    } else if (colors.length === 4) {
        const id = `road${colors[0]}${colors[1]}${colors[2]}${colors[3]}`;
            return {
                        def:
                            <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="25" spreadMethod="repeat" gradientTransform="rotate(45)">
                                <stop offset="0" stopColor={colors[0]}/>
                                <stop offset="0.25" stopColor={colors[0]}/>
                                <stop offset="0.25" stopColor={colors[1]}/>
                                <stop offset="0.5" stopColor={colors[1]}/>
                                <stop offset="0.5" stopColor={colors[2]}/>
                                <stop offset="0.75" stopColor={colors[2]}/>
                                <stop offset="0.75" stopColor={colors[3]}/>
                                <stop offset="1.0" stopColor={colors[3]}/>
                            </linearGradient>,
                        color: `url(#${id})`
                    }
    } else if (colors.length === 5) {
        const id = `road${colors[0]}${colors[1]}${colors[2]}${colors[3]}${colors[4]}`;
            return {
                        def:
                            <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="25" spreadMethod="repeat" gradientTransform="rotate(45)">
                                <stop offset="0" stopColor={colors[0]}/>
                                <stop offset="0.2" stopColor={colors[0]}/>
                                <stop offset="0.2" stopColor={colors[1]}/>
                                <stop offset="0.4" stopColor={colors[1]}/>
                                <stop offset="0.4" stopColor={colors[2]}/>
                                <stop offset="0.6" stopColor={colors[2]}/>
                                <stop offset="0.6" stopColor={colors[3]}/>
                                <stop offset="0.8" stopColor={colors[3]}/>
                                <stop offset="0.8" stopColor={colors[4]}/>
                                <stop offset="1.0" stopColor={colors[4]}/>
                            </linearGradient>,
                        color: `url(#${id})`
                    }
    }
    return { def: null, color: GRAY }
}

export const FarmColors = (colors) => {
    if (!colors || colors.length === 0) return null
    else if (colors.length === 1) return { def: null, color: colors[0] }
    else if (colors.length === 2) {
        const id = `farm${colors[0]}${colors[1]}`;
        return {
                    def:
                        <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53.5" spreadMethod="repeat" gradientTransform="rotate(-45)">
                            <stop offset="0" stopColor={colors[0]}/>
                            <stop offset="0.5" stopColor={colors[0]}/>
                            <stop offset="0.5" stopColor={colors[1]}/>
                            <stop offset="1.0" stopColor={colors[1]}/>
                        </linearGradient>,
                    color: `url(#${id})`
                }
    } else if (colors.length === 3) {
        const id = `farm${colors[0]}${colors[1]}${colors[2]}`;
        return {
                    def:
                        <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53.5" spreadMethod="repeat" gradientTransform="rotate(-45)">
                            <stop offset="0" stopColor={colors[0]}/>
                            <stop offset="0.33" stopColor={colors[0]}/>
                            <stop offset="0.33" stopColor={colors[1]}/>
                            <stop offset="0.67" stopColor={colors[1]}/>
                            <stop offset="0.67" stopColor={colors[2]}/>
                            <stop offset="1.0" stopColor={colors[2]}/>
                        </linearGradient>,
                    color: `url(#${id})`
                }
    } else if (colors.length === 4) {
        const id = `farm${colors[0]}${colors[1]}${colors[2]}${colors[3]}`;
        return {
                    def:
                        <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53.5" spreadMethod="repeat" gradientTransform="rotate(-45)">
                            <stop offset="0" stopColor={colors[0]}/>
                            <stop offset="0.25" stopColor={colors[0]}/>
                            <stop offset="0.25" stopColor={colors[1]}/>
                            <stop offset="0.5" stopColor={colors[1]}/>
                            <stop offset="0.5" stopColor={colors[2]}/>
                            <stop offset="0.75" stopColor={colors[2]}/>
                            <stop offset="0.75" stopColor={colors[3]}/>
                            <stop offset="1.0" stopColor={colors[3]}/>
                        </linearGradient>,
                    color: `url(#${id})`
                }
    } else if (colors.length === 5) {
        const id = `farm${colors[0]}${colors[1]}${colors[2]}${colors[3]}${colors[4]}`;
        return {
                    def:
                        <linearGradient id={id} gradientUnits="userSpaceOnUse" x2="53.5" spreadMethod="repeat" gradientTransform="rotate(-45)">
                            <stop offset="0" stopColor={colors[0]}/>
                            <stop offset="0.2" stopColor={colors[0]}/>
                            <stop offset="0.2" stopColor={colors[1]}/>
                            <stop offset="0.4" stopColor={colors[1]}/>
                            <stop offset="0.4" stopColor={colors[2]}/>
                            <stop offset="0.6" stopColor={colors[2]}/>
                            <stop offset="0.6" stopColor={colors[3]}/>
                            <stop offset="0.8" stopColor={colors[3]}/>
                            <stop offset="0.8" stopColor={colors[4]}/>
                            <stop offset="1.0" stopColor={colors[4]}/>
                        </linearGradient>,
                    color: `url(#${id})`
                }
    }
    return { def: null, color: GRAY }
}

export const CloisterColors = (colors) => {
    if (!colors || colors.length === 0) return { def: null, color: GRAY }
    else return { def: null, color: colors[0] }
}
