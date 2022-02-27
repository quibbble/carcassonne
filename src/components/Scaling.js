import React, { useEffect, useState } from "react";

export default function Scaling({ children }) {
    const maxHeight = 1200;
    const [maxWidth, setMaxWidth] = useState(window.innerHeight < maxHeight ? window.innerHeight*0.666 : maxHeight*0.666);
    useEffect(() => {
        function handleResize() {
            window.innerHeight < maxHeight ? setMaxWidth(window.innerHeight*0.666) : setMaxWidth(maxHeight*0.666)
        }
        window.addEventListener("resize", handleResize);
        return _ => window.removeEventListener("resize", handleResize)
    });

    return (
        <div className="flex flex-col items-center h-full">
            <div className="w-full h-full mx-auto my-0 px-2 py-4 flex flex-col box-border" style={{ maxWidth: maxWidth, maxHeight: maxHeight }}>
                { children }
            </div>
        </div>
    )
}
