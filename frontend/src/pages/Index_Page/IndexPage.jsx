import React from "react";
import Navbar from "../../components/IndexComponents/Navbar/Navbar";
import Section1 from "../../components/IndexComponents/Section1/Section1";
import Section2 from "../../components/IndexComponents/Section2/Section2";
import Section3 from "../../components/IndexComponents/Section3/Section3";
import Section4 from "../../components/IndexComponents/Section4/Section4";
import Section5 from "../../components/IndexComponents/Section5/Section5";
import Section6 from "../../components/IndexComponents/Section6/Section6";
import Section7 from "../../components/IndexComponents/Section7/Section7";
import Section8 from "../../components/IndexComponents/Section8/Section8";
import Section9 from "../../components/IndexComponents/Section9/Section9";
import Footer from "../../components/IndexComponents/Footer/Footer";
import "./index.css";
const IndexPage = () => {
  return (
    <div className="FirstView">
      <div className="SecOnebackgroundGreyBox"></div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </div>
  );
};

export default IndexPage;
