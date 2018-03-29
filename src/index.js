import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const routes = (
  <BrowserRouter>
    <Switch>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById("root"));
