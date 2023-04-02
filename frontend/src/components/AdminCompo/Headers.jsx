import React from "react";
import { UserOutlined, DiffOutlined } from "@ant-design/icons";
import { Space } from "antd";
import "./headers.css";

import { FaTh } from "react-icons/fa";

const Headers = () => {
  return (
    <div className="DashboardHeader">
      <img width={130} src="Images/ACE1.png" />
      <h1 className="HearderAdminPage"> ADMIN PANEL</h1>
      <Space>
        <Space>
          <UserOutlined style={{ fontSize: 34, color: "#f9ad00" }} />
          <h3>Mohima Bahadur</h3>
        </Space>
        <FaTh style={{ fontSize: 27, marginLeft: "25px", color: "#f9ad00" }} />
      </Space>
    </div>
  );
};

export default Headers;
