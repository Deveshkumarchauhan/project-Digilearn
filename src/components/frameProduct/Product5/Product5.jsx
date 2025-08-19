import React from "react";
import "./Product5.css";
import Rectangle1080 from "../../../assets img/Rectangle 1080.svg";
import rating1 from "../../../assets img/ratings (1).svg"; // sirf ek rating bar image

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
    rating: 4,
    reviews: 1200,
    details: "22 Total Hours. 155 Lectures. Beginner",
    price: "$149.9",
    image: Rectangle1080,
  },
  {
    id: 3,
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 3,
    reviews: 1200,
    details: "22 Total Hours. 155 Lectures. Beginner",
    price: "$149.9",
    image: Rectangle1080,
  },
  {
    id: 4,
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 2,
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
                <img
                  src={rating1}
                  alt="rating bar"
                  className="courseCard__star"
                />
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
