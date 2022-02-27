import React from "react";
import { render } from "react-dom";
import Routing from "./components/Routing";
import Scaling from "./components/Scaling";
import "./index.css"

render(
    <Scaling>
        <Routing />
    </Scaling>,
    document.getElementById("root")
    );
