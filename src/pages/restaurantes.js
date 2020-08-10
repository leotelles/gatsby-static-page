import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Restaurantes" />
    <h1>
      Aqui você encontra os melhores restaurantes que servem as melhores
      refeições.
    </h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage
