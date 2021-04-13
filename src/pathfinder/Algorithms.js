import React from "react";
import mapIcon1 from "pathfinder/images/map-1-icon.svg";
import mapIcon2 from "pathfinder/images/map-2-icon.svg";
import mapIcon3 from "pathfinder/images/map-3-icon.svg";
import mapIcon4 from "pathfinder/images/map-4-icon.svg";
import mapIcon5 from "pathfinder/images/map-5-icon.svg";
import mapIcon6 from "pathfinder/images/map-6-icon.svg";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionDescription } from "components/misc/Typography.js";
import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-8.svg";
import { css } from "styled-components/macro"; //eslint-disable-line

const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`text-center mx-auto`;
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
const DecoratorBlob = styled(SvgDecoratorBlob)`
	${tw`absolute top-0 left-0 w-64 h-64 text-yellow-500 transform translate-y-1/2 opacity-25 pointer-events-none fill-current -z-20 -translate-x-2/3`}
`;

export default ({
	cards = [
		{
			imageSrc: mapIcon1,
			title: "Random walk",
			description: "",
			funFact: "Fun fact: ",
			url: "",
		},
		{
			imageSrc: mapIcon2,
			title: "Depth-first search",
			description:
				"Depth-first search is unweighted and does not guarantee the shortest path. This algorithm works by beginning at the start node and exploring as far as possible along a given path and then backtracking until it finds an unexplored path to be explored.",
			funFact: "Fun fact: Depth-first search rarely returns the shortest path and is dreadfully inefficient at pathfinding!",
			url: "https://en.wikipedia.org/wiki/Depth-first_search",
		},
		{
			imageSrc: mapIcon3,
			title: "Breadth-first search",
			description: "",
			funFact: "Fun fact: ",
			url: "",
		},
		{
			imageSrc: mapIcon4,
			title: "Greedy best-first search",
			description: "",
			funFact: "Fun fact: ",
			url: "",
		},
		{
			imageSrc: mapIcon5,
			title: "Dijkstra’s algorithm",
			description:
				"Dijkstra’s algorithm is weighted and guarantees the shortest path. This algorithm works by constructing a lowest-cost path tree through building a set of nodes that have the smallest distance from the start node to the finish node.",
			funFact: "Fun fact: Edsger Dijkstra invented his famous algorithm in roughly twenty minutes at a café.",
			url: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",
		},
		{
			imageSrc: mapIcon6,
			title: "A* search",
			description:
				"A* (A-star) search is weighted and guarantees the shortest path. Like Dijkstra’s algorithm, A* constructs a lowest-cost path tree. However, A* uses heuristics that reduce computation time by planning each step with informed decisions.",
			funFact: "Fun fact: Google Maps uses an A* search coupled with collections of highly advanced heuristics.",
			url: "https://en.wikipedia.org/wiki/A*_search_algorithm",
		},
	],
	linkText = "Learn more",
	heading = "Meet the algorithms.",
	description = "All the algorithms on this visualizer are adapted to a two-dimensional grid, where ninety degree turns and movements from one node to another have a calculated cost of one. Furthermore, algorithms are either weighted or unweighted, and their weightedness dictates consideration of the afore mentioned cost calculations. What’s more, not all algorithms guarantee the shortest path, so be sure to read their descriptions to understand capabilities.",
	imageContainerCss = null,
	imageCss = null,
}) => {
	return (
		<Container css={tw`mb-20 lg:mb-24`}>
			<ContentWithPaddingXl>
				{heading && <Heading>{heading}</Heading>}
				{description && <Description>{description}</Description>}
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
			<DecoratorBlob />
		</Container>
	);
};
