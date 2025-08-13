// src/components/Frame3.jsx
import React from 'react';
import './Frame3.css';

import Rectangle1 from '../../../assets/Rectangle 1461.svg';
import Rectangle2 from '../../../assets/Rectangle 1461 (1).svg';
import Rectangle3 from '../../../assets/Rectangle 1461 (2).svg';
import Rectangle4 from '../../../assets/Rectangle 1461 (3).svg';

const courses = [
  {
    title: "Introduction to Design System in Figma",
    lessons: "16 Lesson",
    weeks: "16 Week",
    price: "$350",
    rating: "4.9",
    image: Rectangle1,
  },
  {
    title: "Introduction to Design Thinking Framework",
    lessons: "17 Lesson",
    weeks: "16 Week",
    price: "$360",
    rating: "4.7",
    image: Rectangle2,
  },
  {
    title: "Design Principle and Fundamentals for UI Designer",
    lessons: "15 Lesson",
    weeks: "16 Week",
    price: "$340",
    rating: "4.8",
    image: Rectangle3,
  },
  {
    title: "Designing Responsive Dashboard for Fintech in Figma",
    lessons: "19 Lesson",
    weeks: "16 Week",
    price: "$380",
    rating: "5.0",
    image: Rectangle4,
  },
];

const Frame3 = () => {
  return (
    <div className="courses-container">
      <div className="tabs-heading">
        <div className="subtitle">Our Class</div>
        <div className="title">Best selling class</div>
        
      </div>

      <div className="tab-wrapper">
        <div className="tab active">UI/UX Design</div>
        <div className="tab">Web Development</div>
        <div className="tab">Data Science</div>
      </div>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img
              src={course.image}
              alt={`Course ${index + 1}`}
              className="course-image"
            />
            <div className="course-details">
              <div className="course-title">{course.title}</div>
              <div className="course-info">
                <span>{course.lessons}</span>
                <span>{course.weeks}</span>
              </div>
              <div className="price-rating">
                <span className="price">{course.price}</span>
                <span className="rating">
                  <span role="img" aria-label="star">⭐</span> {course.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-btn-container">
        <button className="view-all-btn">View all class →</button>
      </div>
    </div>
  );
};

export default Frame3;
