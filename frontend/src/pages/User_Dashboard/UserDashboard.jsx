import React, { useEffect } from "react";
import DashNavbar from "../../components/UserDashboardComponents/DashNavbar/DashNavbar";
import UserProfile from "../../components/UserDashboardComponents/UserProfile/UserProfile";
import AppointmentsArea from "../../components/UserDashboardComponents/AppointmentsArea/AppointmentsArea";

const HOST = '${HOST}'
const UserDashboard = () => {

  useEffect(() => {
    const getUser = () => {
      fetch(`${HOST}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          let email=resObject.user.emails[0].value
          let name=resObject.user.displayName;
          let id=resObject.user.id;
          let data={
            _id:id,
            name,
            email,
            password:"demogooglepassword",
            phone:123456789,
            gender:"",
            approved:true
          }
          console.log(data);
          addUser(data)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
    
  }, []);

  const addUser = async (data) => {
    const response = await fetch(`${HOST}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json)
    console.log(json.msg);
  };


  return (
    <div>
      <DashNavbar />
      <UserProfile />
      <AppointmentsArea />
    </div>
  );
};

export default UserDashboard;
