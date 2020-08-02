import React from "react"

const Footer = () => {
  return (
    <div
      style={{
        marginLeft: "0",
        marginRight: "auto",
        width: "100%",
        padding: `0 1.0875rem 1.45rem`,
        bottom: "0",
        position: "absolute",
      }}
    >
      <footer style={{ color: "#6a1b9a" }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Footer
