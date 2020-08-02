import React from "react"

const Footer = () => {
  return (
    <div
      style={{
        margin: `0 auto`,
        marginLeft: 0,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Footer
