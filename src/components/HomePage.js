import React, { useState } from "react";
import { Adjectives, Nouns } from "./Words";
import { CreateGame } from "../api/API";
import { useHistory } from "react-router-dom"

export default function HomePage() {
    const history = useHistory();

    const [gid, setGameID] = useState(`${ Adjectives[Math.floor(Math.random()*Adjectives.length)] }-${ Nouns[Math.floor(Math.random()*Nouns.length)] }`);
    const [teams, setTeams] = useState(2);

    async function handleGo(e) {
        e.preventDefault();
        let status = await CreateGame(gid, teams, null);
        if (status === 201 || status === 400) history.push(`/${ gid }`);
    }
    return (
        <div className="flex flex-col items-center h-full">
            <div className="flex flex-col items-center">
                <div className="title text-5xl font-bold text-orange-500 mb-1 cursor-pointer">
                    <a href={ `${ window.location.protocol }//${ window.location.host }` }>Carcassonne</a>
                </div>
                <div className="font-thin mb-3">
                    Play two to five player Carcassonne online against friends.
                    To create a game or join an existing one, enter a game ID and click 'Go'.
                </div>
                <form className="w-full flex mb-2" onSubmit={ handleGo }>
                    <input className="w-10/12 p-2 text-zinc-100 bg-zinc-800 rounded-none border border-zinc-100 text-3xl font-medium box-border focus:outline-dashed outline-blue-500 outline-2" autoFocus type="text" value={ gid } onChange={ e => setGameID(e.target.value) }/>
                    <button className="w-2/12 font-bold grow-0 bg-blue-500">Go</button>
                </form>
                <div className="flex w-full justify-between">
                    <div className="italic text-xs bg-teal-600 py-1 px-2">
                        <a href="https://quibbble.com">more <span className="quibbble text-sm not-italic">quibbble</span> games</a>
                    </div>
                    <div className="flex items-center ml-3">
                        <div className="mr-1 font-black text-blue-500">PLAYERS</div>
                        <select className="bg-zinc-800 text-sm h-6 border font-bold border-zinc-100 focus:outline-none" id="players" onChange={ e => setTeams(parseInt(e.target.value)) }>
                            { [2, 3, 4, 5].map(el => <option key={ el } value={ el }>{ el }</option>) }
                        </select>
                    </div>
                </div>
            </div>
            <div className="grow flex flex-col w-full h-full justify-end items-center">
                <div className="font-thin text-sm italic">
                    <a href="https://www.buymeacoffee.com/quibbble" target="_blank" rel="noreferrer">support the developer</a>
                </div>
            </div>
        </div>
    )
}
