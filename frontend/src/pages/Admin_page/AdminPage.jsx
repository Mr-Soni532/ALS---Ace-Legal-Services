import React, { useState } from "react";
import "./admin_css/content.css";
import SideMenu from "../../components/AdminCompo/SideMenu";
// import AdminClient from "./AdminClient";
// import AdminLawyer from "./AdminLawyer";
// import AdminDashboard from "./AdminDashboard";
import Link from "antd/es/typography/Link";
import { Route, Routes } from 'react-router-dom';
import AdminClient from '../Admin_page/AdminClient';
import AdminDashboard from '../Admin_page/AdminLawyer';
import AdminLawyer from "../Admin_page/AdminLawyer";
import AdminDetails from "./AdminDetails";
// pages/Admin_page/AdminClient

const AdminPage = () => {
  const [Section, setSection] = useState("Dashboard");

  return (
    <div>      
        <SideMenu ChangeSection={setSection}>
            {Section === "User" ? (
            <AdminClient />
            ) : Section == "Lawyer" ? (
            <AdminLawyer />
            ) :Section=="Admin"?(<AdminDetails/>): (
            <AdminDashboard />
            )}
          </SideMenu>
  </div>
  );
};

export default AdminPage;

{/* <Routes>
<Route path='/admin/client' element={<AdminClient/>}/>
<Route path='/admin/dashboard' element={<AdminDashboard/>}/>
<Route path='/admin/lawyer' element={<AdminLawyer/>}/>
</Routes> */}
