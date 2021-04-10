import "./Pathfinder.css";

import mapIcon1 from "pathfinder/images/map-1-icon.svg";
import mapIcon2 from "pathfinder/images/map-2-icon.svg";
import mapIcon3 from "pathfinder/images/map-3-icon.svg";
import styled from "styled-components";
import tw from "twin.macro";
import React, { Component } from "react";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { SectionDescription } from "components/misc/Typography.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import { ReactComponent as SvgDecoratorCircle } from "images/svg-decorator-blob-9.svg";
import { css } from "styled-components/macro"; //eslint-disable-line

import Node from "./Node";

const PrimaryBackgroundContainer = tw.div`py-16 lg:py-20 bg-purple-200 relative`;
const Row = tw.div`px-4 sm:px-16 mx-auto flex justify-center items-center relative z-10 flex-col text-center lg:text-left`;
const DecoratorCircleContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
	${tw`absolute top-0 right-0 w-64 h-64 text-teal-300 transform translate-y-1/2 opacity-25 pointer-events-none fill-current -z-20 translate-x-2/3`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
	${tw`absolute top-0 left-0 w-64 h-64 text-yellow-500 transform translate-y-1/2 opacity-25 pointer-events-none fill-current -z-20 -translate-x-2/3`}
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

// Algorithms
const Heading = tw(SectionHeading)``;
const AlgorithmsDescription = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
	${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
	${tw`lg:w-1/3 max-w-xs`}
`;
const Card = styled.a`
	${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105`}
	.imageContainer {
		${tw`text-center rounded-full p-4 bg-gray-100`}
		img {
			${tw`w-8 h-8`}
		}
	}
	.title {
		${tw`mt-4 font-bold text-xl leading-none`}
	}
	.description {
		${tw`mt-4 text-sm font-medium text-secondary-100`}
	}
	.funFact {
		${tw`mt-4 text-sm font-medium text-secondary-100 italic`}
	}
	.link {
		${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
		.icon {
			${tw`ml-2 w-4`}
		}
	}
`;

const desiredSize = 40;
let computedSize;
const rows = 20;
let columns;

class Pathfinder extends Component {
	constructor(props) {
		super(props);
		this.state = { grid: [] };
		this.updateGrid = this.updateGrid.bind(this);
		this.actions = React.createRef();
	}

	componentDidMount() {
		this.updateGrid();
		window.addEventListener("resize", this.updateGrid);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateGrid);
	}

	updateGrid() {
		columns = Math.floor(this.actions.current.offsetWidth / desiredSize);
		computedSize = (this.actions.current.offsetWidth - 2) / columns;
		const grid = this.createGrid();
		this.setState({ grid });
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
			isStart: row === 1 && column === 1,
			isFinish: row === rows - 2 && column === columns - 2,
			isWall: false,
			isVisited: false,
			distance: Infinity,
			previousNode: null,
		};
	};

	render(
		subheading = "Tutorial",
		tutorialDescription = "Before beginning, read about the different algorithms at the bottom of the page and decide which you want to use, then select its respective button to start visualizing. During use, refer to the legend below to understand any particular node’s state.",
		heading = "Meet the algorithms.",
		algorithmsDescription = "All the algorithms on this visualizer are adapted to a two-dimensional grid, where ninety degree turns and movements from one node to another have a calculated cost of one. Furthermore, algorithms are either weighted or unweighted, and their weightedness dictates consideration of the afore mentioned cost calculations. What’s more, not all algorithms guarantee the shortest path, so be sure to read their descriptions to understand capabilities.",
		cards = [
			{
				imageSrc: mapIcon1,
				title: "Depth-first search",
				description:
					"Depth-first search is unweighted and does not guarantee the shortest path. This algorithm works by beginning at the start node and exploring as far as possible along a given path and then backtracking until it finds an unexplored path to be explored.",
				funFact: "Fun fact: Depth-first search rarely returns the shortest path and is dreadfully inefficient at pathfinding!",
				url: "https://en.wikipedia.org/wiki/Depth-first_search",
			},
			{
				imageSrc: mapIcon2,
				title: "Dijkstra’s algorithm",
				description:
					"Dijkstra’s algorithm is weighted and guarantees the shortest path. This algorithm works by constructing a lowest-cost path tree through building a set of nodes that have the smallest distance from the start node to the finish node.",
				funFact: "Fun fact: Edsger Dijkstra invented his famous algorithm in roughly twenty minutes at a café.",
				url: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",
			},
			{
				imageSrc: mapIcon3,
				title: "A* search",
				description:
					"A* (A-star) search is weighted and guarantees the shortest path. Like Dijkstra’s algorithm, A* constructs a lowest-cost path tree. However, A* uses heuristics that reduce computation time by planning each step with informed decisions.",
				funFact: "Fun fact: Google Maps uses an A* search coupled with collections of highly complex heuristics.",
				url: "https://en.wikipedia.org/wiki/A*_search_algorithm",
			},
		],
		imageContainerCss = null,
		imageCss = null,
		linkText = "Learn more"
	) {
		const tutorial = { marginRight: "1rem", minWidth: desiredSize + "px" };
		const { grid } = this.state;
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
						<div className="grid">
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
									<PrimaryButton>DEPTH-FIRST</PrimaryButton>
									<PrimaryButton>DIJKSTRA</PrimaryButton>
									<PrimaryButton>A*</PrimaryButton>
									<PrimaryButton css={tw`bg-red-500 hover:bg-red-600`}>CLEAR GRID</PrimaryButton>
									<PrimaryButton css={tw`bg-yellow-500 hover:bg-yellow-600`}>CLEAR WALLS</PrimaryButton>
									<SecondaryButton>GENERATE MAZE</SecondaryButton>
								</ButtonsContainer>
							</Row>
							<DecoratorCircleContainer>
								<DecoratorCircle3 />
								<DecoratorCircle4 />
							</DecoratorCircleContainer>
						</ActionsBackgroundContainer>
					</ContentWithPaddingXl>
					<DecoratorBlob1 />
				</Container>
				<Container css={tw`mb-20 lg:mb-24`}>
					<ContentWithPaddingXl>
						{heading && <Heading>{heading}</Heading>}
						{algorithmsDescription && <AlgorithmsDescription>{algorithmsDescription}</AlgorithmsDescription>}
						<ThreeColumnContainer>
							{cards.map((card, i) => (
								<Column key={i}>
									<Card href={card.url}>
										<span className="imageContainer" css={imageContainerCss}>
											<img src={card.imageSrc} alt="" css={imageCss} />
										</span>
										<span className="title">{card.title}</span>
										<p className="description">{card.description}</p>
										<p className="funFact">{card.funFact}</p>
										{linkText && (
											<span className="link">
												<span>{linkText}</span>
												<ArrowRightIcon className="icon" />
											</span>
										)}
									</Card>
								</Column>
							))}
						</ThreeColumnContainer>
					</ContentWithPaddingXl>
					<DecoratorBlob2 />
				</Container>
			</>
		);
	}
}

export default Pathfinder;
