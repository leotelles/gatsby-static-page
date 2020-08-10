import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Carros" />
    <h1>
      Aqui você encontra as melhores oficinas, pelos melhores preços de
      serviços.
    </h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
