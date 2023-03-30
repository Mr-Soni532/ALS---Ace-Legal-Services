import { Menu } from "antd";
import { GiHamburgerMenu} from 'react-icons/gi';
import { AiFillHome , AiOutlineUserAdd } from 'react-icons/ai';
import {RiAdminFill} from 'react-icons/ri';
import {FaUserGraduate} from 'react-icons/fa'
import React, { useState } from "react";
import "../../utlis/admin_css/sideMenu.css"
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const [ show, setShow]  = useState(false)
  const navigate = useNavigate()
  const [state, setState] = useState(false)

  const arr = [
    {elemnt:<AiFillHome/>,title:'Dashboard',key:'/'},
    {elemnt:<RiAdminFill/>,title:'Admin',key:'/admin'},
    {elemnt:<AiOutlineUserAdd/>,title:'User',key:'/Client'},
    {elemnt:<FaUserGraduate/>,title:'Lawyer',key:'/lawyer'}
  ]

  const routekey = (el)=>{
    navigate(el.key)
  }

  const hideShow = ()=>{
  }

  return (
  <div style={{width:'15%'}} >
    <div className="icons"><div><GiHamburgerMenu onClick={hideShow}  style={{paddingRight:'13px'}}/></div> <div>Menu</div></div>
    {arr.map((el,i)=>{
      return (
      <>
      <div className="icons" key={i} onClick={()=>{routekey(el)}}> <div style={{paddingRight:'13px'}}>{el.elemnt}</div> <div>{el.title}</div></div>
      </>
      )
    })}
  </div>
  )
};

export default SideMenu;


// style={{color: 'red'}}
// style={{borderBottom:'1px solid grey',padding:'20px'}}
{/* <MenuFoldOutlined/> */}
{/* <Menu onClick={(item)=>{navigate(item.key)}} items={
        [
          {label:"Home",icon:<AppstoreOutlined/>,key:"/"},
          {label:"Lawyers",icon:<UserOutlined/>,key:"/lawyer"},
          {label:"Client",icon:<UserOutlined/>,key:"/client"}
        ]
}>
</Menu> */}