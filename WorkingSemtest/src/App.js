import React from 'react';
import { PointInput } from './components/PointInput';
import { Line } from './components/Line';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      p1: [0, 0],
      p2: [0, 0]
    };
    this.updatePoints = this.updatePoints.bind(this);
  }

  updatePoints(p1, p2)
  {
    this.setState({ p1, p2 });
  }

  render()
  {
    return (
      <div>
        <h1>Semester Test</h1>
        <PointInput updatePoints={this.updatePoints} /> 
        {/* through doing this, update points is passed to PointInput */}
        <Line p1={this.state.p1} p2={this.state.p2} />
      </div>
    );
  }
}

export default App;
