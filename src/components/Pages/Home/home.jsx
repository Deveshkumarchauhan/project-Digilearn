import React from "react";
// import Navbar from "../../../Navbar/Navbar.jsx";
import Navbar from "../../../components/navbar/navbar.jsx";
import Frame from "../../../components/framesHome/Frame/Frame.jsx";
import Frame1 from "../../../components/framesHome/Frame1/Frame1.jsx";
import Frame2 from "../../../components/framesHome/Frame2/Frame2.jsx";
import Frame3 from "../../../components/framesHome/Frame3/Frame3.jsx";
import Frame4 from "../../../components/framesHome/Frame4/Frame4.jsx";
import Frame5 from "../../../components/framesHome/Frame5/Frame5.jsx";
import Frame6 from "../../../components/framesHome/Frame6/Frame6.jsx";
import Footer from "../../../components/Footer/footer.jsx"
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
      <Footer/>
    </>
  );
};

export default home;
