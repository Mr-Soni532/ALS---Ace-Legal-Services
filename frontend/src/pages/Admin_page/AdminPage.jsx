import React, { useState } from "react";
import "./admin_css/content.css";
import SideMenu from "../../components/AdminCompo/SideMenu";
import AdminClient from "../Admin_page/AdminClient";
import AdminDashboard from "../Admin_page/AdminDashboard";
import AdminLawyer from "../Admin_page/AdminLawyer";
import AdminDetails from "./AdminDetails";

const AdminPage = () => {
  const [Section, setSection] = useState("Dashboard");

  return (
    <div>
      <SideMenu
        ChangeSection={setSection}
        children={
          Section === "User" ? (
            <AdminClient />
          ) : Section == "Lawyer" ? (
            <AdminLawyer />
          ) : Section == "Admin" ? (
            <AdminDetails />
          ) : (
            <AdminDashboard />
          )
        }
      ></SideMenu>
    </div>
  );
};

export default AdminPage;
