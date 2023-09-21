import React, { forwardRef } from "react";
import { useDraggable } from '@dnd-kit/core';

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

export function DraggableToken({ id, size, team, scrollX, scrollY }) {
    const {attributes, isDragging, listeners, setNodeRef, transform} = useDraggable({
        id: id,
        data: {
            type: "token"
        }
    });

    const style = {
        opacity: isDragging ? 0.5 : undefined,
        touchAction: "none",
        transform: transform && (transform.x != 0 || transform.y != 0) ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined
    }

    return (
        <Token ref={ setNodeRef } style={ style } 
            {...attributes} {...listeners}
            size={ size } team={ team } />
    )
}

export const Token = forwardRef(({ size, team, ...props }, ref) => {
    return (
        <div ref={ ref } { ...props }>
            <div className={ `rounded-full cursor-pointer bg-${ team }-500` } style={{ width: size, height: size }}/>
        </div>
    )
})
