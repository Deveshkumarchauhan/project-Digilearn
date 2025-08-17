import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/Logo.svg";
import Vector from "../../assets/Vector.svg";
import ShoppingBag from "../../assets/ShoppingBag.svg";
import MagnifyingGlass from "../../assets/MagnifyingGlass.svg";
// import ContactUs from "../compo"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Add search logic here (e.g., API call or filtering)
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={Logo} alt="Company Logo" className="navbar-logo" />
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="navbar-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <ul className={`navbar-links ${isMenuOpen ? "navbar-links--open" : ""}`}>
          <li>
            <a href="/about" className="navbar-link">
              About us
            </a>
          </li>
          <li className="navbar-dropdown">
            <button
              className="navbar-link navbar-dropdown-toggle"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-label="Toggle class dropdown"
            >
              Our Class
              <img src={Vector} alt="Dropdown Arrow" className="navbar-caret" />
            </button>
            {isDropdownOpen && (
              <ul className="navbar-dropdown-menu">
                <li>
                  <a href="/class1" className="navbar-dropdown-item">
                    Class 1
                  </a>
                </li>
                <li>
                  <a href="/class2" className="navbar-dropdown-item">
                    Class 2
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/blog" className="navbar-link">
              Blog
            </a>
          </li>
          <li>
            <a href="/contactUs" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
        <div className={`navbar-actions ${isMenuOpen ? "navbar-actions--open" : ""}`}>
          <img
            src={ShoppingBag}
            alt="Shopping Cart"
            className="navbar-icon"
            aria-label="View cart"
          />
          <div className="navbar-search">
            <img
              src={MagnifyingGlass}
              alt="Search"
              className="navbar-search-icon"
              aria-label="Search"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search"
              className="navbar-search-input"
              aria-label="Search the site"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);