import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Roupas" />
    <h1>
      Aqui você encontra as melhores lojas de roupas, por preços que cabem no
      seu bolso.
    </h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
