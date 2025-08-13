import React from "react";
import "./Frame.css";
import Vector from "../../assets/Vector 1.svg";
import Ellipse1134 from "../../assets/Ellipse 1134.svg";
import Ellipse1136 from "../../assets/Ellipse 1136.svg";
import Ellipse1137 from "../../assets/Ellipse 1137.svg";
import Ellipse1138 from "../../assets/Ellipse 1138.svg";
import Rectangle1455 from "../../assets/Rectangle 1455.svg";
import Ellipse1139 from "../../assets/Ellipse 1139.svg";
import Ellipse1139_1 from "../../assets/Ellipse 11391.svg";
import FrameImg from "../../assets/Frame 48095514.svg"; 
import GoogleLogo from "../../assets/Google Logotype.svg";
import CanvaLogo from "../../assets/Canva Logotype.svg";
import AmazonLogo from "../../assets/Amazon.svg";
import SketchLogo from "../../assets/Sketch Logotype.svg";

const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="div-2">
          <p className="text-wrapper">Master Digital Skills with Ease!</p>
          <p className="p">
            Unlock Digital Mastery Effortlessly! Explore and enhance your skills
            with our user-friendly platform.
          </p>
          <div className="div-3">
            <img className="vector" src={Vector} alt="Vector icon" />
            <div className="div-4">
              <div className="text-wrapper-2">Total students</div>
              <div className="div-5">
                <img className="img" src={Ellipse1134} alt="Student 1" />
                <img className="img" src={Ellipse1136} alt="Student 2" />
                <img className="img" src={Ellipse1137} alt="Student 3" />
                <img className="img" src={Ellipse1138} alt="Student 4" />
                <img className="img" src={FrameImg} alt="Additional frame" />
              </div>
            </div>
          </div>

          <div className="div-6">
            <div className="div-wrapper-2">
              <div className="text-wrapper-4">Start learning</div>
            </div>
            <div className="div-wrapper-3">
              <div className="text-wrapper-5">Learn more</div>
            </div>
          </div>
        </div>

        <div className="div-7">
          <div className="trusted-section">
            <h2>Trusted by</h2>
            <div className="logo-container">
              <div className="logo-box">
                <img src={GoogleLogo} alt="Google Logo" />
              </div>
              <div className="logo-box">
                <img src={CanvaLogo} alt="Canva Logo" />
              </div>
              <div className="logo-box">
                <img src={AmazonLogo} alt="Amazon Logo" />
              </div>
              <div className="logo-box">
                <img src={SketchLogo} alt="Sketch Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="rectangle" src={Rectangle1455} alt="Background card" />

      <div className="div-8">
        <div className="text-wrapper-6">Certified Instructor</div>
        <div className="div-9">
          <img
            className="ellipse-2"
            src={Ellipse1139_1}
            alt="Instructor Donald Robert"
          />
          <div className="div-10">
            <div className="text-wrapper-7">Donald Robert</div>
            <div className="text-wrapper-8">UI/UX Design</div>
          </div>
        </div>
        <div className="div-9">
          <img
            className="ellipse-2"
            src={Ellipse1139}
            alt="Instructor John White"
          />
          <div className="div-10">
            <div className="text-wrapper-7">John White</div>
            <div className="text-wrapper-8">Web Development</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
