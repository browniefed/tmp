import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";
import Form from "./form";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./app.css";

const routes = (
  <BrowserRouter>
    <div>
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/form" className="link">
          Wizard
        </Link>
      </div>
      <div className="tabs">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" component={Form} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
