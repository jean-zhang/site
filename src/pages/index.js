import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { PageWrapper } from "../components/basecomponents"
import Typist from 'react-typist'

const IndexPage = () => {
  const [typingDone, setTypingDone] = React.useState(false);
  return <Layout>
    <SEO title="Home" />
    <HomepageWrapper>
      <TextWrapper>
        <Typist cursor={{show: false}} avgTypingDelay={50}>
          <TagLine>Hi! <UnderlineRed><BlackTextWrapper>I'm Jean</BlackTextWrapper></UnderlineRed>,
          a software developer and third year student at Northeastern University. </TagLine>
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
  }
`;

const TagLine = styled.h1`
  font-weight: 600px;
  font-family: monospace;
`;

const UnderlineRed = styled.span`
  color: red;
  text-decoration: underline;
`;

const BlackTextWrapper = styled.span`
  color: black;
`;

export default IndexPage
