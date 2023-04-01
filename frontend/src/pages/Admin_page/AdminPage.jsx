import React, { useState } from "react";
import "./admin_css/content.css";
import SideMenu from "../../components/AdminCompo/SideMenu";
import AdminClient from "./AdminClient";
import AdminLawyer from "./AdminLawyer";
import AdminDashboard from "./AdminDashboard";

const AdminPage = () => {
  const [Section, setSection] = useState("Dashboard");

  return (
    <div>
      <SideMenu ChangeSection={setSection}>
        {Section === "User" ? (
          <AdminClient />
        ) : Section == "Lawyer" ? (
          <AdminLawyer />
        ) : (
          <AdminDashboard />
        )}
      </SideMenu>
    </div>
  );
};

export default AdminPage;
