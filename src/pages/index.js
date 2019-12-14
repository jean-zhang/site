import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { PageWrapper, Red } from "../components/basecomponents"
import Typist from 'react-typist'

const IndexPage = () => {
  return <Layout>
    <SEO title="Home" />
    <HomepageWrapper>
      <TextWrapper>
        <Typist cursor={{show: false}} avgTypingDelay={50}>
          <TagLine><Red>&gt;</Red> Hi! I'm Jean,
          <Typist.Delay ms={500} />
          {` `}like the pants
          <Typist.Backspace count={14} delay={300} />
          {` `}a software developer and third year undergrad at Northeastern University. </TagLine>
        </Typist>
      </TextWrapper>
      <ImageWrapper>
        <Image/>
      </ImageWrapper>
    </HomepageWrapper>
  </Layout>
}

const HomepageWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 120px;
  @media (max-width: 768px) {
    padding-top: 10px;
    flex-direction: column;
  }

`;

const ImageWrapper = styled.div`
  width: 80%;
  margin-bottom: 1.45rem;
  @media (max-width: 420px) {
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  width: 200%;
  @media (max-width: 768px) {
    width: 100%;
    height: 35vh
  }
`;

const TagLine = styled.h1`
  font-weight: 600px;
  font-family: monospace;
`;

export default IndexPage
