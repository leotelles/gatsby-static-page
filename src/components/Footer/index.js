import React from "react"

const Footer = () => {
  return (
    <div
      style={{
        marginLeft: "0",
        marginRight: "auto",
        width: "100%",
        padding: "0",
        bottom: "0",
        position: "absolute",
        height: "40px",
      }}
    >
      <footer style={{ color: "#FFF", background: "#6a1b9a" }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" style={{ color: "#FFF" }}>
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export default Footer
