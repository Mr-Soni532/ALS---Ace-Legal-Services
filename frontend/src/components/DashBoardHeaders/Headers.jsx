import React from "react";
import {UserOutlined , BellFilled} from "@ant-design/icons"
import { Image, Space, Typography} from "antd";
import '../../utlis/css/headers.css'

const Headers = () => {
  return (
  <div className="DashboardHeader">
    <Image width={40} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"></Image>
    <Typography.Title>ALS DASHBOARD</Typography.Title>
    <Space>
      <UserOutlined style={{fontSize:24}}/>
      <BellFilled style={{fontSize:24}}/>
    </Space>
  </div>);
};

export default Headers;