import React, { useContext, useEffect, useState } from "react";
import "./admin_css/content.css";
import SideMenu from "../../components/AdminCompo/SideMenu";
import AdminClient from "../Admin_page/AdminClient";
import AdminDashboard from "../Admin_page/AdminDashboard";
import AdminLawyer from "../Admin_page/AdminLawyer";
import AdminDetails from "./AdminDetails";
import Loading from "../../components/AdminCompo/Loading";
import { AuthContext } from "../../context/AuthContext/AuthState";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  const { Auth, setAuth } = useContext(AuthContext);
  const [Section, setSection] = useState("Dashboard");

  useEffect(() => {
    setTimeout(() => {
      setAuth((prev) => {
        if (prev === false) {
          navigate("/unAuthenticated");
          return false;
        }
        return true;
      });
    }, 2000);
  });

  return !Auth ? (
    <Loading />
  ) : (
    <div>
      <SideMenu
        ChangeSection={setSection}
        children={
          Section === "User" ? (
            <AdminClient />
          ) : Section === "Lawyer" ? (
            <AdminLawyer />
          ) : Section === "Admin" ? (
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
