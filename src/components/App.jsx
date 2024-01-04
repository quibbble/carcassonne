import React, { useState, useLayoutEffect, useRef, createRef } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GamePage, HomePage, DownPage, RulesPage, BugsPage } from "@quibbble/boardgame";
import { Game } from "./game/Game";
import Rules from "./rules.md"

const config = {
  // server attributes
  host: import.meta.env.VITE_HOST,
  websocket: import.meta.env.VITE_WEBSOCKET,

  // game attributes
  key: "Carcassonne",
  variants: {},
  minTeams: 2,
  maxTeams: 5,

  // styling attributes
  font: "coquette",
  color: "orange-600",

  // misc attributes
  gamePageMaxWidth: "max-w-6xl",

  // keyboard shortcuts
  shortcut: {
    skip: 's',
    rotate: 'r',
    rotateReverse: 't',
    nextTeam: 'n',
    currentTeam: 'c',
  }
}

export default function App() {
    const ref = createRef();
    const ws = useRef();

    const [game, setGame] = useState();
    const [network, setNetwork] = useState();
    const [chat, setChat] = useState([]);
    const [connected, setConnected] = useState();
    const [error, setError] = useState();

    const [rules, setRules] = useState("");

    useLayoutEffect(() => {
      fetch(Rules)
        .then(response => response.text())
        .then(text => setRules(text))
    }, [])

    const [options, setOptions] = useState({
      Seed: Date.now(),
      Variant: config.variants.length > 0 ? config.variants[0] : null,
    })
  
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/:gameID" element=
            { 
              <GamePage config={ config }
                ref={ ref } ws={ ws }
                game={ game } setGame={ setGame }
                network={ network } setNetwork={ setNetwork }
                chat={ chat } setChat={ setChat }
                connected={ connected } setConnected={ setConnected }
                error={ error } setError={ setError }>
                  <Game ref={ ref } ws={ ws }
                    game={ game } network={ network } 
                    chat={ chat } connected={ connected } error={ error } 
                    shortcut={ config.shortcut } />
              </GamePage>
            }
          />
          <Route exact path="/status/down" element={ <DownPage config={ config } /> }/>
          <Route exact path="/rules" element={ <RulesPage config={ config } rules={ rules } /> }/>
          <Route exact path="/bugs" element={ <BugsPage config={ config } /> }/>
          <Route path="/" element={ <HomePage config={ config } options={ options } setOptions={ setOptions } /> } />
        </Routes>
      </BrowserRouter>
    );
  }
