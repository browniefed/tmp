import React, { Component } from "react";
import { Field } from "formik";

class SubmitPage extends Component {
  render() {
    return (
      <div>
        <div>
          <label>
            <Field type="checkbox" name="tos" />
            I agree to the TOS
          </label>
        </div>
        <button className="next">Submit</button>
      </div>
    );
  }
}

export default SubmitPage;
