import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { PageWrapper, TitleComponent, Text } from "../components/basecomponents"
import * as baby from "../images/baby.jpg";

const About = () => (
  <Layout>
    <SEO title="About" />
    <PageWrapper>
      <TitleComponent text="About"/>
      <ContentWrapper>
        <AllTextWrapper>
          <TextWrapper>
            <Text><Red>Right-Now &gt;</Red>{text}</Text>
          </TextWrapper>
          <TextWrapper>
            <Text><Red>Coming-Up &gt;</Red>{text2}</Text>
          </TextWrapper>
          <TextWrapper>
            <Text><Red>Free-Time &gt;</Red>{text3}</Text>
          </TextWrapper>
        </AllTextWrapper>
        <ImageWrapper>
          <img src={baby} alt="smiling-baby" />
        </ImageWrapper>
      </ContentWrapper>
    </PageWrapper>
  </Layout>
)

const text = " I’m a 21 y.o. (finally haha) software developer and computer science major. I most recently completed a co-op at PowerAdvocate. I’m really excited about learning new technologies and am always willing to try my hand at new things, because who knows, I just might love it!";
const text2 = " I will be starting a co-op at Hubspot in the spring, and I will also be at Facebook this summer — busy, busy!";
const text3 = " If I'm not conjoined to my laptop like I usually am during the school year, I'm usually cooking, hanging out with friends, trying new food places, or besting strangers at Tetris."

const TextWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
`;

const AllTextWrapper = styled.div`
  max-width: 80%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  width: 110%;
  @media (max-width: 768px) {
    width: 80%;
  }
  margin-left: 15px;
`;

const Red = styled.span`
  color: red;
  font-weight: 800;
`;

export default About
