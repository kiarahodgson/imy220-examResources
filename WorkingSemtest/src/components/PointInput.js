import React from 'react';
import propTypes from 'prop-types';

export class PointInput extends React.Component {
  constructor(props)
  {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.inputOneRef = React.createRef();
    this.inputTwoRef = React.createRef();
  }

  handleClick(event)
  {
    event.preventDefault(); // Prevent default form submission behavior
    const p1 = this.inputOneRef.current.value.split(";").map(coord => parseInt(coord)); //turns each string in the array into a number 
    const p2 = this.inputTwoRef.current.value.split(";").map(coord => parseInt(coord));
    this.props.updatePoints(p1, p2); // Pass the new points back to App
  }

  static propTypes = {
    updatePoints: propTypes.func.isRequired // Check that updatePoints is a function passed down from App
  }

  render() {
    return (
      <div>
        <h1>Point Input</h1>
        <input type = "text" ref={this.inputOneRef} />
        <input type = "text" ref={this.inputTwoRef} />
        <button onClick={this.handleClick}>Calculate</button>
      </div>
    );
  }
}