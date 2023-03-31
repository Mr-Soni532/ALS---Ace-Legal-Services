import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="NavBarParent" data-aos="fade">
      <div className="MainLogo">
        <NavLink to="/">
          <img
            style={{ width: "100%" }}
            src="Images/IndexPageImages/ACE1.png"
            alt="acelogz"
          />
        </NavLink>
      </div>
      <div className="NavMenu">
        <NavLink className="buttonunderline">Home</NavLink>
        <NavLink className="buttonunderline">Services</NavLink>
        <NavLink className="buttonunderline">About</NavLink>

        <NavLink className="buttonunderline">Contact Us</NavLink>
        <NavLink to="/userdashboard">
          <button className="SecOneMeetLawBtnS">
            Sign in
            <svg
              className="opentabicon"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z" />
            </svg>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
