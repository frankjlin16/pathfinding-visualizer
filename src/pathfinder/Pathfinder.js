import "./Pathfinder.css";

import styled from "styled-components";
import tw from "twin.macro";
import React, { Component } from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorCircle } from "images/svg-decorator-blob-9.svg";
import { css } from "styled-components/macro"; //eslint-disable-line

import Node from "./Node";
import { dijkstra } from "./algorithms/dijkstra";

const PrimaryBackgroundContainer = tw.div`py-16 lg:py-20 bg-purple-200 relative`;
const Row = tw.div`px-4 sm:px-16 mx-auto flex justify-center items-center relative z-10 flex-col text-center lg:text-left`;
const DecoratorCircleContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob = styled(SvgDecoratorBlob)`
	${tw`absolute top-0 right-0 w-64 h-64 text-teal-300 transform translate-y-1/2 opacity-25 pointer-events-none fill-current -z-20 translate-x-2/3`}
`;

// Tutorial
const TutorialBackgroundContainer = tw(PrimaryBackgroundContainer)`rounded-t-lg`;
const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const TutorialDescription = tw(SectionDescription)`w-full text-center text-secondary-500`;
const LegendNodesContainer = tw.div`grid sm:grid-rows-3 sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 justify-center lg:justify-end mt-8`;
const LegendNode = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 rounded font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline text-secondary-500 flex items-center text-left`;
const DecoratorCircle1 = tw(SvgDecoratorCircle)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-500 opacity-5`;
const DecoratorCircle2 = tw(SvgDecoratorCircle)`absolute top-0 right-0 w-80 h-80 transform translate-x-20 -translate-y-64 text-primary-500 opacity-5`;

// Actions
const ActionsBackgroundContainer = tw(PrimaryBackgroundContainer)`rounded-b-lg`;
const ButtonsContainer = tw.div`grid sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-x-8 gap-y-8 justify-center lg:justify-end`;
const Button = tw(
	PrimaryButtonBase
)`w-full lg:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryButton = tw(Button)``;
const SecondaryButton = tw(Button)`text-primary-500 hover:text-primary-600 bg-gray-100 hover:bg-gray-200`;
const DecoratorCircle3 = tw(SvgDecoratorCircle)`absolute bottom-0 right-0 w-80 h-80 transform translate-x-20 translate-y-32 text-primary-500 opacity-5`;
const DecoratorCircle4 = tw(SvgDecoratorCircle)`absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-64 text-primary-500 opacity-5`;

let START_NODE_COLUMN;
let FINISH_NODE_COLUMN;
const rows = 20;
let columns;
const desiredSize = 40;
let computedSize;
let offsetWidth;

class Pathfinder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			grid: [],
			START_NODE_ROW: 1,
			START_NODE_COLUMN: START_NODE_COLUMN,
			FINISH_NODE_ROW: rows - 2,
			FINISH_NODE_COLUMN: FINISH_NODE_COLUMN,
			row: 0,
			column: 0,
			isStart: false,
			isFinish: false,
			isRunning: false,
			isMouseDown: false,
		};
		this.updateGrid = this.updateGrid.bind(this);
		this.actions = React.createRef();
	}

	componentDidMount() {
		columns = Math.floor(this.actions.current.offsetWidth / desiredSize);
		START_NODE_COLUMN = 1;
		FINISH_NODE_COLUMN = columns - 2;
		this.setState({ START_NODE_COLUMN: START_NODE_COLUMN, FINISH_NODE_COLUMN: FINISH_NODE_COLUMN });

		this.updateGrid();
		window.addEventListener("resize", this.updateGrid);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateGrid);
	}

	updateGrid() {
		if (offsetWidth !== this.actions.current.offsetWidth) {
			offsetWidth = this.actions.current.offsetWidth;

			this.clearGrid();
			this.clearWalls();

			columns = Math.floor(this.actions.current.offsetWidth / desiredSize);
			if (START_NODE_COLUMN >= columns) START_NODE_COLUMN = columns - 1;
			if (FINISH_NODE_COLUMN >= columns) FINISH_NODE_COLUMN = columns - 1;
			this.setState({ START_NODE_COLUMN: START_NODE_COLUMN, FINISH_NODE_COLUMN: FINISH_NODE_COLUMN });

			computedSize = (this.actions.current.offsetWidth - 2) / columns;
			const grid = this.createGrid();
			this.setState({ grid });
		}
	}

	createGrid = () => {
		const grid = [];
		for (let row = 0; row < rows; ++row) {
			const currentRow = [];
			for (let column = 0; column < columns; ++column) {
				currentRow.push(this.createNode(row, column));
			}
			grid.push(currentRow);
		}
		return grid;
	};

	createNode = (row, column) => {
		return {
			row,
			column,
			isStart: row === this.state.START_NODE_ROW && column === START_NODE_COLUMN,
			isFinish: row === this.state.FINISH_NODE_ROW && column === FINISH_NODE_COLUMN,
			isWall: false,
			isVisited: false,
			distance: Infinity,
			previousNode: null,
		};
	};

	visualize(algorithm) {
		if (!this.state.isRunning) {
			this.clearGrid();
			this.toggleRunning();
			const { grid } = this.state;
			const startNode = grid[this.state.START_NODE_ROW][this.state.START_NODE_COLUMN];
			const finishNode = grid[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COLUMN];
			let visitedNodes;
			switch (algorithm) {
				case "dijkstra":
					visitedNodes = dijkstra(grid, startNode, finishNode);
					break;
				default:
					break;
			}
			const path = this.getPath(finishNode);
			this.animate(visitedNodes, path);
		}
	}

	clearGrid() {
		if (!this.state.isRunning) {
			for (const row of this.state.grid) {
				for (const node of row) {
					let className = document.getElementById(`node-${node.row}-${node.column}`).className;
					if (className === "node start") {
						node.isVisited = false;
						node.distance = Infinity;
						node.previousNode = null;
					}
					if (className === "node finish") {
						node.isVisited = false;
						node.distance = Infinity;
						node.previousNode = null;
					}
					if (className !== "node start" && className !== "node finish" && className !== "node wall") {
						document.getElementById(`node-${node.row}-${node.column}`).className = "node";
						node.isVisited = false;
						node.distance = Infinity;
						node.previousNode = null;
					}
				}
			}
		}
	}

	clearWalls() {
		if (!this.state.isRunning) {
			this.clearGrid();
			for (const row of this.state.grid) {
				for (const node of row) {
					let className = document.getElementById(`node-${node.row}-${node.column}`).className;
					if (className === "node wall") {
						document.getElementById(`node-${node.row}-${node.column}`).className = "node";
						node.isWall = false;
					}
				}
			}
		}
	}

	toggleRunning() {
		this.setState({ isRunning: !this.state.isRunning });
	}

	getPath(finishNode) {
		const path = [];
		let currentNode = finishNode;
		while (currentNode !== null) {
			path.unshift(currentNode);
			currentNode = currentNode.previousNode;
		}
		return path;
	}

	animate(visitedNodes, path) {
		for (let i = 0; i <= visitedNodes.length; ++i) {
			if (i === visitedNodes.length) {
				setTimeout(() => {
					this.animatePath(path);
				}, 10 * i);
				return;
			}
			setTimeout(() => {
				const node = visitedNodes[i];
				if (document.getElementById(`node-${node.row}-${node.column}`).className === "node")
					document.getElementById(`node-${node.row}-${node.column}`).className = "node visited";
			}, 10 * i);
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

	handleMouseDown(row, column) {
		if (!this.state.isRunning) {
			this.clearGrid();
			if (document.getElementById(`node-${row}-${column}`).className === "node start") {
				this.setState({
					row: row,
					column: column,
					isStart: true,
					isMouseDown: true,
				});
			} else if (document.getElementById(`node-${row}-${column}`).className === "node finish") {
				this.setState({
					row: row,
					column: column,
					isFinish: true,
					isMouseDown: true,
				});
			} else {
				const newGrid = this.toggleWall(this.state.grid, row, column);
				this.setState({
					grid: newGrid,
					row: row,
					column: column,
					isMouseDown: true,
				});
			}
		}
	}

	handleMouseEnter(row, column) {
		if (!this.state.isRunning) {
			if (this.state.isMouseDown) {
				const className = document.getElementById(`node-${row}-${column}`).className;
				if (this.state.isStart) {
					if (className !== "node finish" && className !== "node wall") {
						const previousNode = this.state.grid[this.state.row][this.state.column];
						previousNode.isStart = false;

						const currentNode = this.state.grid[row][column];
						currentNode.isStart = true;

						START_NODE_COLUMN = column;
						this.setState({ START_NODE_ROW: row, START_NODE_COLUMN: column });
						this.setState({ row: row, column: column });
					}
				} else if (this.state.isFinish) {
					if (className !== "node start" && className !== "node wall") {
						const previousNode = this.state.grid[this.state.row][this.state.column];
						previousNode.isFinish = false;

						const currentNode = this.state.grid[row][column];
						currentNode.isFinish = true;

						FINISH_NODE_COLUMN = column;
						this.setState({ FINISH_NODE_ROW: row, FINISH_NODE_COLUMN: column });
						this.setState({ row: row, column: column });
					}
				} else {
					const newGrid = this.toggleWall(this.state.grid, row, column);
					this.setState({ grid: newGrid });
				}
			}
		}
	}

	handleMouseUp() {
		if (!this.state.isRunning) {
			this.setState({ isStart: false, isFinish: false, isMouseDown: false });
		}
	}

	toggleWall(grid, row, column) {
		let node = grid[row][column];
		if (!node.isStart && !node.isFinish) {
			document.getElementById(`node-${node.row}-${node.column}`).className = "node wall";
			node = {
				...node,
				isWall: !node.isWall,
			};
			grid[row][column] = node;
		}
		return grid;
	}

	render(
		subheading = "Tutorial",
		tutorialDescription = "Before beginning, drag and drop the start and finish nodes to your desired location and create walls by selecting any unvisited nodes on the grid. After, read about the different algorithms at the bottom of the page and decide which you want to use, then select its respective button to start visualizing. During use, refer to the legend below to understand any particular node’s state."
	) {
		const tutorial = { marginRight: "1rem", minWidth: desiredSize + "px", pointerEvents: "none" };
		const { grid, isMouseDown } = this.state;
		return (
			<>
				<Container>
					<ContentWithPaddingXl css={tw`pt-0 pb-0`}>
						<TutorialBackgroundContainer>
							<Row>
								<Row>
									<Container>
										{subheading && <Subheading>{subheading}</Subheading>}
										{tutorialDescription && <TutorialDescription>{tutorialDescription}</TutorialDescription>}
									</Container>
								</Row>
								<Row>
									<LegendNodesContainer>
										<LegendNode>
											<Node style={tutorial} isStart></Node>
											START NODE
										</LegendNode>
										<LegendNode>
											<Node style={tutorial} isFinish></Node>
											FINISH NODE
										</LegendNode>
										<LegendNode>
											<Node style={tutorial} isWall></Node>
											WALL NODE
										</LegendNode>
										<LegendNode>
											<Node style={{ ...tutorial, backgroundColor: "white" }}></Node>
											UNVISITED NODE
										</LegendNode>
										<LegendNode>
											<Node style={tutorial} isVisited></Node>
											VISITED NODE
										</LegendNode>
										<LegendNode>
											<Node style={tutorial} isPath></Node>
											PATH NODE
										</LegendNode>
									</LegendNodesContainer>
								</Row>
							</Row>
							<DecoratorCircleContainer>
								<DecoratorCircle1 />
								<DecoratorCircle2 />
							</DecoratorCircleContainer>
						</TutorialBackgroundContainer>
					</ContentWithPaddingXl>
				</Container>
				<Container>
					<ContentWithPaddingXl css={tw`pt-0`}>
						<div className="grid" onMouseLeave={() => this.handleMouseUp()}>
							{grid.map((row, rowIndex) => {
								return (
									<div key={rowIndex}>
										{row.map((node, nodeIndex) => {
											const { row, column, isStart, isFinish, isWall } = node;
											return (
												<Node
													key={nodeIndex}
													style={{ width: `${computedSize}px`, height: `${computedSize}px` }}
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
						<ActionsBackgroundContainer ref={this.actions}>
							<Row>
								<ButtonsContainer>
									<PrimaryButton>RANDOM WALK</PrimaryButton>
									<PrimaryButton>DEPTH-FIRST</PrimaryButton>
									<PrimaryButton>BREADTH-FIRST</PrimaryButton>
									<PrimaryButton>GREEDY BEST</PrimaryButton>
									<PrimaryButton onClick={() => this.visualize("dijkstra")}>DIJKSTRA</PrimaryButton>
									<PrimaryButton>A*</PrimaryButton>
									<PrimaryButton onClick={() => this.clearGrid()} css={tw`bg-red-500 hover:bg-red-600`}>
										CLEAR GRID
									</PrimaryButton>
									<PrimaryButton onClick={() => this.clearWalls()} css={tw`bg-yellow-500 hover:bg-yellow-600`}>
										CLEAR WALLS
									</PrimaryButton>
									<SecondaryButton>GENERATE MAZE</SecondaryButton>
								</ButtonsContainer>
							</Row>
							<DecoratorCircleContainer>
								<DecoratorCircle3 />
								<DecoratorCircle4 />
							</DecoratorCircleContainer>
						</ActionsBackgroundContainer>
					</ContentWithPaddingXl>
					<DecoratorBlob />
				</Container>
			</>
		);
	}
}

export default Pathfinder;
