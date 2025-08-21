import React from "react";
import Navbar from "../../Navbar/Navbar.jsx";
import About1 from "../../frameAbout/About1/About1.jsx";
import About2 from "../../frameAbout/About2/About2.jsx";
import Footer from "../../../components/Footer/footer.jsx";
const About= () => {
  return (
    <>
      <Navbar/>
      <About1/>
      <About2/>
      <Footer />
    </>
  );
};

export default About;