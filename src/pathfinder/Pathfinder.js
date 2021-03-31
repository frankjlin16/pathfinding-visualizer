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

const PrimaryBackgroundContainer = tw.div`py-16 lg:py-20 bg-purple-200 relative`;
const Row = tw.div`px-4 sm:px-16 mx-auto flex justify-center items-center relative z-10 flex-col text-center lg:text-left`;
const DecoratorCircleContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`absolute top-0 right-0 w-64 h-64 text-teal-300 transform translate-y-1/2 opacity-25 pointer-events-none fill-current -z-20 translate-x-2/3`}
`;

// Tutorial
const TutorialBackgroundContainer = tw(PrimaryBackgroundContainer)`rounded-t-lg`;
const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Description = tw(SectionDescription)`w-full text-center text-gray-100`;
const LegendNodesContainer = tw.div`grid sm:grid-rows-3 sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 justify-center lg:justify-end mt-8`;
const LegendNode = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 rounded font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline text-gray-100 flex items-center text-left`;
const DecoratorCircle1 = tw(SvgDecoratorCircle)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-500 opacity-5`;
const DecoratorCircle2 = tw(SvgDecoratorCircle)`absolute top-0 right-0 w-80 h-80 transform translate-x-20 -translate-y-64 text-primary-500 opacity-5`;

// Actions
const ActionsBackgroundContainer = tw(PrimaryBackgroundContainer)`rounded-b-lg`;
const ButtonsContainer = tw.div`grid sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-x-8 gap-y-8 justify-center lg:justify-end`;
const Button = tw(
  PrimaryButtonBase
)`w-full lg:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryButton = tw(Button)``;
const SecondaryButton = tw(Button)`text-primary-500 hover:text-primary-600 bg-gray-100 hover:bg-gray-200`;
const DecoratorCircle3 = tw(SvgDecoratorCircle)`absolute bottom-0 right-0 w-80 h-80 transform translate-x-20 translate-y-32 text-primary-500 opacity-5`;
const DecoratorCircle4 = tw(SvgDecoratorCircle)`absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-64 text-primary-500 opacity-5`;

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
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  ) {
    const tutorial = { marginRight: "1rem", minWidth: desiredSize + "px" };
    const unvisited = { marginRight: "1rem", minWidth: desiredSize + "px", backgroundColor: "white" };
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
                    {description && <Description>{description}</Description>}
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
                      <Node style={unvisited}></Node>
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
        <Container css={tw`mb-20 lg:mb-24`}>
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
                  <PrimaryButton>START</PrimaryButton>
                  <SecondaryButton>CLEAR GRID</SecondaryButton>
                  <SecondaryButton>CLEAR WALLS</SecondaryButton>
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
