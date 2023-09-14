import React from "react";
import { useDrop } from "react-dnd";

export default function TokenDropSpace({ x, y, type, side, el }) {
    const [, drop] = useDrop(() => ({
        accept: "token",
        drop: () => ({ x: x, y: y, type: type, side: side }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    return (<g ref={ drop }>{ el }</g>)
}
