import "./Pathfinder.css";

import smoothscroll from "smoothscroll-polyfill";
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
import { isMobile } from "react-device-detect";

import Node from "./Node";
import { aStar } from "./algorithms/a-star";
import { breadthFirst } from "./algorithms/breadth-first";
import { depthFirst } from "./algorithms/depth-first";
import { dijkstra } from "./algorithms/dijkstra";
import { greedyBest } from "./algorithms/greedy-best";
import { maze } from "./algorithms/maze";
import { randomWalk } from "./algorithms/random-walk";

const PrimaryBackgroundContainer = tw.div`py-16 lg:py-20 bg-purple-200 relative`;
const Row = tw.div`px-4 sm:px-16 mx-auto flex justify-center items-center relative z-10 flex-col text-center lg:text-left`;
const DecoratorCircleContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob = styled(SvgDecoratorBlob)`
	${tw`absolute top-0 right-0 w-64 h-64 text-teal-300 transform translate-y-1/2 opacity-25 pointer-events-none fill-current -z-20 translate-x-2/3`}
`;

// Tutorial
const TutorialBackgroundContainer = tw(PrimaryBackgroundContainer)`rounded-t-lg`;
const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Description = tw(SectionDescription)`w-full text-center text-secondary-500`;
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
const DecoratorCircle3 = tw(SvgDecoratorCircle)`absolute bottom-0 right-0 w-80 h-80 transform translate-x-20 translate-y-32 text-primary-500 opacity-5`;
const DecoratorCircle4 = tw(SvgDecoratorCircle)`absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-64 text-primary-500 opacity-5`;

const rows = 15;
let columns;
let START_NODE_ROW = 1;
let START_NODE_COLUMN;
let FINISH_NODE_ROW = rows - 2;
let FINISH_NODE_COLUMN;
let offsetWidth;
const desiredSize = 40;
let computedSize;
let speed;
let cancel;
let timers = [];

class Pathfinder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			grid: [],
			row: 0,
			column: 0,
			isStart: false,
			isFinish: false,
			isRunning: false,
			isMouseDown: false,
		};
		this.actions = React.createRef();
		this.updateGrid = this.updateGrid.bind(this);
	}

	componentDidMount() {
		columns = Math.floor(this.actions.current.offsetWidth / desiredSize);
		START_NODE_COLUMN = 1;
		FINISH_NODE_COLUMN = columns - 2;

		this.updateGrid();
		window.addEventListener("resize", this.updateGrid);
		document.getElementById("root").addEventListener("click", () => {});
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
			computedSize = (this.actions.current.offsetWidth - 2) / columns;
			speed = (100 / this.actions.current.offsetWidth) * 200;

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
			isStart: row === START_NODE_ROW && column === START_NODE_COLUMN,
			isFinish: row === FINISH_NODE_ROW && column === FINISH_NODE_COLUMN,
			isWall: false,
			isVisited: false,
			distance: Infinity,
			previousNode: null,
		};
	};

	visualize(algorithm) {
		if (this.state.isRunning) {
			for (const timer of timers) clearTimeout(timer);
			cancel = true;
		} else {
			this.toggleRunning();
		}
		this.clearGrid();
		if (isMobile) {
			document.getElementById("grid").scrollIntoView({ behavior: "smooth" });
		}
		const { grid } = this.state;
		const startNode = grid[START_NODE_ROW][START_NODE_COLUMN];
		const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COLUMN];
		let visitedNodes;
		let random = false;
		switch (algorithm) {
			case "randomWalk":
				visitedNodes = randomWalk(grid, startNode, finishNode);
				random = true;
				break;
			case "depthFirst":
				visitedNodes = depthFirst(grid, startNode, finishNode);
				break;
			case "breadthFirst":
				visitedNodes = breadthFirst(grid, startNode, finishNode);
				break;
			case "greedyBest":
				visitedNodes = greedyBest(grid, startNode, finishNode);
				break;
			case "dijkstra":
				visitedNodes = dijkstra(grid, startNode, finishNode);
				break;
			case "aStar":
				visitedNodes = aStar(grid, startNode, finishNode);
				break;
			case "maze":
				visitedNodes = maze();
				break;
			default:
				break;
		}
		let path;
		if (random) path = [];
		else path = this.getPath(finishNode);
		this.animate(visitedNodes, path);
	}

	clearGrid() {
		if (!this.state.isRunning || cancel) {
			cancel = false;
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
		} else {
			for (const timer of timers) clearTimeout(timer);
			this.toggleRunning();
			cancel = true;
			this.clearGrid();
		}
	}

	clearWalls() {
		if (!this.state.isRunning || cancel) {
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
		} else {
			for (const timer of timers) clearTimeout(timer);
			this.toggleRunning();
			cancel = true;
			this.clearWalls();
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
				timers.push(
					setTimeout(() => {
						this.animatePath(path);
					}, speed * i)
				);
				return;
			}
			timers.push(
				setTimeout(() => {
					const node = visitedNodes[i];
					if (
						document.getElementById(`node-${node.row}-${node.column}`).className === "node" ||
						document.getElementById(`node-${node.row}-${node.column}`).className === "node visited"
					) {
						document.getElementById(`node-${node.row}-${node.column}`).className = "node";
						timers.push(
							setTimeout(() => {
								document.getElementById(`node-${node.row}-${node.column}`).className = "node visited";
							})
						);
					}
				}, speed * i)
			);
		}
	}

	animatePath(path) {
		if (path.length === 0) this.toggleRunning();
		else {
			for (let i = 0; i < path.length; ++i) {
				timers.push(
					setTimeout(() => {
						const node = path[i];
						if (document.getElementById(`node-${node.row}-${node.column}`).className === "node visited")
							document.getElementById(`node-${node.row}-${node.column}`).className = "node path";
						if (i + 1 === path.length) {
							this.toggleRunning();
						}
					}, speed * 2 * i)
				);
			}
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
					if (className !== "node wall") {
						const previousNode = this.state.grid[this.state.row][this.state.column];
						previousNode.isStart = false;
						const currentNode = this.state.grid[row][column];
						currentNode.isStart = true;

						this.setState({ row: row, column: column });
						START_NODE_ROW = row;
						START_NODE_COLUMN = column;
					}
				} else if (this.state.isFinish) {
					if (className !== "node wall") {
						const previousNode = this.state.grid[this.state.row][this.state.column];
						previousNode.isFinish = false;
						const currentNode = this.state.grid[row][column];
						currentNode.isFinish = true;

						this.setState({ row: row, column: column });
						FINISH_NODE_ROW = row;
						FINISH_NODE_COLUMN = column;
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
		tutorialDescription1 = "Drag and drop the START and FINISH nodes to your desired location and create walls by selecting any UNVISITED nodes on the grid.",
		tutorialDescription2 = "After, read about the different algorithms at the bottom of the page and decide which you want to use, then select its respective button to begin visualizing.",
		tutorialDescription3 = "During use, refer to the node legend below to interpret any given state."
	) {
		const tutorial = { border: "none", marginRight: "1rem", minWidth: desiredSize + "px", pointerEvents: "none" };
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
										{tutorialDescription1 && tutorialDescription2 && tutorialDescription3 && (
											<Description>
												{tutorialDescription1}
												<sup>1</sup> {tutorialDescription2}
												<sup>2</sup> {tutorialDescription3}
											</Description>
										)}
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
							<DecoratorCircleContainer css={tw`rounded-b-none`}>
								<DecoratorCircle1 />
								<DecoratorCircle2 />
							</DecoratorCircleContainer>
						</TutorialBackgroundContainer>
					</ContentWithPaddingXl>
				</Container>
				<Container>
					<ContentWithPaddingXl css={tw`pt-0`}>
						<div id="grid" className="grid" onMouseLeave={() => this.handleMouseUp()}>
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
									<Button onClick={() => this.visualize("randomWalk")}>RANDOM WALK</Button>
									<Button onClick={() => this.visualize("depthFirst")}>DEPTH-FIRST</Button>
									<Button onClick={() => this.visualize("breadthFirst")}>BREADTH-FIRST</Button>
									<Button onClick={() => this.visualize("greedyBest")}>GREEDY BEST</Button>
									<Button onClick={() => this.visualize("dijkstra")}>DIJKSTRA</Button>
									<Button onClick={() => this.visualize("aStar")}>A*</Button>
									<Button onClick={() => this.clearGrid()} css={tw`bg-red-500 hover:bg-red-600`}>
										CLEAR GRID
									</Button>
									<Button onClick={() => this.clearWalls()} css={tw`bg-secondary-500 hover:bg-secondary-600`}>
										CLEAR WALLS
									</Button>
									<Button onClick={() => this.visualize("maze")} css={tw`text-primary-500 hover:text-primary-600 bg-gray-100 hover:bg-gray-200`}>
										GENERATE MAZE
									</Button>
								</ButtonsContainer>
							</Row>
							<DecoratorCircleContainer css={tw`rounded-t-none`}>
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

smoothscroll.polyfill();

export default Pathfinder;
