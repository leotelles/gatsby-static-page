import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Page 4" />
    <h1>Page 4</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage
