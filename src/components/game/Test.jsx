import React, { useCallback } from "react";
import { Tile } from "./Tile";
import { DraggableToken } from "./Token";
import { DndContext, useSensors, useSensor, PointerSensor } from "@dnd-kit/core";
import { BLUE, RED } from "./models/color";
import { CITY, FARM, NIL, ROAD } from "./models/structure";
import { BOTTOMA, BOTTOMB, LEFTA, LEFTB, RIGHTA } from "./models/farmside";
import { FARMER } from "./models/token"
import { LEFT, TOP } from "./models/side";

// const tile = {
//     Sides: {
//         Top: {
//             Structure: CITY,
//             Colors: [RED, BLUE],
//         },
//         Right: {
//             Structure: ROAD,
//             Colors: [RED, BLUE],
//         },
//         Bottom: {
//             Structure: FARM,
//             Colors: [],
//         },
//         Left: {
//             Structure: ROAD,
//             Colors: [RED],
//         },
//         Center: {
//             Structure: NIL,
//             Colors: [],
//         },

//         BottomA: {
//             Structure: FARM,
//             Colors: [RED, BLUE],
//         }, 
//         // BottomB: {
//         //     Structure: FARM,
//         //     Colors: [RED],
//         // },
//         // RightA: {
//         //     Structure: FARM,
//         //     Colors: [RED],
//         // },
//         LeftB: {
//             Structure: FARM,
//             Colors: [RED],
//         }
//         // TODO merge tile.FarmTeams into tile.Teams into tile.CenterTeam using tile.Sides
//     },
//     CityConn: false,
//     Banner: false
// }

// const token = {
//     Side: BOTTOMA,
//     Color: BLUE
// }

const tile = {
    Sides: { Top: { Structure: ROAD, Colors: [RED] }, Right: { Structure: ROAD, Colors: [] }, Bottom: { Structure: ROAD, Colors: [] }, Left: { Structure: ROAD, Colors: [] }, Center: { Structure: NIL, Colors: [] }, RightA: { Structure: FARM, Colors: [RED] }},
    CityConn: false,
    Banner: false
}

const token = null

const tokenDroppable = false

export const Test = () => {

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    )
    
    const handleDragEnd = useCallback((e) => {
        if (!e.over) return 

        let over = e.over.data.current
        let active = e.active.data.current
    
        console.log(over)
        console.log(active)
    }, [])
    
    return  <>
                <DndContext autoScroll={ false } onDragEnd={ handleDragEnd } sensors={ sensors }>
                    <div className="w-full h-screen flex flex-col items-center justify-center">
                        <div className="w-64 h-64 box-border border border-zinc-100 mb-12">
                            <Tile x={ 1 } y={ 1 } tile={ tile } tokenDroppable={ tokenDroppable } token={ token } team={ RED }  />
                        </div>
                        <DraggableToken id={1} size={"12px"} team={"red"} />
                    </div>
                </DndContext>
            </>
}
