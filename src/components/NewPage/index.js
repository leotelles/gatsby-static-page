import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NewPage = ({ title, text }) => (
  <Layout>
    <SEO title={title} />
    <h1>{text}</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NewPage
