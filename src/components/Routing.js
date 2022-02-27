import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GamePage from "./GamePage";
import HomePage from "./HomePage";

export default function Routing() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/:gid" component={ GamePage }/>
                <Route path="/" component={ HomePage }/>
            </Switch>
        </BrowserRouter>
    );
}
