import React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org" style={{ color: "#FFF" }}>
        Gatsby
      </a>
    </footer>
  )
}

export default Footer
