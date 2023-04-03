import { Typography } from "antd";
import React from "react";
import "./sideMenu.css";
const NoDataHere = () => {
  return (
    <div className="NoDataHere">
      <img
        style={{ width: "420px" }}
        src="https://img.freepik.com/premium-vector/no-data-concept-illustration_203587-28.jpg?w=2000"
        alt="NoDataHere"
      />

      <Typography.Title>No Data Available Here...</Typography.Title>
    </div>
  );
};

export default NoDataHere;
