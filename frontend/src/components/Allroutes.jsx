import React from "react";
import { Route, Routes } from "react-router-dom";
import Appointment from "../pages/appointment/Appointment";
import IndexPage from "../pages/Index_Page/IndexPage";
import Lawyers from "../pages/Lawyer/Lawyers";
import UserDashboard from "../pages/User_Dashboard/UserDashboard";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Allroutes;
