import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "360px",
  color: "#fff",
  textAlign: "center",
  background: "#FDFDFD",
};

const CarouselM = () => (
  <div className="CarouselFeeds" data-aos="fade-up">
    <p style={{ fontSize: "28px", marginLeft: "80px" }}>Client Testimonials</p>
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
          <h6>- Anuradha Singh </h6>
        </div>
      </div>
      <div style={contentStyle}>
        <div className="FeebackBox">
          <p>
            I received a reference for Attorney Brett Riegel after I was
            criminally charged in Bucks County, Pennsylvania. The charges were
            an attempt to take heat off an extremely exclusive gun club whose
            rich, entertainment. The case against me was made up of outrageous
            lies, but they nonetheless comprised."
          </p>
          <h6>- Vijay Mallya</h6>
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
          <h6>- Aman Kumar</h6>
        </div>
      </div>
    </Carousel>
  </div>
);

export default CarouselM;
