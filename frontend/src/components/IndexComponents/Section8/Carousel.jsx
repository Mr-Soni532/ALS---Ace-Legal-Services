import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "360px",
  color: "#fff",
  textAlign: "center",
  background: "#FDFDFD",
};

const CarouselM = () => (
  <>
    <p style={{ fontSize: "28px" }}>Client Testimonials</p>

    <Carousel autoplay>
      <div style={contentStyle}>
        <div className="FeebackBox">
          <p>
            "Within minutes of posting my legal query on the online portal of
            ACELS, I got clear answers to my legal problem from top lawyers in
            the country. The replies were quick, prompt and gave me a clear
            understanding of the law that surrounds my concerns. It is nothing
            less than magic!"
          </p>
          <h6>-Anuradha Singh</h6>
        </div>
      </div>
      <div style={contentStyle}>
        <div className="FeebackBox">
          <p>
            "Within minutes of posting my legal query on the online portal of
            ACELS, I got clear answers to my legal problem from top lawyers in
            the country. The replies were quick, prompt and gave me a clear
            understanding of the law that surrounds my concerns. It is nothing
            less than magic!"
          </p>
          <h6>-Anuradha Singh</h6>
        </div>
      </div>
    </Carousel>
  </>
);

export default CarouselM;
