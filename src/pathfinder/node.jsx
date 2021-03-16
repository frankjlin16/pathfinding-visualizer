import React, { Component } from "react";

import "./node.css";

class Node extends Component {
	render() {
		const { row, column, isStart, isFinish, isWall, onMouseDown, onMouseEnter, onMouseUp } = this.props;
		const type = isStart ? " start" : isFinish ? " finish" : isWall ? " wall" : "";
		return (
			<div
				id={`node-${row}-${column}`}
				className={`node${type}`}
				onMouseDown={() => onMouseDown(row, column)}
				onMouseEnter={() => onMouseEnter(row, column)}
				onMouseUp={() => onMouseUp()}
			></div>
		);
	}
}

export default Node;
