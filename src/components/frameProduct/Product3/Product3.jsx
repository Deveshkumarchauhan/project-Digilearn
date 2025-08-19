import React from "react";
import "./Product3.css"; // apni css file
import icon from "../../../assets img/icon.svg";
import rating1 from "../../../assets img/ratings (1).svg";
import rating2 from "../../../assets img/ratings (2).svg";
import rating3 from "../../../assets img/ratings (3).svg";
import rating4 from "../../../assets img/ratings (4).svg";
import rating5 from "../../../assets img/ratings (5).svg";

const Product3 = () => {
  const reviews = [
    {
      id: 1,
      name: "Mark Doe",
      date: "22nd March, 2024",
      rating: 5,
      text: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
      img: "https://i.pravatar.cc/60?img=1",
    },
    {
      id: 2,
      name: "Mark Doe",
      date: "22nd March, 2024",
      rating: 4,
      text: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
      img: "https://i.pravatar.cc/60?img=2",
    },
    {
      id: 3,
      name: "Mark Doe",
      date: "22nd March, 2024",
      rating: 3,
      text: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
      img: "https://i.pravatar.cc/60?img=3",
    },
  ];

  // ✅ Ratings data with SVGs
  const ratings = [
    { stars: 1, percent: "80%", image: rating1 },
    { stars: 2, percent: "10%", image: rating2 },
    { stars: 3, percent: "5%", image: rating3 },
    { stars: 4, percent: "3%", image: rating4 },
    { stars: 5, percent: "2%", image: rating5 },
  ];

  // ✅ Map review.rating to correct image
  const getRatingImage = (rating) => {
    switch (rating) {
      case 1: return rating1;
      case 2: return rating2;
      case 3: return rating3;
      case 4: return rating4;
      case 5: return rating5;
      default: return rating5;
    }
  };

  return (
    <div className="reviews-container">
      {/* Left Summary */}
      <div className="reviews-summary">
        <h3>Learner Reviews</h3>
        <div className="rating-score">
          <span className="rating-value">
            <img src={icon} alt="icon" /> <b>4.6</b>
          </span>
          <span className="reviews-count">146,951 reviews</span>
        </div>

        <div className="rating-bars">
          {ratings.map((item, index) => (
            <div key={index} className="rating-row">
              <div className="stars">
                <img src={item.image} alt={`${item.stars} stars`} />
              </div>
              <span className="percent">{item.percent}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Reviews */}
      <div className="reviews-list">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="review-header">
              <img src={review.img} alt={review.name} className="review-img" />
              <div>
                <h4>{review.name}</h4>
                <div className="review-meta">
                  <img
                    src={icon}
                    alt={`${review.rating} stars`}
                    style={{ height: "20px" }}
                  />
                  <span className="review-date">
                    Reviewed on {review.date}
                  </span>
                </div>
              </div>
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}

        <button className="view-more">View more Reviews</button>
      </div>
    </div>
  );
};

export default Product3;
