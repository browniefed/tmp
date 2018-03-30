import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import "./app.css";

class App extends Component {
  state = {
    message: "You're great!",
  };
  render() {
    return (
      <div>
        <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/profile" className="link">
            Profile
          </Link>
        </div>
        <div className="tabs">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" render={props => <Profile {...props} {...this.state} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
