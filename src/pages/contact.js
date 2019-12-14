import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { PageWrapper, SubTitle, TitleComponent, Text } from "../components/basecomponents"
import * as gmail from "../images/gmail.svg";
import * as linkedin from "../images/linkedin.svg";
import * as github from "../images/github.svg";
import * as instagram from "../images/instagram.svg";

const Contact = () => {
  return <Layout>
    <SEO title="Contact" />
    <PageWrapper>
      <TitlesWrapper>
        <TitleComponent text="Contact" noPadding />
        <SubTitle>(aka how to stalk me online)</SubTitle>
      </TitlesWrapper>
      <TextWrapper>
        <ItemWrapper>
          <GmailText>Email</GmailText>
            <ImageWrapper>
              <a href="mailto:jean.nmn.zhang@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image src={gmail} alt="gmail-logo" />
              </a>
            </ImageWrapper>
        </ItemWrapper>
        <ItemWrapper>
          <ContactText>LinkedIn</ContactText>
            <LinkedInWrapper>
              <a href="https://www.linkedin.com/in/jean-zhang/" target="_blank" rel="noopener noreferrer">
                <Image src={linkedin} alt="linkedin-logo" />
              </a>
            </LinkedInWrapper>
        </ItemWrapper>
        <ItemWrapper>
          <ContactText>GitHub</ContactText>
            <ImageWrapper>
              <a href="https://github.com/jean-zhang" target="_blank" rel="noopener noreferrer">
                <Image src={github} alt="github-logo" />
              </a>
            </ImageWrapper>
        </ItemWrapper>
        <ItemWrapper>
          <ContactText>NUWIT</ContactText>
            <ImageWrapper>
              <a href="https://www.instagram.com/nuwomenintech/" target="_blank" rel="noopener noreferrer">
                <Image src={instagram} alt="instagram-logo" />
              </a>
            </ImageWrapper>
        </ItemWrapper>
      </TextWrapper>
    </PageWrapper>
  </Layout>
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  width: 60%;
  text-decoration: none;
  color: black;
  border-bottom: 3px solid rgba(56, 206, 194, 0);
  max-width: 60px;
  :hover {
    border-bottom: 3px solid red;
  }
`;

const ContactText = styled(Text)`
  margin-block-end: 0px;
`;

const GmailText = styled(Text)`
  margin-block-end: 5px;
`;

const Image = styled.img`
  margin-bottom: 0px;
`;

const LinkedInWrapper = styled(ImageWrapper)`
  width: 40%;
`;


export default Contact