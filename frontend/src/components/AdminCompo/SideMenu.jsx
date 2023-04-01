
import { FaBars, FaTh, FaUserAlt } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';
import { FaUserGraduate } from 'react-icons/fa'
import { NavLink } from "react-router-dom";
import "../../utlis/admin_css/sideMenu.css"
import React,{ useState } from 'react';
// import { useContext } from "react";
// import NormalContext from '../../context/Admin_page/normalFun/functioncontext';
let open = false
const SideMenu = ({children}) => {
  const menuItem = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <FaTh />
    },
    {
      path: '/about',
      name: 'About',
      icon: <FaUserAlt />
    },
    {
      path: '/admin',
      name: 'Admin',
      icon: <RiAdminFill />,
    },
    {
      path: '/client',
      name: 'User',
      icon: <AiOutlineUserAdd />,
    },
    {
      path: '/lawyer',
      name: 'Lawyer',
      icon: <FaUserGraduate />,
    },
  ]
  const [isOpen,setOpen]=useState(false)
  const toggle = () => {setOpen(!isOpen); open=isOpen}
  return (
    <div className="container">
      <div style={{width:isOpen?'250px':'50px'}} className="sidebar">
        <div className="top_section">
          <h1 className="logo" style={{display:isOpen?'block':'none'}}>Logo</h1>
          <div style={{marginLeft:isOpen?'50px':'0px'}} className='bars'>
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {menuItem.map((el, i) => {
          return <NavLink to={el.path} key={i} className={"link"} activeClassname='active'>
            <div className="icon">{el.icon}</div>
            <div style={{display:isOpen?'block':'none'}} className="link_text">{el.name}</div>
          </NavLink>
        })}
      </div>
      <main>{children}</main>
    </div>
  )
}

function openornot(){
  return open
}
export default SideMenu;

// activeClassname='active'