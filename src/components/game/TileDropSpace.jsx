
import React from "react";
import { useDroppable } from '@dnd-kit/core';

export default function TileDropSpace({ x, y, team, children }) {
    const {active, isOver, setNodeRef} = useDroppable({
        id: x + "," + y,
        data: {
            x: x,
            y: y
        }
    });

    return (
        <div ref={ setNodeRef } className="box-border border border-zinc-100 h-full">
            <div className={ `${ isOver && active.id == "tile" ? `bg-${ team }-500` : "bg-zinc-100" } ${ isOver && active.id == "tile" ? "opacity-75" : "opacity-10" } h-full` }>
                { children }
            </div>
        </div>
    )
}
