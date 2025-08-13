import React from "react";
import Vector2 from "../../../assets/vector 2.svg";
import Person from "../../../assets/Person.svg";
import MonitorPlay from "../../../assets/MonitorPlay.svg";
import LockKeyOpen from "../../../assets/LockKeyOpen.svg";
import Certificate from "../../../assets/Certificate.svg";
import ArrowRight from "../../../assets/ArrowRight.svg";
import "./Frame1.css"

const Frame1 = () => {
  return (
    <div className="frame48095526-container">
      <div className="frame48095526-frame48095526">
        <div className="frame48095526-frame48095520">
          <div className="frame48095526-frame48095519">
            <img src={Vector2} alt="Decorative Line" className="frame48095526-vector2" />
            <span className="frame48095526-text10">Why choose us</span>
          </div>
          <span className="frame48095526-text11">Best Learning Experience</span>
        </div>

        <div className="frame48095526-frame48095525">
          <div className="feature-card">
            <img src={Person} alt="Expert instructor icon" />
            <div className="feature-card-title">Expert Instructor</div>
            <div className="feature-card-desc">
              Empower yourself with the knowledge and skills gained...
            </div>
            <a className="learn-more" href="#">
              Learn more <img src={ArrowRight} alt="Arrow right" />
            </a>
          </div>

          <div className="feature-card">
            <img src={MonitorPlay} alt="Interactive learning icon" />
            <div className="feature-card-title">Interactive Learning</div>
            <div className="feature-card-desc">
              Empower yourself with the knowledge and skills gained...
            </div>
            <a className="learn-more" href="#">
              Learn more <img src={ArrowRight} alt="Arrow right" />
            </a>
          </div>

          <div className="feature-card">
            <img src={LockKeyOpen} alt="Lifetime access icon" />
            <div className="feature-card-title">Lifetime Access</div>
            <div className="feature-card-desc">
              Empower yourself with the knowledge and skills gained...
            </div>
            <a className="learn-more" href="#">
              Learn more <img src={ArrowRight} alt="Arrow right" />
            </a>
          </div>

          <div className="feature-card">
            <img src={Certificate} alt="Verified certificate icon" />
            <div className="feature-card-title">Verified Certificate</div>
            <div className="feature-card-desc">
              Empower yourself with the knowledge and skills gained...
            </div>
            <a className="learn-more" href="#">
              Learn more <img src={ArrowRight} alt="Arrow right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
