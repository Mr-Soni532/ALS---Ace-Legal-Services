import { Typography } from "antd";
import React from "react";
import "./sideMenu.css";
const Loading = () => {
  return (
    <div className="Loaderrrrr">
      <img
        style={{ width: "420px" }}
        src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
        alt="loading"
      />

      <Typography.Title>Loading...</Typography.Title>
    </div>
  );
};

export default Loading;
