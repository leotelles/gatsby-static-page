import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Categorias</h1>

    <ul>
      <li>
        <Link to="/roupas">Roupas</Link>
      </li>
      <li>
        <Link to="/carros">Carros</Link>
      </li>
      <li>
        <Link to="/restaurantes">Restaurantes</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
