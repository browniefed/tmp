import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Profile extends Component {
  state = {
    name: "",
  };
  render() {
    return (
      <div>
        <Prompt
          when={!!this.state.name}
          message={location => `Are you sure you want to go to ${location.pathname}`}
        />
        <div>
          <div>Nice looking profile! What's your name?</div>
          <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
        </div>
      </div>
    );
  }
}

export default Profile;
