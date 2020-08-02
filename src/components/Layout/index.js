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
  `
  const RightContainer = styled.div`
    margin-right: 0px;
    margin-left: auto;
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
