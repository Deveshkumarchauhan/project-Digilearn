import React from 'react';
import './frameCategory3.css';
import courseImage from '../../../assets img/Rectangle 1080.svg'; // Replace with your actual image path

const courses = [
  {
    id: 1,
    title: "Beginner’s Guide to Design",
    instructor: "Ronald Richards",
    rating: 4.9,
    ratingsCount: 1200,
    duration: "22 Total Hours",
    lectures: 155,
    level: "Beginner",
    price: 149.9,
    image: courseImage,
  },
  {
    id: 2,
    title: "Beginner’s Guide to Design",
    instructor: "Ronald Richards",
    rating: 4.9,
    ratingsCount: 1200,
    duration: "22 Total Hours",
    lectures: 155,
    level: "Beginner",
    price: 149.9,
    image: courseImage,
  },
  {
    id: 3,
    title: "Beginner’s Guide to Design",
    instructor: "Ronald Richards",
    rating: 4.9,
    ratingsCount: 1200,
    duration: "22 Total Hours",
    lectures: 155,
    level: "Beginner",
    price: 149.9,
    image: courseImage,
  },
  {
    id: 4,
    title: "Beginner’s Guide to Design",
    instructor: "Ronald Richards",
    rating: 4.9,
    ratingsCount: 1200,
    duration: "22 Total Hours",
    lectures: 155,
    level: "Beginner",
    price: 149.9,
    image: courseImage,
  }
];

const FrameCategory3 = () => {
  return (
    <div className="fc3-container">
      <h2 className="fc3-heading">Featured Courses</h2>
      <div className="fc3-grid">
        {courses.map((course) => (
          <div className="fc3-card" key={course.id}>
            <img src={course.image} alt={course.title} className="fc3-image" />
            <div className="fc3-content">
              <h3 className="fc3-title">{course.title}</h3>
              <p className="fc3-instructor">By {course.instructor}</p>
              <div className="fc3-rating">
                <span className="fc3-stars">★★★★★</span>
                <span className="fc3-rating-count">
                  <strong>({course.ratingsCount} Ratings)</strong>
                </span>
              </div>
              <p className="fc3-details">
                {course.duration}. {course.lectures} Lectures. {course.level}
              </p>
              <p className="fc3-price">${course.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameCategory3;
