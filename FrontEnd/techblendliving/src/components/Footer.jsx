import React from "react";

export function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    marginTop:"0",
    padding: "0 0",
   
    bottom: "0",
    width: "100%",
    textAlign: "center",
    zIndex: "1000", 
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "10px", // Adjust the margin as needed
  };

  const linkStyle = {
    color: "#fff",
    marginRight: "10px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        © TechBlendLiving
        <div>
          <a href="https://m.magicbricks.com/mbs/Sitemap.html" style={linkStyle}>
            Sitemap<span></span>
          </a>
          <a href="https://m.magicbricks.com/mbs/about.html" style={linkStyle}>
            About Us
          </a>
          <a href="https://property.magicbricks.com/terms/terms.html" style={linkStyle}>
            Terms & Conditions<span></span>
          </a>
          <a href="https://m.magicbricks.com/mbs/privacy.html" style={linkStyle}>
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
