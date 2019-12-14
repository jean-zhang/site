import React from "react"
import styled from "styled-components"

export const TitleComponent = ({ text, noPadding })=> {
    return <TitleWrapper>
            <Title noPadding={noPadding}>&lt;{text}<Red>/</Red>&gt;</Title>
        </TitleWrapper>
}

export const Title = styled.h1`
  font-family: monospace;
  margin-block-end: ${props => (props.noPadding ? `0px` : `0.67em`)}
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  font-family: monospace;
  font-size: 16px;
  line-height: 28px;
  margin-block-end: 0px;
`;

export const SubTitle = styled.p`
  font-family: monospace;
  font-size: 12px;
`;

export const SubHeading = styled.h3``;

export const Red = styled.span`
  color: red;
`;

export const PageWrapper = styled.div`
  padding-top: 20px;
  min-height: 90vh;
`;