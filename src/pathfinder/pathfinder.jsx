import React, { Component } from "react";
import Node from "./node";
import { dijkstra } from "../algorithms/dijkstra";

import "./pathfinder.css";

const START_NODE_ROW = 12;
const START_NODE_COLUMN = 4;
const FINISH_NODE_ROW = 12;
const FINISH_NODE_COLUMN = 39;

class Pathfinder extends Component {
	state = {
		grid: [],
		isMouseDown: false,
		isRunning: false,
	};

	componentDidMount() {
		const grid = createGrid();
		this.setState({ grid });
	}

	handleMouseDown(row, column) {
		if (!this.state.isRunning) {
			const newGrid = toggleWall(this.state.grid, row, column);
			this.setState({ grid: newGrid, isMouseDown: true });
		}
	}

	handleMouseEnter(row, column) {
		if (this.state.isMouseDown) {
			const newGrid = toggleWall(this.state.grid, row, column);
			this.setState({ grid: newGrid });
		}
	}

	handleMouseUp() {
		this.setState({ isMouseDown: false });
	}

	toggleRunning() {
		document.getElementById("start").disabled = !this.state.isRunning;
		this.setState({ isRunning: !this.state.isRunning });
	}

	visualize() {
		const { grid } = this.state;
		const startNode = grid[START_NODE_ROW][START_NODE_COLUMN];
		const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COLUMN];
		const visitedNodes = dijkstra(grid, startNode, finishNode);
		if (!isTrapped(visitedNodes)) {
			this.toggleRunning();
			const path = getPath(finishNode);
			this.animate(visitedNodes, path);
		}
	}

	animate(visitedNodes, path) {
		for (let i = 0; i <= visitedNodes.length; ++i) {
			if (i === visitedNodes.length) {
				setTimeout(() => {
					this.animatePath(path);
				}, 5 * i);
				return;
			}
			setTimeout(() => {
				const node = visitedNodes[i];
				if (document.getElementById(`node-${node.row}-${node.column}`).className === "node")
					document.getElementById(`node-${node.row}-${node.column}`).className = "node visited";
			}, 5 * i);
		}
	}

	animatePath(path) {
		for (let i = 0; i < path.length; ++i) {
			setTimeout(() => {
				const node = path[i];
				if (document.getElementById(`node-${node.row}-${node.column}`).className === "node visited")
					document.getElementById(`node-${node.row}-${node.column}`).className = "node path";
				if (i + 1 === path.length) {
					this.toggleRunning();
				}
			}, 50 * i);
		}
	}

	render() {
		const { grid, isMouseDown } = this.state;
		return (
			<>
				{/* <button id="start" onClick={() => this.visualize()}>
					START
				</button> */}
				<div className="grid">
					{grid.map((row, rowIndex) => {
						return (
							<div key={rowIndex}>
								{row.map((node, nodeIndex) => {
									const { row, column, isStart, isFinish, isWall } = node;
									return (
										<Node
											key={nodeIndex}
											row={row}
											column={column}
											isStart={isStart}
											isFinish={isFinish}
											isWall={isWall}
											isMouseDown={isMouseDown}
											onMouseDown={(row, column) => this.handleMouseDown(row, column)}
											onMouseEnter={(row, column) => this.handleMouseEnter(row, column)}
											onMouseUp={() => this.handleMouseUp()}
										></Node>
									);
								})}
							</div>
						);
					})}
				</div>
			</>
		);
	}
}

const createGrid = () => {
	const grid = [];
	for (let row = 0; row < 25; ++row) {
		const currentRow = [];
		for (let column = 0; column < 44; ++column) {
			currentRow.push(createNode(row, column));
		}
		grid.push(currentRow);
	}
	return grid;
};

const createNode = (row, column) => {
	return {
		row,
		column,
		isStart: row === START_NODE_ROW && column === START_NODE_COLUMN,
		isFinish: row === FINISH_NODE_ROW && column === FINISH_NODE_COLUMN,
		isWall: false,
		isVisited: false,
		distance: Infinity,
		previousNode: null,
	};
};

const toggleWall = (grid, row, column) => {
	let node = grid[row][column];
	if (!node.isStart && !node.isFinish)
		node = {
			...node,
			isWall: !node.isWall,
		};
	grid[row][column] = node;
	return grid;
};

const isTrapped = (visitedNodes) => {
	for (let i = 0; i < visitedNodes.length; ++i) {
		if (visitedNodes[i].isFinish) {
			return false;
		}
	}
	alert("ERROR: START AND/OR FINISH NODE TRAPPED");
	return true;
};

const getPath = (finishNode) => {
	const path = [];
	let currentNode = finishNode;
	while (currentNode !== null) {
		path.unshift(currentNode);
		currentNode = currentNode.previousNode;
	}
	return path;
};

export default Pathfinder;
