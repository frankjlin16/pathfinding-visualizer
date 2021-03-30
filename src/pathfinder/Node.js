import "./Node.css";

import React, { Component } from "react";

class Node extends Component {
  render() {
    const { style, row, column, isStart, isFinish, isWall, isVisited, isPath } = this.props;
    const type = isStart ? "start" : isFinish ? "finish" : isWall ? "wall" : isVisited ? "visited" : isPath ? "path" : "";
    return <div style={style} id={`node-${row}-${column}`} className={`node ${type}`}></div>;
  }
}

export default Node;
