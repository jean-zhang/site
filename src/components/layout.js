/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ background: `#fafafa` }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <FooterWrapper>
          © {new Date().getFullYear()}, Personally made with <Red>&lt;3</Red>
          {` `}
          </FooterWrapper>
        </footer>
      </div>
    </div>
  )
}

const FooterWrapper = styled.p`
  font-family: monospace;
  font-size: 16px;
`;

const Red = styled.span`
  color: red;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
