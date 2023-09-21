import React, { useEffect } from "react";
import { useDroppable } from '@dnd-kit/core';

const sectionToToken = {Farm: "Farmer", City: "Knight", Road: "Thief", Cloister: "Monk"};
const colors = {
    red: "#ef4444",
    blue: "#3b82f6",
    yellow: "#eab308",
    green: "#22c55e",
    orange: "#f97316",
    purple: "#a855f7",
    pink: "#ec4899",
    teal: "#14b8a6"
}

export default function TokenDropSpace({ x, y, type, side, team, el }) {
    const {isOver, setNodeRef} = useDroppable({
        id: x + "," + y + "," + type + "," + side,
        data: {
            x: x,
            y: y,
            type: sectionToToken[type],
            side: side
        }
    });

    return (
        <g ref={ setNodeRef }>
            { React.cloneElement(el, isOver ? {fill: colors[team]} : {}) }
        </g>)
}
