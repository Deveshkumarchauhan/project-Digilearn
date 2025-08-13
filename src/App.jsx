import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
//  import Frame from "./components/Frame/Frame.jsx";
import Home from "./components/Pages/Home/home.jsx";
import Course from "./components/Pages/course/course.js";
import ContentUs from "./components/Pages/ContactUs/contact.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/ContentUs" element={<ContentUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
