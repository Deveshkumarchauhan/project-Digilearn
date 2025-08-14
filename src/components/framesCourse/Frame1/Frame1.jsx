import React from "react";
import "./Frame1.css";
import { FaBook, FaProjectDiagram, FaVideo } from "react-icons/fa";
import programmingone from "../../../assets img/programmingone.svg"
export default function Frame1() {
  const videos = [
    { title: "Introduction to Programming", time: "02 : 10" },
    { title: "Understanding Syntax", time: "02 : 50" },
    { title: "Introduction to Programming", time: "02 : 10" },
    { title: "Introduction to Programming", time: "02 : 10" },
    { title: "Introduction to Programming", time: "02 : 10" },
    { title: "Introduction to Programming", time: "02 : 10" },
    { title: "Introduction to Programming", time: "02 : 10" },
  ];

  return (
    <div className="f1-main">
      {/* Left Side */}
      <div className="f1-left">
        <img
          src={programmingone}
          alt="Course"
          className="f1-course-img"
        />

        <h2 className="f1-title">Course Details</h2>

        <div className="f1-info">
          <p><FaBook /> 6 courses materials</p>
          <p><FaProjectDiagram /> 2 Projects</p>
          <p><FaVideo /> 10 Videos</p>
        </div>

        <button className="f1-btn">ENROLL NOW</button>
      </div>

      {/* Right Side */}
      <div className="f1-right">
        <p className="f1-desc">
          Understanding Core Programming Concepts Is Necessary For Starting A<br/>
          Career In Software Development, Data Science And Many More. This Is<br/>
          Your First Step To Becoming A World-class Tech Pro
        </p>

        <h3 className="f1-videos-title"><FaVideo /> Videos</h3>

        <div className="f1-videos-list">
          {videos.map((video, index) => (
            <div key={index} className="f1-video-item">
              <span>{video.title}</span>
              <span>{video.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
