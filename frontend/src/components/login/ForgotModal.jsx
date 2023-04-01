import React, { useState } from "react";
import { Button, Modal } from "antd";

const ForgotModal = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

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
        <input className="InputModalt" type="text" placeholder="Enter Email" />
      </Modal>
    </>
  );
};

export default ForgotModal;
