import React from 'react';
import Proptypes from 'prop-types'

export class Line extends React.Component {
  constructor(props) {
    super(props);
    
    // Bind function to `this`
    this.calculateDistance = this.calculateDistance.bind(this);
  }

  //proptype checking both points received and both are number arrays
  static propTypes = {
    p1: Proptypes.arrayOf(Proptypes.number).isRequired,
    p2: Proptypes.arrayOf(Proptypes.number).isRequired,
  }

  calculateDistance = () => {
    const p1 = this.props.p1;
    const p2 = this.props.p2;

    return Math.sqrt (
        p1.map((coord, _i) => (coord -p2[_i]) ** 2)
        .reduce((sum,diff) => sum + diff, 0)
    ).toFixed(2);
  }

  render() {
    return (
        <div>
            <h1> Line Component</h1>
            <p>Point 1: {this.props.p1.join(";")}</p>
            <p>Point 2: {this.props.p2.join(";")}</p>
            <p>Dimension: {this.props.p1.length}</p>
            <p>Distance:  {this.calculateDistance()}</p>
        </div>
     
    );
  }
}

export default Line;
