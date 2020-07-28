import React from "react"
import { Link } from "gatsby"

import Image from "../../components/image"

import LeftMenu from "../../components/LeftMenu"

import { Container, RightContainer } from "./styles"

const Main = () => (
  <Container>
    <LeftMenu />
    <RightContainer>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </RightContainer>
  </Container>
)

export default Main
