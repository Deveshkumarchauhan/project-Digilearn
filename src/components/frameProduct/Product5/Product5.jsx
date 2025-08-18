import React from "react";
import { FaStar } from "react-icons/fa";
import "./Product5.css";

const courses = [
  {
    id: 1,
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    reviews: 1200,
    details: "22 Total Hours. 155 Lectures. Beginner",
    price: "$149.9",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 2,
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    reviews: 1200,
    details: "22 Total Hours. 155 Lectures. Beginner",
    price: "$149.9",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 3,
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    reviews: 1200,
    details: "22 Total Hours. 155 Lectures. Beginner",
    price: "$149.9",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 4,
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    reviews: 1200,
    details: "22 Total Hours. 155 Lectures. Beginner",
    price: "$149.9",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
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
