import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BasicPage extends Component {
  render() {
    return (
      <div>
        
        <Link to="/form/location">Next</Link>
      </div>
    );
  }
}

export default BasicPage;