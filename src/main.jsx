import React from "react";
import ReactDOM from "react-dom";

import { AppContainer } from "./app";

const MOUNT_NODE = document.getElementById('app');

let render = () => {
    
  ReactDOM.render(<AppContainer/>, MOUNT_NODE);
}

render();