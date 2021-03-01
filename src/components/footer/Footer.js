import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media-wrap">
        <a
          href="mailto:abdel.elsayed18@gmail.com"
          rel="noopener noreferrer"
          className="social-icon-link"
          target="_blank"
          aria-label="mail"
        >
          <i className="far fa-envelope"></i>
        </a>
        <a
          rel="noreferrer"
          className="social-icon-link"
          href="https://www.youtube.com/channel/UCch1FgoG7eS1NeVbgVWTfyQ/videos"
          target="_blank"
          aria-label="Youtube"
        >
          <i className="fab fa-youtube" />
        </a>
        <a
          rel="noreferrer"
          className="social-icon-link"
          href="https://www.instagram.com/"
          target="_blank"
          aria-label="LinkedIn"
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
