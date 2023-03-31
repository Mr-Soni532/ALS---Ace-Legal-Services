import React from "react";
import {UserOutlined , BellFilled} from "@ant-design/icons"
import { Image, Space, Typography} from "antd";
import "../../utlis/admin_css/headers.css";
import logo from "../../assets/logoIMG.jpeg"

const Headers = () => {
  return (
  <div className="DashboardHeader">

    <img width={70} src={logo}/>
    <Typography.Title>ALS ADMIN PAGE</Typography.Title>
    <Space>
      <Space>
        <UserOutlined style={{fontSize:24,color:'#f9ad00'}}/>
        <h4>Mohima Bahadur</h4>
      </Space>
      <BellFilled style={{fontSize:24,marginLeft:'25px',color:'#f9ad00'}}/>
    </Space>
  </div>
  );
};

export default Headers;