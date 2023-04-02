import React from "react";

const DetailsComUser = ({ users, deletEele }) => {
  console.log(users);
  return users.lenght == 0 ? (
    <>
      <h1>No Data here</h1>
    </>
  ) : (
    <>
      {users &&
        users.map((el, index) => {
          return (
            <div
              className="customerCard"
              key={el.id}
              data-aos="fade-left"
              data-aos-delay={index * 50}
            >
              <div>
                <img
                  style={{ clipPath: "circle()" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5CPz89vwuDB4H5EsXhkpKz0_koS-0HK0Yg&usqp=CAU"
                  alt="img"
                />
              </div>
              <h2 className="userName">{el.name}</h2>
              <p>Number: +{el.address.zipcode}</p>
              <p>Email: {el.email}</p>
              <p>Gender: Male</p>
              <button className="InfoBtnAdmin">Info</button>
              <button
                className="RemoveButtonAdmin"
                onClick={() => {
                  deletEele(el);
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
