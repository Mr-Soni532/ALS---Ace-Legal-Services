import { useContext, useEffect, useState } from "react";
import "./DashNavbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import HOST from "../../../utils/baseUrl";
import { UserContext } from "../../../context/Admin_page/userFunction/userState";
const DashNavbar = ({ UserData }) => {
  const [email, setEmail] = useState("User Email");
  const [name, setName] = useState("User Name");

  // const navigate = useNavigate();

  const { UserDetails } = useContext(UserContext);
  useEffect(() => {
    setEmail(UserDetails.email);
    setName(UserDetails.name);
  }, [UserDetails]);

  const logout = () => {
    localStorage.clear();
    window.open(`${HOST}/auth/logout`, "_self");
  };
  return (
    <div className="DashNavbarParent" data-aos="fade">
      <div>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
          </svg>
        </Link>
      </div>
      <div className="MainLogo">
        <NavLink to="/">
          <img
            style={{ width: "100%" }}
            src="Images/IndexPageImages/ACE1.png"
            alt="acelogz"
          />
        </NavLink>
      </div>
      <div className="DashNavMenu">
        <NavLink to="/userdashboard" className="buttonunderline">
          Dashboard
        </NavLink>
        <NavLink to="/userdashboard" className="buttonunderline">
          Services
        </NavLink>
        <NavLink to="/lawyers" className="buttonunderline">
          Search
        </NavLink>
        <NavLink to="/" className="buttonunderline">
          Contact Us
        </NavLink>
      </div>
      <div className="logoutarea">
        <NavLink>
          <button className="SecOneMeetLawBtnDASH" onClick={logout}>
            <svg
              className="opentabicon"
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 96 960 960"
              width="30"
            >
              <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z" />
            </svg>
          </button>
        </NavLink>

        <div style={{ transform: "translateY(-4px)" }}>
          <h4>{name}</h4>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
