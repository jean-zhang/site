import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { PageWrapper } from "../components/basecomponents"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomepageWrapper>
      <TagLine>Hi! <UnderlineRed><BlackTextWrapper>I'm Jean</BlackTextWrapper></UnderlineRed>, a software developer and third year student at Northeastern University. </TagLine>
      <ImageWrapper>
        <Image imageName="profile"/>
      </ImageWrapper>
    </HomepageWrapper>
  </Layout>
)

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
  width: 100%;
  margin-bottom: 1.45rem;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 420px) {
    width: 90%;
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
