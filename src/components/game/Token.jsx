import React from "react";
import {useDrag} from "react-dnd";

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
export const TopCenterFlushToken = (fill) => <rect fill={fill} x="32.5" width="10" height="10" rx="5"/>;
export const TopLeftFlushToken = (fill) =>  <rect fill={fill} x="20" width="10" height="10" rx="5"/>;
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

// center token
export const CenterToken = (fill) => <rect fill={fill} x="32.5" y="32.5" width="10" height="10" rx="5"/>;


const sectionToToken = {Farm: "Farmer", City: "Knight", Road: "Thief", Cloister: "Monk"};

export function Token({ size, player, placeToken }) {
    const [{ opacity }, drag, preview] = useDrag(() => ({
        type: "token",
        item: { "type": "token", player },
        canDrag: () => true,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) placeToken(player, dropResult.x, dropResult.y, sectionToToken[dropResult.type], dropResult.side);
        },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    }), [player]);
    return (
        <div ref={preview}>
            <div ref={drag} className={ `rounded-full cursor-pointer bg-${ player }-500` } style={{ width: size, height: size, opacity }}/>
        </div>
    )
}