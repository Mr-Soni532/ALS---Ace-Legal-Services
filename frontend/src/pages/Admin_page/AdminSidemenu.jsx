import React, { useState } from "react";
import {
  HomeFilled,
  TeamOutlined,
  MenuFoldOutlined,
  PlusCircleFilled,
  MenuUnfoldOutlined,
  SettingFilled,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import "./admin_css/AdminSidemenu.css";

const { Header, Sider, Content } = Layout;

const AdminSidemenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh", padding: "0px" }}>
      <Sider
        style={{ height: "100vh", margin: "0px", backgroundColor: "#545454" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <img
          style={{ width: "100%", margin: "10px 2px", filter: "saturate(2)" }}
          src="Images/FooterImages/ACEyellow.png"
          alt="red"
        />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <HomeFilled style={{ fontSize: collapsed ? "15px" : "20px" }} />
              ),
              label: "Dashboard",
            },
            {
              key: "2",
              icon: (
                <PlusCircleFilled
                  style={{ fontSize: collapsed ? "15px" : "20px" }}
                />
              ),
              label: "Users",
            },
            {
              key: "3",
              icon: (
                <TeamOutlined
                  style={{ fontSize: collapsed ? "15px" : "20px" }}
                />
              ),
              label: "Lawyers",
            },
            {
              key: "4",
              icon: (
                <SettingFilled
                  style={{ fontSize: collapsed ? "15px" : "20px" }}
                />
              ),
              label: "About",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content></Content>
      </Layout>
    </Layout>
  );
};

export default AdminSidemenu;
