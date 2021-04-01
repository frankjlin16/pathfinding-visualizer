import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionDescription } from "components/misc/Typography.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";

const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Heading = tw(SectionHeading)`w-full`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Description = tw(SectionDescription)`w-full text-center`;
const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-2/3 -translate-y-1/2`}
`;

export default ({
  heading = "Pathfinding Visualizer",
  subheading = "by Alek Broman | v.02",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <ContentWithPaddingXl>
          <HeaderContainer>
            <Heading>{heading}</Heading>
            {subheading && <Subheading>{subheading}</Subheading>}
            {description && <Description>{description}</Description>}
          </HeaderContainer>
        </ContentWithPaddingXl>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  );
};
