import React from "react";
import { FaStar } from "react-icons/fa";
import "./Product5.css";
import Rectangle1080 from "../../../assets img/Rectangle 1080.svg";

const courses = [
  {
    id: 1,
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    reviews: 1200,
    details: "22 Total Hours. 155 Lectures. Beginner",
    price: "$149.9",
    image: Rectangle1080,
  },
  {
    id: 2,
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    reviews: 1200,
    details: "22 Total Hours. 155 Lectures. Beginner",
    price: "$149.9",
    image: Rectangle1080,
  },
  {
    id: 3,
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    reviews: 1200,
    details: "22 Total Hours. 155 Lectures. Beginner",
    price: "$149.9",
    image: Rectangle1080,
  },
  {
    id: 4,
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    reviews: 1200,
    details: "22 Total Hours. 155 Lectures. Beginner",
    price: "$149.9",
    image: Rectangle1080,
  },
];

const Product5 = () => {
  return (
    <div className="coursesSection">
      <h2 className="coursesSection__title">More Courses Like This</h2>

      <div className="coursesSection__list">
        {courses.map((course) => (
          <div key={course.id} className="courseCard">
            <img
              src={course.image}
              alt={course.title}
              className="courseCard__image"
            />

            <div className="courseCard__content">
              <h3 className="courseCard__title">{course.title}</h3>
              <p className="courseCard__author">By {course.author}</p>

              <div className="courseCard__rating">
                {Array(course.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="courseCard__star" />
                  ))}
                <span className="courseCard__reviews">
                  <b>({course.reviews} Ratings)</b>
                </span>
              </div>

              <p className="courseCard__details">{course.details}</p>
              <p className="courseCard__price">{course.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product5;
