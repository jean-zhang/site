import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { TitleComponent, Text, PageWrapper } from "../components/basecomponents"
import * as palogo from "../images/palogo.svg";
import * as bikebuslogo from "../images/bikebus.svg";
import * as gamenight from "../images/game-night.svg";
import * as weatherman from "../images/weatherman.svg";

const role = "ROLE: ";
const date = "DATE: ";
const wil = "WHAT I LEARNED: ";

const PAtext1 = "Full Stack Software Developer Co-op";
const PAtext2 = "January 2019 - August 2019";
const PAtext3 = "As my first professional experience I was able to learn a lot very quickly. Not only were we expected to write full stack code but we also had to learn how to properly test, give input on which libraries to use, as well as frequently consult with the Product Manager, Architect, and DevOps Team.";
const PAlink = "https://w3.poweradvocate.com/products/";

const BBtext1 = "Developer";
const BBtext2 = "September 2019 - December 2019";
const BBtext3 = "Coming into this project I had only cursory knowledge about UI/UX. Within our small team of designers/developers I was able to participate not only in the development but also the dicussions related to how the logo, color palette, and layout would all be handled. Website will be live soon!";

const PAGNtext1= "Developer";
const PAGNtext2= "April 2019";
const PAGNtext3= "This was a project with three other people and we created a small web application for our company's game night. It was the first time I had to apply what I had learned so far on co-op in a different context, in addition to learning about how to set up a full application from scratch.";
const PAGNlink = "https://github.com/jean-zhang/pa-game-night";

const WMtext1= "Developer";
const WMtext2= "April 2019";
const WMtext3= "This was one of my very fist hackathons, and our team decided to try our hand at an IOS App. The idea was to let the user know what clothing/shoes to wear based on their temperature-to-clothing preference. Through this, I gained a very high level knowledge of Swift, XCode, and working within a completely new language.";
const WMlink = "https://github.com/jean-zhang/weather-man";

const Work = () => {
  return <Layout>
    <SEO title="Work" />
    <PageWrapper>
      <TitleComponent text="Work"/>
      {renderFullLength("PowerAdvocate", PAtext1, PAtext2, PAtext3, palogo, false, 100, PAlink)}
      {renderFullLength("BikeBus", BBtext1, BBtext2, BBtext3, bikebuslogo, true, 70)}
      {renderFullLength("PA Game Night", PAGNtext1, PAGNtext2, PAGNtext3, gamenight, false, 100, PAGNlink)}
      {renderFullLength("Weatherman 2.0", WMtext1, WMtext2, WMtext3, weatherman, true, 60, WMlink)}
    </PageWrapper>
  </Layout>
}

function renderFullLength(title, text1, text2, text3, image, flip, widthPer, link) {
  return <ProjectWrapper flip={flip} borderColor={"grey"}>
    <ImageWrapper widthPer={widthPer} flip={flip}>
      <Image src={image} alt={title + "company-logo"} />
    </ImageWrapper>
    <TextWrapper flip={flip}>
      <CompanyTitle>{title}</CompanyTitle>
      <Text>
        <SmallTitles>{role}</SmallTitles>
        {text1}
      </Text>
      <Text>
        <SmallTitles>{date}</SmallTitles>
        {text2}
      </Text>
      <Text>
        <Wrapper>
        <SmallTitles>{wil}</SmallTitles>
        {text3 + " "}
        <ClickWrapper displayNone={!link}>
          Click {` `}
          <SmallTitles>
            <LinkWrapper>
              <Link href={link} target="_blank">here</Link>
            </LinkWrapper>
          </SmallTitles> 
          {` `} to see more.
        </ClickWrapper>
        </Wrapper>
      </Text>
    </TextWrapper>
  </ProjectWrapper>
}

const ProjectWrapper = styled.div`
  background: white;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border: 2px solid white;
  flex-direction: ${props => (props.flip ? "row-reverse": "row")};
  border-left: 5px solid ${props => (props.flip ? "white": "red")};
  border-right: 5px solid ${props => (props.flip ? "red": "white")};
  padding-right: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  width: ${props => (props.widthPer)}%;
  margin-left: ${props => (props.flip ? 40 - 20 : 40)}px;
  margin-right: 50px;
  @media (max-width: 768px) {
    width: 10%;
  }
`;

const SmallTitles = styled.span`
  font-weight: 800;
`;

const CompanyTitle = styled.h3`
  font-family: monospace;
  margin-block-end: 12px;
`;

const TextWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  margin-right: ${props => (props.flip ?`10px` : `20px`)};
  margin-left: ${props => (props.flip ?`20px` : `10px`)};
`;

const ClickWrapper = styled.span`
  display: ${props => (props.displayNone? `none` : `block`)}
`;

const Image = styled.img`
  margin-bottom: 0px;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const LinkWrapper = styled.span`
  color: black;
  border-bottom: 3px solid rgba(56, 206, 194, 0);
  :hover {
    border-bottom: 3px solid red;
  }
`;

const Wrapper = styled.span``;

export default Work