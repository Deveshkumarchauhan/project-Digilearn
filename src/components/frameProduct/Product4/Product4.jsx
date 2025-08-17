import React, { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Product4.css"; // CSS file import karna na bhoolna
import ri from "../../../assets img/ri.svg"

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Designer",
    image: "https://i.pravatar.cc/150?img=5",
    feedback:
      "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Developer",
    image: "https://i.pravatar.cc/150?img=3",
    feedback:
      "The lessons are clear, practical, and directly applicable. I gained so much confidence after completing the course!",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=7",
    feedback:
      "Amazing platform! The interactive content and projects helped me improve my design and coding skills tremendously.",
  },
  {
    id: 4,
    name: "Michael Lee",
    role: "Full Stack Engineer",
    image: "https://i.pravatar.cc/150?img=10",
    feedback:
      "Great teachers and practical exercises. I loved the way they explained concepts step by step!",
  },
];

const Product4 = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonial-section">
      {/* Title */}
      <h2 className="title">
        What Our Customer Say <br /> About Us
      </h2>

      {/* Testimonials */}
      <div className="slider-container">
        {testimonials.slice(index, index + 3).map((item) => (
          <div key={item.id} className="card">
            <img src={ri} className="quote-icon" />
            <p className="feedback">"{item.feedback}"</p>
            <div className="profile">
              <img src={item.image} alt={item.name} className="avatar" />
              <div>
                <h3 className="name">{item.name}</h3>
                <p className="role">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="buttons">
        <button className="nav-btn" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="nav-btn" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Product4;
