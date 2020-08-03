import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "./styles.css"

import Header from "../Header"
import LeftMenu from "../LeftMenu"
import Footer from "../Footer"

const Layout = ({ children }) => {
  const Wrapper = styled.div`
    background-color: #f3e5f5;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
  `
  const FooterDiv = styled.div`
    background-color: #6a1b9a;
    bottom: 0;
    width: 100%;
    height: 60px;
    color: #fff;
  `

  const LeftDiv = styled.div`
    background-color: #e1bee7;
    width: 256px;
    min-width: 260px;
    min-height: 100vh;
    float: left;
    display: none;

    @media screen and (min-width: 700px) {
      display: block;
    }
  `

  const RightDiv = styled.div`
    background-color: #f3e5f5;
    min-height: 100vh;
    width: 100%;
  `

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Wrapper>
        <LeftDiv>
          <LeftMenu />
        </LeftDiv>
        <RightDiv>{children}</RightDiv>
      </Wrapper>
      <FooterDiv>
        <Footer />
      </FooterDiv>
    </>
  )
}

export default Layout
