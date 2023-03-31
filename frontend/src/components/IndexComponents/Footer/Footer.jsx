import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="FooterParent">
      <div className="Footer1" data-aos="fade">
        <div>
          <img
            style={{ width: "280px" }}
            src="Images/FooterImages/ACEyellow.png"
            alt="acee"
            data-aos="fade"
          />
          <br />
          <br />
        </div>
        <div>
          <p className="footerpara">
            © 2023 <span className="footergoldenpara">Ace Legal Group</span>{" "}
            <br /> Designed and Developed by <br />
            <span className="footergoldenpara">young zinc group</span>
          </p>
        </div>
      </div>
      <div className="Footer2">
        <p className="footeremail">info@acelegalservices.com</p>
        <p>Contact Us: +0781 8462 8462</p>
      </div>
    </div>
  );
};

export default Footer;
