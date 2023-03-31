import React from "react";
import { Route, Routes } from "react-router-dom";
import ClientsPage from "../../pages/Admin_page/Client";
import LawyersPage from "../../pages/Admin_page/AdminLawyer";
import Dashborad from "../../pages/Admin_page/Dashboard";


const MainRoutes= ()=> {
    return (
        <Routes>
          <Route path="/" element={<Dashborad/>} />
          <Route path="/lawyer" element={<LawyersPage/>} />
          <Route path="/client" element={<ClientsPage/>} />
        </Routes>
      );
}

export default MainRoutes;