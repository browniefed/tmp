import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import Toggle from "./toggle";
import NameForm from "./form/nameform";
import PreventCompRender from "./preventcomprender";
import ListNumber from "./listnumber";
import EssayForm from "./form/essayform";
import FlavorForm from "./form/flavorform";
import "./app.css";

const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return loggedIn ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                prevLocation: path,
                error: "You need to login first!"
              }
            }}
          />
        );
      }}
    />
  );
};

class App extends Component {
  state = {
    loggedIn: false
  };
  handleLogin = () => {
    const { state = {} } = this.props.location;
    const { prevLocation } = state;

    this.setState(
      {
        loggedIn: true
      },
      () => {
        this.props.history.push(prevLocation || "/profile");
      }
    );
  };
  render() {
    const { state = {} } = this.props.location;
    const { error } = state;

    return (
      <div>
        <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/profile" className="link">
            Profile
          </Link>
          <Link to="/toggle" className="link">
            Toggle
          </Link>
          <Link to="/preventcomprender" className="link">
            Prevent Comp Render
          </Link>
          <Link to="/listnumber" className="link">
            List Number
          </Link>
          <Link to="/nameform" className="link">
            Name Form
          </Link>
          <Link to="/essayform" className="link">
            Eassy Form
          </Link>
          <Link to="/flavorform" className="link">
            Flavor Form
          </Link>
          <button onClick={this.handleLogin}>Login</button>
        </div>
        <div className="tabs">
          {error && <div>ERROR: {error}</div>}
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute
              path="/toggle"
              loggedIn={this.state.loggedIn}
              exact
              component={Toggle}
            />
            <ProtectedRoute
              path="/preventcomprender"
              loggedIn={this.state.loggedIn}
              component={PreventCompRender}
            />
            <ProtectedRoute
              path="/listnumber"
              loggedIn={this.state.loggedIn}
              component={ListNumber}
            />
            <ProtectedRoute
              path="/essayform"
              loggedIn={this.state.loggedIn}
              component={EssayForm}
            />
            <ProtectedRoute
              path="/nameform"
              loggedIn={this.state.loggedIn}
              component={NameForm}
            />
            <ProtectedRoute
              path="/flavorform"
              loggedIn={this.state.loggedIn}
              component={FlavorForm}
            />
            <ProtectedRoute
              path="/profile"
              loggedIn={this.state.loggedIn}
              component={Profile}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
