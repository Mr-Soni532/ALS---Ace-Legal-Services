import React, { useState } from "react";
import NoDataHere from "./NoDataHere";
import Loading from "./Loading";

const DetailsCom = ({ users, deletEele }) => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading((prev) => false);
  }, 1000);

  return loading ? (
    <Loading />
  ) : users?.length === 0 ? (
    <NoDataHere />
  ) : (
    <>
      {users &&
        users.map((el, index) => {
          return (
            <div
              className="lawyerCard"
              key={el.id}
              data-aos="fade-down"
              data-aos-delay={index * 50}
            >
              <div className="AdminLawyerImage">
                <img
                  src={
                    el.image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
                  }
                  alt="img"
                />
              </div>
              <div className="lawyerDetails">
                <h2 className="adminLayerName">{el.name}</h2>
                <h5 className="adminLayerType">Type : {el.profession}</h5>
                <p>{el.bio}</p>
                <div className="skilsDiv">
                  {el.skills.map((item) => {
                    return <p>{item}</p>;
                  })}
                </div>

                <div className="rankDiv">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHs_iSXfIho850bfdEhGeYitZRpILjDpa8A&usqp=CAU"
                    alt=""
                  />
                </div>
              </div>
              <div className="editDltBtn">
                <button>Edit</button>
                <button
                  onClick={() => {
                    deletEele(el._id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default DetailsCom;
