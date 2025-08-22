import React, { useState } from "react";
import "./frameCategory.css";
import Rectangle10802 from "../../../assets img/Rectangle 10802.svg";

const FrameCategory = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const courses = Array(9).fill({
    title: "Beginner's Guide to Design",
    author: "Ronald Richards",
    rating: 4.5,
    reviews: 1200,
    hours: "22 Total Hours",
    lectures: "155 Lectures",
    level: "Beginner",
    price: "$149.9",
    image: Rectangle10802,
  });

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="design-stars">
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </div>
    );
  };

  return (
    <div className="design-page-container">
      {/* Sidebar */}
      <aside className="design-sidebar">
        {/* Filter Button on top */}
        <div className="filter-top-button">
          <button className="filter-btn">
            <span className="filter-icon">☰</span> Filter
          </button>
        </div>

        {/* Filters */}
        <div className="design-filter-group">
          <div className="design-filter-heading">
            <h2>Rating</h2>
          </div>
          <hr />
          <div className="rating-stars-filter">
            {["★★★★★", "★★★★☆", "★★★☆☆", "★★☆☆☆", "★☆☆☆☆"].map((stars, i) => (
              <label key={i} className="rating-filter-option">
                <input type="checkbox" />
                <span className="stars">{stars}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="design-filter-group">
          <h2>Number of Chapters</h2>
          <hr />
          {["1–10", "10–15", "15–20", "20–25"].map((range, i) => (
            <label key={i}>
              <input type="checkbox" defaultChecked={range === "15–20"} /> {range}
            </label>
          ))}
        </div>

        <div className="design-filter-group">
          <h2>Price</h2>
          <hr />
          {["Free", "Paid"].map((type, i) => (
            <label key={i}>
              <input type="checkbox" /> {type}
            </label>
          ))}
        </div>

        <div className="design-filter-group">
          <h2>Category</h2>
          <hr />
          {["Design", "Development"].map((cat, i) => (
            <label key={i}>
              <input type="checkbox" /> {cat}
            </label>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="design-main-content">
        <div className="design-main-header">
          <div className="header-left">
            <h1>Design Courses</h1>
            <p className="subtext">All Development Courses</p>
          </div>

          <div className="header-right">
            <label htmlFor="sort">Sort By</label>
            <select id="sort" className="design-sort">
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Top Rated</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="design-grid">
          {courses.map((course, i) => (
            <div key={i} className="design-course-card">
              <img src={course.image} alt="Course" />
              <h3>{course.title}</h3>
              <p className="design-author">By {course.author}</p>
              <div className="design-rating">
                {renderStars(course.rating)}
                <span className="design-rating-text">
                  {course.rating} ({course.reviews} Ratings)
                </span>
              </div>
              <p className="design-details">
                {course.hours}. {course.lectures}. {course.level}
              </p>
              <p className="design-price">{course.price}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="design-pagination">
          <button disabled={selectedPage === 1} onClick={() => setSelectedPage(p => p - 1)}>&lt;</button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setSelectedPage(page)}
              className={selectedPage === page ? "active" : ""}
            >
              {page}
            </button>
          ))}
          <button disabled={selectedPage === 3} onClick={() => setSelectedPage(p => p + 1)}>&gt;</button>
        </div>
      </main>
    </div>
  );
};

export default FrameCategory;
