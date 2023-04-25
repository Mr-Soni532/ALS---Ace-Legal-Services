import React from "react";
import NoDataHere from "./NoDataHere";

const DetailsComUser = ({ users, deletEele }) => {
  // console.log(users);

  return users?.length === 0 ? (
    <>
      <NoDataHere />
    </>
  ) : (
    <>
      {users &&
        users.map((el, index) => {
          return (
            <div
              className="customerCard"
              key={el._id + "hjkb"}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="AdminClientImage">
                <img
                  src={
                    el.img ||
                    "https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png"
                  }
                  alt="img"
                />
              </div>
              <h2 className="userName">{el.name}</h2>
              <p>Phone: +9{Math.floor(Math.random() * 10000000000)}</p>
              <p>Email: {el.email}</p>
              <p>Gender: Male</p>
              <p>Bio : ACE Legal Services User</p>
              <button className="InfoBtnAdmin">Info</button>
              <button
                className="RemoveButtonAdmin"
                onClick={() => {
                  deletEele(el._id);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
    </>
  );
};

export default DetailsComUser;
