import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field } from "formik";

class LocationPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Field type="text" name="address" placeholder="Address" />
        </div>
        <div>
          <Field type="text" name="city" placeholder="City" />
        </div>
        <div>
          <Field type="text" name="state" placeholder="State" />
        </div>
        <div>
          <Field type="text" name="zipCode" placeholder="Zip Code" />
        </div>
        <Link to="/form/submit" className="next">Next</Link>
      </div>
    );
  }
}

export default LocationPage;
