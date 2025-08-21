import React from "react";
import { FaSearch } from "react-icons/fa";
import "./About1.css";

import aboutus from "../../../assets img/aboutus 1.svg";

const About1 = () => {
  return (
    <section className="about-section">
      {/* Left Section */}
      <div className="about-text">
        <h2>
          About <span className="pink">Stack</span>
          <span className="blue">Junior</span>
        </h2>
        <p>
          Is an ed-tech platform that trains kids and teenagers in programming
          and other tech skills so as to prepare them for the opportunities of
          the future.
        </p>
        <button className="explore-btn">
          <FaSearch className="icon" /> Explore
        </button>
      </div>

      {/* Right Section */}
      <div className="about-image">
        <img
          src={aboutus}
          alt="Puzzle Illustration"
        />
      </div>
    </section>
  );
};

export default About1;
