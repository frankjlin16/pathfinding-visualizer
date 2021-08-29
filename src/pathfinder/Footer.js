import React from "react";
import logo from "pathfinder/images/logo.png";
import styled from "styled-components";
import tw from "twin.macro";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "styled-components/macro"; //eslint-disable-line
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const Row = tw.div`flex items-center justify-center flex-col px-8`;
const Text = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start flex-col sm:flex-row mt-10`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-0 sm:ml-2 mt-2 sm:mt-0 text-2xl font-black tracking-wider text-center`;
const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
	${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
	svg {
		${tw`w-5 h-5`}
	}
`;

export default () => {
	return (
		<Container>
			<Content>
				<Row>
					<Text css={tw`mt-0`}>
						1. START/FINISH node transposition not supported on mobile devices.
					</Text>
					<Text css={tw`mt-0`}>
						2. Random walk path visualization not supported, only searching.
					</Text>
					<LogoContainer>
						<LogoImg src={logo} />
						<LogoText>Pathfinding Visualizer</LogoText>
					</LogoContainer>
					<SocialLinksContainer>
						<SocialLink href="https://alekbroman.com">
							<FontAwesomeIcon icon={faUser} />
						</SocialLink>
						<SocialLink href="https://www.linkedin.com/in/alekbroman">
							<FontAwesomeIcon icon={faLinkedin} />
						</SocialLink>
						<SocialLink href="https://github.com/polymods">
							<FontAwesomeIcon icon={faGithub} />
						</SocialLink>
					</SocialLinksContainer>
					<Text>
						2020 – {new Date().getFullYear()} &copy; Alek Broman. All rights
						reserved.
					</Text>
				</Row>
			</Content>
		</Container>
	);
};
