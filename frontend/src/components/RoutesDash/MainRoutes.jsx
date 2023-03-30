import React from "react";
import { Route, Routes } from "react-router-dom";
import ClientsPage from "../../pages/Client/Client";
import Dashborad from "../../pages/Dashboard/Dashboard";
import LawyersPage from "../../pages/lawyer/lawyer";


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