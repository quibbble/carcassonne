import React, { forwardRef } from "react";
import { useDraggable } from '@dnd-kit/core';

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
