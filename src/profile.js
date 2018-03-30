import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        Nice looking profile! {this.props.message}
      </div>
    );
  }
}

export default Profile;