import React, { useState } from "react";
import { Button, Modal } from "antd";

const ForgotModal = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [email,setEmail]=useState("");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    let data={email};
    forgetPassword(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  let forgetPassword= async (data)=>{
      try {
        let json=await fetch("http://localhost:4000/user/forgotpassword",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        let response=await json.json();
        console.log(response);
        localStorage.setItem("userID",response.data.userId);
        if(response.Status==="Success"){
          alert(response.msg)
        }else{
          alert("Can't Find user linked to this email");
        }
      } catch (error) {
        console.log(error)
      }
  }

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className="forgotpassbtn" onClick={showModal}>
        Forgot Password?
      </Button>
      <Modal
        open={open}
        title="Reset Password with Email"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <p>Email</p>
        <input className="InputModalt" type="text" placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)} />
      </Modal>
    </>
  );
};

export default ForgotModal;
