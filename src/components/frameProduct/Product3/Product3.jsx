import React from "react";
import "./Product3.css"; // apni css file

const ReviewsSection = () => {
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
      rating: 5,
      text: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
      img: "https://i.pravatar.cc/60?img=2",
    },
    {
      id: 3,
      name: "Mark Doe",
      date: "22nd March, 2024",
      rating: 5,
      text: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
      img: "https://i.pravatar.cc/60?img=3",
    },
  ];

  // ⭐ Function to render stars
  const renderStars = (filled, total = 5) => {
    const stars = [];
    for (let i = 1; i <= total; i++) {
      stars.push(
        <span
          key={i}
          style={{
            color: i <= filled ? "#f5a623" : "#d3d3d3", // gold or gray
            fontSize: "18px",
          }}
        >
          ⭐
        </span>
      );
    }
    return stars;
  };

  const ratings = [
    { stars: 5, percent: "80%" },
    { stars: 4, percent: "10%" },
    { stars: 3, percent: "5%" },
    { stars: 2, percent: "3%" },
    { stars: 1, percent: "2%" },
  ];

  return (
    <div className="reviews-container">
      {/* Left Summary */}
      <div className="reviews-summary">
        <h3>Learner Reviews</h3>
        <div className="rating-score">
          <span className="rating-value">
            ⭐ <b>4.6</b>
          </span>
          <span className="reviews-count">146,951 reviews</span>
        </div>

        <div className="rating-bars">
          {ratings.map((item, index) => (
            <div key={index} className="rating-row">
              <div className="stars">{renderStars(item.stars)}</div>
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
                  <span style={{ color: "#f5a623" }}>⭐</span> {review.rating}
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

export default ReviewsSection;
