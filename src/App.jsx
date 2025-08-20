import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
//  import Frame from "./components/Frame/Frame.jsx";
import Home from "./components/Pages/Home/home.jsx";
import Course from "./components/Pages/course/course.js";
import ContactUs from "./components/Pages/ContactUs/contact.jsx"
import Product from "./components/Pages/Product/Product.jsx";
import Cartbox from "./components/Pages/CartBox/Cartboxmani.jsx";
import Paymentgetway from "./components/Pages/Paymentgetway/Paymentgetway.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/Product" element={<Product/>} />
        <Route path="cartbox" element={<Cartbox/>} />
        <Route path="/Paymentgetway" element={<Paymentgetway />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
