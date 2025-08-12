import React from "react";
import Navbar from "../Navbar/Navbar";
import Frame from "../Frame/Frame.jsx";
import Frame1 from "../Frame1/Frame1.jsx";
import Frame2 from "../Frame2/Frame2.jsx";
import Frame3 from "../Frame3/Frame3.jsx";
import Frame4 from "../Frame4/Frame4.jsx";
import Frame5 from "../Frame5/Frame5.jsx";
import Frame6 from "../Frame6/Frame6.jsx";
import Footer from "../Footer/footer.jsx";
const home = () => {
  return (
    <>
      <Navbar/>
      <Frame/>
        <Frame1/>
       <Frame2/>
       <Frame3/>
        <Frame4/>
      <Frame5 />
      <Frame6/>
        <Footer/>
    </>
  );
};

export default home;
