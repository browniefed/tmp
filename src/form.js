import React, { Component } from "react";
import { Switch, Route, Prompt, Redirect, matchPath } from "react-router-dom";

import BasicPage from "./form/basic";
import LocationPage from "./form/location";
import SubmitPage from "./form/submit";

class WizardForm extends Component {
  render() {
    return (
      <div>
        <Prompt
          when={true}
          message={({ pathname }) => {
            return matchPath(pathname, { path: "/form" })
              ? true
              : "Are you sure you want to navigate away?";
          }}
        />
        <Switch>
          <Redirect from="/form" exact to="/form/basic" />
          <Route path="/form/basic" component={BasicPage} />
          <Route path="/form/location" component={LocationPage} />
          <Route path="/form/submit" component={SubmitPage} />
        </Switch>
      </div>
    );
  }
}

export default WizardForm;
