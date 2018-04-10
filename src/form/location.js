import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationPage extends Component {
  render() {
    return (
      <div>
        <Link to="/form/submit">Next</Link>
      </div>
    );
  }
}

export default LocationPage;