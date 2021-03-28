import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media-wrap">
        <a
          href="https://www.facebook.com/Amiras-kitchen-111399651005120"
          rel="noopener noreferrer"
          className="social-icon-link"
          target="_blank"
          aria-label="facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          rel="noreferrer"
          className="social-icon-link"
          href="https://www.youtube.com/channel/UCMey3TlNUMLNPUVFXwaK-gA"
          target="_blank"
          aria-label="Youtube"
        >
          <i className="fab fa-youtube" />
        </a>
        <a
          rel="noreferrer"
          className="social-icon-link"
          href="https://www.instagram.com/food_by_amiraelsayed/"
          target="_blank"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <small className="website-rights">Amira's Kitchen © 2021</small>
      </div>
    </div>
  );
}

export default Footer;
