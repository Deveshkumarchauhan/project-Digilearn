import React from "react";
import Navbar from "../../Navbar/Navbar.jsx";
import Frame from "../../framesHome/Frame/Frame.jsx";
import Frame1 from "../../framesHome/Frame1/Frame1.jsx";
import Frame2 from "../../framesHome/Frame2/Frame2.jsx";
import Frame3 from "../../framesHome/Frame3/Frame3.jsx";
import Frame4 from "../../framesHome/Frame4/Frame4.jsx";
import Frame5 from "../../framesHome/Frame5/Frame5.jsx";
import Frame6 from "../../framesHome/Frame6/Frame6.jsx";
import Footer from "../../Footer/footer.jsx";
const home = () => {
  return (
    <>
      <Navbar />
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Footer />
    </>
  );
};

export default home;
