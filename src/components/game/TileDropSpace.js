
import React from "react";
import { useDrop } from "react-dnd";

export default function TileDropSpace({ x, y, children }) {
    const [, drop] = useDrop(() => ({
        accept: "tile",
        drop: () => ({ x: x, y: y }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    return (
        <div className="box-border border border-zinc-100 h-full" ref={ drop }>
            <div className="bg-zinc-100 opacity-10 h-full">
                { children }
            </div>
        </div>
    )
}
