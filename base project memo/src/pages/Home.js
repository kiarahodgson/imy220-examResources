import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Home Page!</h1>
        <Link to="/" style={{"padding": "5px"}}>Home</Link>
        <Link to="/posts">Posts</Link>
      </div>
    );
  }
}

export default Home;
