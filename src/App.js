import React, { Component } from "react";

import { Switch, Route, Link } from "react-router-dom";

const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;

class App extends Component {
  render() {
    const { path } = this.props.match;

    return (
      <div>
        Hey welcome home!
        <div>
          <Link to={`${path}/profile`}>Profile</Link>
          <Link to={`${path}/comments`}>Comments</Link>
          <Link to={`${path}/contact`}>Contact</Link>
        </div>
        <div>
          <Switch>
            <Route path={`${path}/profile`} component={Profile} />
            <Route path={`${path}/comments`} component={Comments} />
            <Route path={`${path}/contact`} component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
