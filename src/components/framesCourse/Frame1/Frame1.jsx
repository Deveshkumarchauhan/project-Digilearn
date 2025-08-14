import React, { useState } from "react";
import "./Frame1.css";
import { FaBook, FaDollarSign, FaVideo, FaChevronDown } from "react-icons/fa";
import programmingone from "../../../assets img/programmingone.svg";

export default function Frame1() {
  const [showVideos, setShowVideos] = useState(false);
  const [showFreetext, setShowFreetext] = useState(false);

  const videos = [
    { title: "Introduction to Programming", time: "02 : 10" },
    { title: "Understanding Syntax", time: "02 : 50" },
    { title: "Variables and Data Types", time: "03 : 20" },
    { title: "Control Structures", time: "04 : 00" },
    { title: "Functions in Depth", time: "05 : 10" },
    { title: "Object-Oriented Basics", time: "06 : 15" },
    { title: "Project Demo", time: "07 : 40" },
  ];

  const freeText = [...videos];

  return (
    <div className="f1-main">
      {/* Left Side */}
      <div className="f1-left">
        <img src={programmingone} alt="Course" className="f1-course-img" />

        <h2 className="f1-title">Course Details</h2>

        <div className="f1-info">
          <p>
            <FaBook /> 6 course materials
          </p>
          <p>
            <FaVideo /> 10 Videos
          </p>
          <p>
            <FaDollarSign /> 2.7 prize
          </p>
        </div>

        <button className="f1-btn">ENROLL NOW</button>
      </div>

      {/* Right Side */}
      <div className="f1-right">
        <p className="f1-desc">
          Understanding Core Programming Concepts Is Necessary For Starting A
          <br />
          Career In Software Development, Data Science And Many More. This Is
          <br />
          Your First Step To Becoming A World-class Tech Pro
        </p>

        {/* Video Input */}
        <div className="f1-input-wrapper" style={{ marginLeft: "140px" }}>
          <FaVideo className="video-icon" />
          <input
            type="text"
            className="video-input"
            value="Videos"
            readOnly
            onClick={() => setShowVideos(!showVideos)}
          />
          <FaChevronDown
            className={`arrow-icon ${showVideos ? "rotate" : ""}`}
          />
        </div>

        {/* Free Text Input */}
        <div className="f1-input-wrapper" style={{ marginLeft: "140px" }}>
          <FaVideo className="video-icon" />
          <input
            type="text"
            className="video-input"
            value="Free Text"
            readOnly
            onClick={() => setShowFreetext(!showFreetext)}
          />
          <FaChevronDown
            className={`arrow-icon ${showFreetext ? "rotate" : ""}`}
          />
        </div>

        {/* Dropdown list - Videos */}
        {showVideos && (
          <div className="f1-videos-list" style={{ marginLeft: "140px" }}>
            {videos.map((video, index) => (
              <div key={index} className="f1-video-item">
                <span>{video.title}</span>
                <span>{video.time}</span>
              </div>
            ))}
          </div>
        )}

        {/* Dropdown list - Free Text */}
        {showFreetext && (
          <div className="f1-videos-list" style={{ marginLeft: "140px" }}>
            {freeText.map((video, index) => (
              <div key={index} className="f1-video-item">
                <span>{video.title}</span>
                <span>{video.time}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
