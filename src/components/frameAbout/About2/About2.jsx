import React from "react";
import "./About2.css";

import tutorial1 from "../../../assets img/tutorial1.svg";
import tutorial2 from "../../../assets img/tutorial2.svg";
import tutorial3 from "../../../assets img/tutorial3.svg";
import tutorial4 from "../../../assets img/tutorial4.svg";

const features = [
  {
    title: "Code Reviews",
    description:
      "We don’t just give you assignments, we review your solutions and give you insightful feedbacks on your code to enhance and reinforce your understanding.",
    img: tutorial2,
  },
  {
    title: "Mentorship",
    description:
      "Even without being in a physical class, we make it possible for our students to ask questions and get guidance through our seasoned and qualified mentors.",
    img: tutorial3,
  },
  {
    title: "Live Code Editor",
    description:
      "Whether at home or on the go, you can still follow your classes and practice with our easy-to-use code editor. It works on both the web and mobile app.",
    img: tutorial1,
  },
  {
    title: "Community Forums",
    description:
      "Just because you are learning online doesn’t mean you have to be all alone. With our discussion forum, you can share your opinions with other students and even make friends.",
    img: tutorial4,
  },
];

const About2 = () => {
  return (
    <div className="about2-section">
      <h2 className="about2-title">Features Include</h2>

      <div className="about2-grid">
        {features.map((feature, index) => (
          <div className="about2-card" key={index}>
            <img src={feature.img} alt={feature.title} />
            <h3 className="about2-heading">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About2;
