import React from "react";
import DashNavbar from "../../components/UserDashboardComponents/DashNavbar/DashNavbar";
import UserProfile from "../../components/UserDashboardComponents/UserProfile/UserProfile";
import AppointmentsArea from "../../components/UserDashboardComponents/AppointmentsArea/AppointmentsArea";
// import HOST from "../../utils/baseUrl";
const UserDashboard = () => {

  return (
    <div>
      <DashNavbar />
      <UserProfile />
      <AppointmentsArea />
    </div>
  );
};

export default UserDashboard;
