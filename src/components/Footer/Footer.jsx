import React from "react";
import "./Footer.css";
import SocialLinks from "../SocialLinks/SocialLinks";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <SocialLinks />
        <p>
          &copy; 2024 All rights reserved | Crafted with passion by{" "}
          <span>Soufiane Tangi</span> | Powered by Coffee & Creativity
        </p>
      </div>
    </footer>
  );
}

// Add this line to export the Footer component as the default export
export default Footer;

