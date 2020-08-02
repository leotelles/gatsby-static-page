import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "./styles.css"

import Header from "../Header"
import LeftMenu from "../LeftMenu"
import Footer from "../Footer"

const Layout = ({ children }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: left;
    justify-content: left;
    height: 490px;
  `
  const RightContainer = styled.div`
    padding-top: 20px;
    padding-left: 30px;
    margin: 0;
    min-width: 300px;
    width: calc(100% - 260px);
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    background: #ce93d8;
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
      <Container>
        <LeftMenu />
        <RightContainer>{children}</RightContainer>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
