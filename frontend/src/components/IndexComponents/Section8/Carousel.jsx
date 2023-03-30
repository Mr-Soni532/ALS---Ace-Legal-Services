import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "360px",
  color: "#fff",
  textAlign: "center",
  background: true ? "red" : "#FDFDFD",
};

const CarouselM = () => (
  <Carousel autoplay>
    <div>
      <div style={contentStyle}> Hello1</div>
    </div>
    <div>
      <div style={contentStyle}> Hello1</div>
    </div>
    <div>
      <div style={contentStyle}> Hello1</div>
    </div>
    <div>
      <div style={contentStyle}> Hello1</div>
    </div>
  </Carousel>
);

export default CarouselM;
