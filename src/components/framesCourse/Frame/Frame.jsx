import React from "react";
import "./Frame.css";
import vector from "../../../assets img/Vector.svg"
import vector2 from "../../../assets img/Vector (1).svg"

const Frame = () => {
 return (
    <>
      <div className="course-infos">
      <h1>Introduction to<br/>Programming</h1>
      <p>
        <span className="icon"><img src={vector}/> Duration : 3 months &nbsp; | &nbsp;</span>
        <span className="icon"><img src={vector2}/> Status : Beginner</span>
      </p>
    </div>
    <div className="description">
      <h1>Descrition</h1>
    </div>
    </>
  )
};

export default Frame;
