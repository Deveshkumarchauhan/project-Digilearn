import React from "react";
import "./Product.css"; // import css file
import ellips5 from "../../../assets img/Ellipse 5.svg"
import image4 from "../../../assets img/image 4.svg" 
import { FaFacebookF, FaGithub, FaGoogle, FaXTwitter, FaMicrosoft } from "react-icons/fa6";

export default function CourseCard() {
  return (
    <div className="containerss">
      <div className="courses-cards">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <span>Home </span> &gt; <span>Categories </span> &gt;{" "}
          <span className="active">Introduction to User Experience Design</span>
        </nav>

        {/* Title */}
        <h1 className="title">Introduction to User Experience Design</h1>

        {/* Description */}
        <p className="descriptions">
          This course is meticulously crafted to provide you with a
          foundational understanding of the <br/> principles, methodologies, and tools
          that drive exceptional user experiences in the digital <br/>landscape.
        </p>

        {/* Rating, Hours, Lectures */}
        <div className="details">
          <span className="rating">
            4.6 ★★★★★ <span className="rating-count">(651651 rating)</span>
          </span>
          <span>|</span>
          <span>22 Total Hours</span>
          <span>|</span>
          <span>155 Lectures</span>
          <span>|</span>
          <span>All levels</span>
        </div>

        {/* Instructor */}
        <div className="instructor">
          <img
            src={ellips5}
            alt="Instructor"
            className="profile-img"
          />
          <span>
            Created by <span className="author">Ronal Richards</span>
          </span>
        </div>

        {/* Languages */}
        <div className="languages">🌐 English, Spanish, Italian, German</div>
      </div>

      {/* 👉 New Right Side Box */}
      <div className="coursebox">
        <img
          src={image4}
          alt="Course Preview"
          className="course-img"
        />

        <div className="course-price">
          <span className="new-price">$49.5</span>
          <span className="old-price">$99.5</span>
          <span className="discount">50% Off</span>
        </div>

        <button className="btn add-to-cart">Add To Cart</button>
        <button className="btn buy-now">Buy Now</button>

        {/* Share */}
<div className="share">
  <p>Share</p>
  <div className="share-icons">
    <a href="#" className="share-btn" aria-label="Facebook"><FaFacebookF /></a>
    <a href="#" className="share-btn" aria-label="GitHub"><FaGithub /></a>
    <a href="#" className="share-btn" aria-label="Google"><FaGoogle /></a>
    <a href="#" className="share-btn" aria-label="X (Twitter)"><FaXTwitter /></a>
    <a href="#" className="share-btn" aria-label="Microsoft"><FaMicrosoft /></a>
  </div>
</div>

      </div>
    </div>
  );
}
