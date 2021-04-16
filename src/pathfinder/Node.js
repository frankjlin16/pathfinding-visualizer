import "./Node.css";

import React, { Component } from "react";

class Node extends Component {
	render() {
		const {
			row,
			column,
			isStart,
			isFinish,
			isWall,
			isVisited,
			isPath,
			style,
			onMouseDown,
			onMouseEnter,
			onMouseUp,
		} = this.props;
		const type = isStart
			? " start"
			: isFinish
			? " finish"
			: isWall
			? " wall"
			: isVisited
			? " visited"
			: isPath
			? " path"
			: "";
		return (
			<div
				id={`node-${row}-${column}`}
				className={`node${type}`}
				style={style}
				onMouseDown={() => onMouseDown(row, column)}
				onMouseEnter={() => onMouseEnter(row, column)}
				onMouseUp={() => onMouseUp()}
			></div>
		);
	}
}

export default Node;
