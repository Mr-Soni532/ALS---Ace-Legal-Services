import { Menu } from "antd";
import React from "react";
import {AppstoreOutlined,UserOutlined,MenuFoldOutlined, FaBars} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {

  const menuItems = [
    {label:"Home",icon:<AppstoreOutlined/>,key:"/"},
    {label:"Lawyers",icon:<UserOutlined/>,key:"/lawyer"},
    {label:"Client",icon:<UserOutlined/>,key:"/client"}
  ]

  const navigate = useNavigate()

  return (
  <div>
    <div className="topSection">
      <div className="bars">
      <MenuFoldOutlined/>
      </div>
      <div>
        <Menu onClick={(item)=>{navigate(item.key)}} items={
        [
          {label:"Home",icon:<AppstoreOutlined/>,key:"/"},
          {label:"Lawyers",icon:<UserOutlined/>,key:"/lawyer"},
          {label:"Client",icon:<UserOutlined/>,key:"/client"}
        ]
        }>
        </Menu>
      </div>
    </div>    
  </div>
  )
};

export default SideMenu;

{/* <MenuFoldOutlined/> */}
{/* <Menu onClick={(item)=>{navigate(item.key)}} items={
        [
          {label:"Home",icon:<AppstoreOutlined/>,key:"/"},
          {label:"Lawyers",icon:<UserOutlined/>,key:"/lawyer"},
          {label:"Client",icon:<UserOutlined/>,key:"/client"}
        ]
}>
</Menu> */}