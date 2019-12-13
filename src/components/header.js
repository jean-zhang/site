import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import GatsbyLink from "gatsby-link"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderWrapper>
        <Link to="/" style={{ color: `black`, textDecoration: `none`, }}>
          <NameText>
            J<HeaderTextRed>.</HeaderTextRed>ZHANG
          </NameText>
        </Link>
        <HeaderLinkGroup>
          <HeaderLink to="/about/" activeStyle={activeLinkStyle}><HeaderText>About</HeaderText></HeaderLink>
          <HeaderLink to="/work/" activeStyle={activeLinkStyle}><HeaderText>Work</HeaderText></HeaderLink>
          <HeaderLink to="/contact/" activeStyle={activeLinkStyle}><HeaderText>Contact</HeaderText></HeaderLink>
        </HeaderLinkGroup>
    </HeaderWrapper>
  </HeaderContainer>
)

const activeLinkStyle = {
  borderBottom: "3px solid red"
};

const HeaderContainer = styled.header`
  background: #fafafa;
  marginBottom: 1.45rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const NameText = styled.h3`
  color: black;
  margin: 0;
  font-weight: bolder;
  font-family: monospace;
`;

const HeaderText = styled.h4`
  color: black;
  margin: 0;
  font-family: monospace;
`;

const HeaderTextRed = styled.span`
  color: red;
`;

const HeaderLinkGroup = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-between;
  align-self: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const HeaderLink = styled(GatsbyLink)`
  text-decoration: none;
  color: black;
  border-bottom: 3px solid rgba(56, 206, 194, 0);

  :hover {
    border-bottom: 3px solid red;
  }
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
