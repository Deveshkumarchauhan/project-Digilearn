import React from "react";
import "./CartBox.css";
import image3 from "../../../assets img/image 3.svg";

const courses = [
  {
    id: 1,
    title: "Introduction to User Experience Design",
    author: "John Doe",
    rating: 4.6,
    reviews: 250,
    hours: 22,
    lectures: 155,
    level: "All levels",
    price: 45.0,
    image: image3,
  },
  {
    id: 2,
    title: "Introduction to User Experience Design",
    author: "John Doe",
    rating: 4.6,
    reviews: 250,
    hours: 22,
    lectures: 155,
    level: "All levels",
    price: 45.0,
    image:image3,
  },
  {
    id: 3,
    title: "Introduction to User Experience Design",
    author: "John Doe",
    rating: 4.6,
    reviews: 250,
    hours: 22,
    lectures: 155,
    level: "All levels",
    price: 45.0,
    image: image3,
  },
];

const CartBox = () => {
  return (
    <div className="cart-container">
      <h1 className="cart-title">
        Shopping Cart{" "}
        <span className="breadcrumb">
          Categories &gt; Details &gt; <span>Shopping Cart</span>
        </span>
      </h1>

      <p className="course-count">1 Course in cart</p>
      <hr className="hr2" />
      <div className="cart-content">
        <div className="cart-items">
          {courses.map((course) => (
            <div className="cart-item" key={course.id}>
              <img src={course.image} alt={course.title} />
              <div className="cart-info">
                <h3>{course.title}</h3>
                <p className="author">By {course.author}</p>
                <div className="rating">
                  <span>{course.rating}</span>
                  <span className="stars">★★★★★</span>
                  <span className="reviews">({course.reviews} rating)</span>
                </div>
                <p className="details">
                  {course.hours} Total Hours. {course.lectures} Lectures.{" "}
                  {course.level}
                </p>
                <div className="actions">
                  <a href="#">Save for later</a> | <a href="#">Remove</a>
                </div>
              </div>
              <div className="price">${course.price.toFixed(2)}</div>
            </div>
          ))}
        </div>

        <div className="order-details">
          <h3>Order Details</h3>
          <div className="order-row">
            <span>Price</span>
            <span>$300.00</span>
          </div>
          <div className="order-row">
            <span>Discount</span>
            <span className="discount">- $10.00</span>
          </div>
          <div className="order-row">
            <span>Tax</span>
            <span>$20.00</span>
          </div>
          <hr />
          <div className="order-row total">
            <span>Total</span>
            <span>$290.00</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
