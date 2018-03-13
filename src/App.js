import React, { Component } from "react";
import "./app.css";
import yup from "yup";

const optionalRequiredSchema = yup.object().shape({
  optionalObject: yup.lazy(value => {
    if (value !== undefined) {
      return yup.object().shape({
        otherData: yup.string().required(),
      });
    }
    return yup.mixed().notRequired();
  }),
});

class App extends Component {
  state = {};
  render() {
    const valid = optionalRequiredSchema.isValidSync(this.state);

    return (
      <div className="container">
        <div className="text" style={{ backgroundColor: valid ? "green" : "red" }}>
          Valid Data: {"" + valid}
        </div>
        <button onClick={() => this.setState({ optionalObject: {} })}>Add Optional</button>
      </div>
    );
  }
}

export default App;
