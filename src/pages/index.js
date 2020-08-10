import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const DivCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CategoryStyle = styled.div`
  margin: 10px;
  padding: 10px;
  width: 201px;
  height: 255px;
  background: #f1f1f1;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
`

const categories = [
  {
    title: "Roupas",
  },
  {
    title: "Carros",
  },
  {
    title: "Restaurantes",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Categorias</h1>

    <DivCategories>
      {categories.map(category => (
        <CategoryStyle>
          <h3>{category.title}</h3>
          <ul>
            <li>Subcategoria 01</li>
            <li>Subcategoria 02</li>
            <li>Subcategoria 03</li>
            <li>Subcategoria 04</li>
          </ul>
        </CategoryStyle>
      ))}
    </DivCategories>
  </Layout>
)

export default IndexPage
