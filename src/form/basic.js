import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field } from "formik";

class BasicPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Field type="email" name="email" placeholder="Email" />
        </div>
        <div>
          <Field type="text" name="firstName" placeholder="First Name" />
        </div>
        <div>
          <Field type="text" name="lastName" placeholder="Last Name" />
        </div>
        <Link to="/form/location" className="next">Next</Link>
      </div>
    );
  }
}

export default BasicPage;
