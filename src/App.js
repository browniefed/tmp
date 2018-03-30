import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./app.css";

const Home = () => <div>You're on the Home Tab</div>;
const Photo = ({ location }) => {
  const { state = {} } = location;
  const { modal } = state;
  return (
    <div className={modal ? "modal" : undefined}>
      {modal && <Link to="/">Close</Link>}
      <div>
        <img src="https://source.unsplash.com/random" />
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link
            to={{
              pathname: "/photo",
              state: { modal: true },
            }}
            className="link"
          >
            View Photo
          </Link>
        </div>
        <div className="tabs">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/photo" component={Photo} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
