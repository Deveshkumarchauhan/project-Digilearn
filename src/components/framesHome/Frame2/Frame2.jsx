import React from 'react';
import './Frame2.css';

// Updated asset imports with safe file names
import Image from '../../../assets/image.svg';
import Vector3 from '../../../assets/vector3.svg';
import ArrowRight from '../../../assets/arrowRight.svg';
import FifteenPlus from '../../../assets/fifteenPlus.svg';
import FortyFivePlus from '../../../assets/fortyFivePlus.svg';
import NinetyEight from '../../../assets/ninetyEight.svg';
import HundredK from '../../../assets/hundredK.svg';

const Frame2 = () => {
  return (
    <div className="frame48095530-container">
      <div className="frame48095530-frame48095530">

        {/* Top Section */}
        <div className="frame48095530-frame48095533">
          <img
            src={Image}
            alt="E-Learning Illustration"
            className="frame48095530-image"
          />

          <div className="frame48095530-frame48095528">
            <div className="frame48095530-frame48095520">
              <div className="frame48095530-frame48095519">
                <img
                  src={Vector3}
                  alt="Decorative Line"
                  className="frame48095530-vector2"
                />
                <span className="frame48095530-text10">About us</span>
              </div>
              <span className="frame48095530-text11">
                E-Learning Platform for Digital Skills
              </span>
            </div>

            <div className="frame48095530-frame48095559">
              <span className="frame48095530-text12">
                Empower yourself with the knowledge and skills gained through online education! The key to your future!
                Empower yourself with the knowledge and skills gained through online education! The key to your future!
              </span>

              <div className="frame48095530-frame4000">
                <span className="frame48095530-text13">Learn more</span>
                <img
                  src={ArrowRight}
                  alt="Arrow Right"
                  className="frame48095530-arrow-right"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="frame48095530-frame48095536">

          <div className="frame48095530-frame48095534">
            <img src={FifteenPlus} alt="15+ Years" className="frame48095530-text14" />
            <span className="frame48095530-text15">Years of experience</span>
          </div>

          <div className="frame48095530-frame48095538">
            <img src={HundredK} alt="100K Students" className="frame48095530-text16" />
            <span className="frame48095530-text17">Students worldwide</span>
          </div>

          <div className="frame48095530-frame48095539">
            <img src={FortyFivePlus} alt="45+ Subjects" className="frame48095530-text18" />
            <span className="frame48095530-text19">Class subjects</span>
          </div>

          <div className="frame48095530-frame48095540">
            <img src={NinetyEight} alt="98% Satisfaction" className="frame48095530-text20" />
            <span className="frame48095530-text21">Student satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
