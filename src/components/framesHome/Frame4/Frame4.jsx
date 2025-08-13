import React from "react";
import "./Frame4.css";

const testimonials = [
  {
    name: "Michael Wong",
    role: "UI/UX Design Student",
    rating: 4.9,
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial:
      "Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!",
  },
  {
    name: "Avril Song",
    role: "Web Development Student",
    rating: 4.8,
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
    testimonial:
      "Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!",
  },
  {
    name: "Jeane Wood",
    role: "Data Science Student",
    rating: 5.0,
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial:
      "Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!",
  },
];

const StarIcon = () => (
  <svg
    className="star-icon"
    width="16"
    height="16"
    fill="#FFC107"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.848 1.42 8.284L12 18.902l-7.42 4.653L6 15.27 0 9.423l8.332-1.268z" />
  </svg>
);

const Frame4 = () => {
  return (
    <section className="testimonial-container">
      <div className="testimonial-header">
        <div className="line"></div>
        <p className="subtitle">Testimonial</p>
      </div>
      <h2 className="title">Student Testimonial</h2>

      <div className="testimonials-wrapper">
        {testimonials.map(({ name, role, rating, image, testimonial }, idx) => (
          <div key={idx} className="testimonial-card">
            <div className="profile">
              <img src={image} alt={name} className="avatar" />
              <div>
                <p className="name">{name}</p>
                <p className="role">{role}</p>
              </div>
            </div>
            <div className="rating">
              <StarIcon />
              <span className="rating-text">{rating.toFixed(1)}</span>
            </div>
            <p className="testimonial-text">{testimonial}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Frame4;
