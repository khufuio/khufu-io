import * as React from "react"

const pageStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  color: "#ffffff",
  textAlign: "center",
  padding: "2rem",
}

const headingStyles = {
  fontSize: "6rem",
  fontWeight: 700,
  marginBottom: "1rem",
}

const subtitleStyles = {
  fontSize: "1.25rem",
  fontWeight: 300,
  color: "#a0aec0",
  marginBottom: "2rem",
}

const linkStyles = {
  color: "#667eea",
  textDecoration: "none",
  fontSize: "1rem",
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>404</h1>
      <p style={subtitleStyles}>Page introuvable</p>
      <a style={linkStyles} href="/">Retour à l'accueil</a>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>404 - Page introuvable</title>
