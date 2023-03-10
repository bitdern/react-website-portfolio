import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Get in touch with me to learn more!
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Reach out!</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact me</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              ACN <i className="fa-solid fa-bolt" />
            </Link>
          </div>
          <small className="website-rights">ACN 2023</small>
          <div className="social-icons">
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin" />
            </Link>
            <Link
              className="social-icon-link github"
              to="/"
              target="_blank"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
