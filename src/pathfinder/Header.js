import React from "react";
import logo from "pathfinder/images/logo.png";
import styled from "styled-components";
import tw from "twin.macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionDescription } from "components/misc/Typography.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";

const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start flex-col md:flex-row`;
const LogoImg = tw.img`w-16`;
const Heading = tw(SectionHeading)`w-full ml-0 md:ml-4 mt-4 md:mt-0`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Description = tw(SectionDescription)`w-full text-center`;
const DecoratorBlob = styled(SvgDecoratorBlob)`
	${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-2/3 -translate-y-1/2`}
`;

export default ({
	heading = "Pathfinding Visualizer",
	subheading = "by Alek Broman | 1.0.0",
	description = "This web-app visualizes algorithms that seek to find the shortest path between two points and employs recursive division to procedurally generate maze structures. Consequently, maze structures act as navigational obstacles for the pathfinding algorithms, somewhat simulating a map application navigating the obstacles of a complex highway system or puzzling urban sprawls.",
}) => {
	return (
		<Container>
			<ContentWithPaddingXl>
				<ContentWithPaddingXl>
					<HeaderContainer>
						<LogoContainer>
							<LogoImg src={logo} />
							<Heading>{heading}</Heading>
						</LogoContainer>
						{subheading && <Subheading>{subheading}</Subheading>}
						{description && <Description>{description}</Description>}
					</HeaderContainer>
				</ContentWithPaddingXl>
			</ContentWithPaddingXl>
			<DecoratorBlob />
		</Container>
	);
};
