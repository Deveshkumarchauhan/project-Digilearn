import React from "react";
import "./Product2.css";
import Ellipse5 from "../../../assets img/Ellipse 5.svg"
import graduction from "../../../assets img/graduation-hat-02.svg"
import award from "../../../assets img/award-03.svg"
import play from "../../../assets img/play.svg"
import vector from "../../../assets/Vector.svg"
export default function CoursePage() {
  return (
    <div className="coursePage-wrapper">
      {/* Tabs */}
      <div className="coursePage-tabs">
        <button className="coursePage-tab coursePage-tab-active">Description</button>
        <button className="coursePage-tab">Instructor</button>
        <button className="coursePage-tab">Syllabus</button>
        <button className="coursePage-tab">Reviews</button>
      </div>
      <hr className="hr" />

      {/* Course Description */}
      <section className="coursePage-description">
        <h1>Course Description</h1>
        <p className="para12">
          This interactive e-learning course will introduce you to User
          Experience (UX) design, the art of creating<br/> products and services that
          are intuitive, enjoyable, and user-friendly. Gain a solid foundation
          in UX principles<br></br> and learn to apply them in real-world scenarios
          through engaging modules and interactive exercises.
        </p>

        <h1>Certification</h1>
        <p className="para12">
          At Byway, we understand the significance of formal recognition for
          your hard work and dedication to<br/> continuous learning. Upon successful
          completion of our courses, you will earn a prestigious certification
          that<br/> not only validates your expertise but also opens doors to new
          opportunities in your chosen field.
        </p>
      </section>

      {/* Instructor */}
      <section className="coursePage-instructor">
        <h2>Instructor</h2>
        <h3 className="coursePage-instructor-name">Ronald Richards</h3>
        <p className="coursePage-instructor-role">UI/UX Designer</p>

        <div className="coursePage-instructor-box">
          <img
            src={Ellipse5}
            alt="Instructor"
            className="coursePage-instructor-photo"
          />
          <div className="coursePage-instructor-stats">
            <p><img src={graduction} /> 40,445 Reviews</p>
            <p><img src={award} /> 500 Students</p>
            <p><img src={play} /> 15 Courses</p>
          </div>
        </div>

        <p className="coursePage-instructor-bio">
          With over a decade of industry experience, Ronald brings a wealth of
          practical knowledge to the classroom. He<br/> has played a pivotal role in
          designing user-centric interfaces for renowned tech companies,
          ensuring seamless<br/> and engaging user experiences.
        </p>
      </section>

      {/* Syllabus */}
      <section className="coursePage-syllabus">
        <h2>Syllabus</h2>

        <details className="coursePage-syllabus-item">
          <summary>
           <img src={vector}/>Introduction to UX Design <span>5 Lessons • 1 hour</span>
          
          </summary>
        </details>

        <details className="coursePage-syllabus-item">
          <summary>
            <img src={vector}/> Basics of User-Centered Design <span>5 Lessons • 1 hour</span>
          </summary>
        </details>

        <details className="coursePage-syllabus-item" >
          <summary>
            <img src={vector}/> Elements of User Experience <span>5 Lessons • 1 hour</span>
          </summary>
        </details>

        <details className="coursePage-syllabus-item">
          <summary>
             <img src={vector}/>Visual Design Principles <span>5 Lessons • 1 hour</span>
          </summary>

        
        </details>
         
      </section>
       <hr className="hr" />

    </div>
  );
}
