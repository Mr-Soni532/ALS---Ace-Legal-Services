import React from "react";
import { Steps } from "antd";

// const description = "This is a description.";
const Stepss = () => (
  <Steps
    direction="vertical"
    current={1}
    items={[
      {
        title: "Select a Lawyer",
        description: "Select lawyer according to your prefrences",
      },
      {
        title: "Booking A Slot",
        description: "Select A valid Date and Time to book the Slot",
      },
      {
        title: "Payment",
        description: "The Payment of Lawyer & ALS Services",
      },
      {
        title: "Success",
        description: "Successfully booked the Appointment",
      },
    ]}
  />
);

export default Stepss;
