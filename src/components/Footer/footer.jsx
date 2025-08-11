import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../../assets/Logo.svg"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2 className="logo">
          <span className="dot-logo"><img src={logo}/></span> Digilearn
        </h2>
        <p className="para1">
  Unlock Digital Mastery Effortlessly!<br />
  Explore and enhance your skills<br />
  with our user-friendly platform.
</p>

      </div>

      <div className="footer-section">
        <h3>Quick links</h3>
        <ul>
          <li>About us</li>
          <li>Our Class</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Resources</h3>
        <ul>
          <li>Support</li>
          <li>Privacy policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Social media</h3>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
