import * as React from "react"

const pageStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  margin: 0,
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  color: "#ffffff",
  textAlign: "center",
  padding: "2rem",
}

const logoStyles = {
  width: "120px",
  height: "120px",
  marginBottom: "2rem",
}

const headingStyles = {
  fontSize: "3rem",
  fontWeight: 700,
  marginBottom: "1rem",
  letterSpacing: "0.1em",
}

const subtitleStyles = {
  fontSize: "1.25rem",
  fontWeight: 300,
  color: "#a0aec0",
  marginBottom: "2rem",
}

const dividerStyles = {
  width: "60px",
  height: "3px",
  background: "linear-gradient(90deg, #667eea, #764ba2)",
  border: "none",
  marginBottom: "2rem",
}

const contactStyles = {
  fontSize: "1rem",
  color: "#a0aec0",
}

const linkStyles = {
  color: "#667eea",
  textDecoration: "none",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>KHUFU</h1>
      <hr style={dividerStyles} />
      <p style={subtitleStyles}>Site en construction</p>
      <p style={contactStyles}>
        Contactez-nous : <a style={linkStyles} href="mailto:hello@khufu.io">hello@khufu.io</a>
      </p>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Khufu - Site en construction</title>
