import React from 'react';
import './frameCategory2.css'; // Make sure to update the CSS accordingly
import mentorImage from '../../../assets img/Rectangle 1136.svg'; // Sample mentor image

const mentors = [
  {
    id: 1,
    name: "Ronald Richards",
    title: "UI/UX Designer",
    rating: 4.9,
    students: 2400,
    image: mentorImage,
  },
  {
    id: 2,
    name: "Ronald Richards",
    title: "UI/UX Designer",
    rating: 4.9,
    students: 2400,
    image: mentorImage,
  },
  {
    id: 3,
    name: "Ronald Richards",
    title: "UI/UX Designer",
    rating: 4.9,
    students: 2400,
    image: mentorImage,
  },
  {
    id: 4,
    name: "Ronald Richards",
    title: "UI/UX Designer",
    rating: 4.9,
    students: 2400,
    image: mentorImage,
  },
  {
    id: 5,
    name: "Ronald Richards",
    title: "UI/UX Designer",
    rating: 4.9,
    students: 2400,
    image: mentorImage,
  },
];

const FrameCategory2 = () => {
  return (
    <div className="fc2-container">
      <h2 className="fc2-title">Popular Mentors</h2 >
      <div className="fc2-mentor-list">
        {mentors.map((mentor) => (
          <div className="fc2-mentor-card" key={mentor.id}>
            <img src={mentor.image} alt={mentor.name} className="fc2-image" />
            <h3 className="fc2-name">{mentor.name}</h3>
            <p className="fc2-titles">{mentor.title}</p>
            <hr />
            <div className="fc2-info">
              <span className="fc2-rating">⭐ {mentor.rating}</span>
              <span className="fc2-students">{mentor.students} Students</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameCategory2;
