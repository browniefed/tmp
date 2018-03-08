import React, { Component } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const reducer = action => (state, props) => {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + action.amount,
      };
    case DECREMENT:
      return {
        value: state.value - 1,
      };
    default:
      return null;
  }
};

class App extends Component {
  state = {
    value: 0,
  };
  increment = () => {
    this.setState(
      reducer({
        type: INCREMENT,
        amount: 2
      }),
    );
  };
  decrement = () => {
    this.setState(
      reducer({
        type: DECREMENT,
      }),
    );
  };
  render() {
    return (
      <div>
        <div>{this.state.value}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
