import React from "react";
import "./Section9.css";
import ReqForm from "./ReqForm";

const Section9 = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1 className="SectionHeads">Get To know us More</h1>
      <br />
      <br />
      <div className="SecNineParent">
        <div className="YTvideoBox" data-aos="fade">
          <img src="Images/FooterImages/ytvideo.png" alt="yt" />
          <br />
          <p className="gettoknowusmoreparargafasdkfjnas">
            Everyone has basic rights under the their Constitution and civil
            rights laws. Learn more here about what your rights are, how to
            exercise them, and what to do when your rights are violated.
          </p>
        </div>
        <div className="RequestConsX">
          <ReqForm />
        </div>
      </div>
    </div>
  );
};

export default Section9;
