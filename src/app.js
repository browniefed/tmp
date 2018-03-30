import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import "./app.css";

const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={() => {
        return loggedIn ? (
          <Comp {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                prevLocation: path,
                error: "You need to login first!",
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends Component {
  state = {
    loggedIn: false,
  };
  handleLogin = () => {
    const { state = {} } = this.props.location;
    const { prevLocation } = state;

    this.setState(
      {
        loggedIn: true,
      },
      () => {
        this.props.history.push(prevLocation || "/profile");
      },
    );
  };
  render() {
    const { state = {} } = this.props.location;
    const { error } = state;

    return (
      <div>
        <h1>Hey welcome home!</h1>
        <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/profile" className="link">
            Profile
          </Link>
          <button onClick={this.handleLogin}>Login</button>
        </div>
        <div className="tabs">
          {error && <div>ERROR: {error}</div>}
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/profile" loggedIn={this.state.loggedIn} component={Profile} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
