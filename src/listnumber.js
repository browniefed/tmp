import React, { Component } from "react";

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [
  "1. Shahaji Nangare",
  "2. Aruna Nangare",
  "3. Pravin Phapale",
  "4. Shalmali Nangare",
  "5. Nilesh Patil"
];

class ListNumber extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log("this is:", this);
  };
  render() {
    return (
      <div>
        Welcome List Number !
        <br />
        <NumberList numbers={numbers} />,
      </div>
    );
  }
}

export default ListNumber;
