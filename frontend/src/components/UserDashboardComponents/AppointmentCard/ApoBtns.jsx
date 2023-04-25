import React from "react";

const ApoBtns = ({ text, icon, idd, deleteFn }) => {
  return (
    <button
      data-id={idd}
      onClick={(e) => deleteFn(e.target.dataset.id)}
      className="ApoBtns"
    >
      {text} {icon}
    </button>
  );
};

export default ApoBtns;
