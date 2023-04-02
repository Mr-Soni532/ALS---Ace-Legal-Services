import { FaBars, FaTh } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { MdMore } from 'react-icons/md'
import "./sideMenu.css";
import React, { useState } from "react";

const SideMenu = ({ children, ChangeSection }) => {
  const menuItem = [
    {
      path: '/adminpage',
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: '/admin/lawyer',
      name: "Admin",
      icon: <RiAdminFill />,
    },
    {
      path: "/admin/client",
      name: "User",
      icon: <AiOutlineUserAdd />,
    },
    {
      path: '/admin/admin',
      name: "Lawyer",
      icon: <FaUserGraduate />,
    },
    ,
    {
      path: '/admin/about',
      name: "About",
      icon: <MdMore />,
    },
  ];
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);

  };
  return (
    <div className="SideBarX">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            Menu
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((el, i) => {
          return (
            <div
              key={i}
              className={"link"}
              activeClassname="SMactive"
              onClick={() => ChangeSection(el.name)}
            >
              <div className="Sidebaricons">{el.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
              {el.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="main">{children}</div>
    </div>
  );
};

export default SideMenu;
