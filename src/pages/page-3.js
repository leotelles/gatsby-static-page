import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page 3" />
    <h1>Page 3</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
