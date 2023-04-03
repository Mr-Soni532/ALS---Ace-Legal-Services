import React, { useEffect } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router";
import "./Failedbooking.css";
const FailedBooking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);
  return (
    <div className="Faildebokkdiv">
      <Result
        status="500"
        title="500 Error"
        subTitle="Sorry, Something went wrong."
        extra={
          <Button
            style={{ background: "#ffd41f", color: "black !important" }}
            info
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default FailedBooking;
