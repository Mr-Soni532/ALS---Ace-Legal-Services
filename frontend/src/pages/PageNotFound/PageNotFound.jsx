import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const [redirect, setRedirect] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    let inte = setInterval(() => {
      if (redirect <= 0) {
        clearInterval(inte);
        return navigate("/");
      }
      return setRedirect((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(inte);
    };
  }, [redirect, navigate]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "500px" }}
        src="Images\disconnet.jpg"
        alt="pagenotfound"
      />
      <h1 style={{ fontSize: "60px" }}>404 Page Not Found</h1>
      <h1 style={{ color: "#fdd41d" }}>Redirecting in {redirect}</h1>
    </div>
  );
};

export default PageNotFound;
