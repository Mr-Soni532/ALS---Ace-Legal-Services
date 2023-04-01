import React from "react";

const DetailsCom = ({ users }) => {
  // console.log(users)
  return users.lenght == 0 ? (
    <>
      <h1>No Data here</h1>
    </>
  ) : (
    <>
      {users &&
        users.map((el) => {
          return (
            <div className="lawyerCard" key={el.id}>
              <div>
                <img
                  style={{ clipPath: "circle()" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
                  alt="img"
                />
              </div>
              <div className="lawyerDetails">
                <h2>{el.name}</h2>
                <h5>Lawyer type</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatum dolores odit hic, pariatur sunt autem aspernatur
                  voluptatem eaque officiis cupiditate?
                </p>
              </div>
              <div className="editDltBtn">
                <button>Edit</button>
                <button>Remove</button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default DetailsCom;

// {
//     users &&
//     users.map((el, index) => {
//         return (
//             <tr key={el.id}>
//                 <td>{el.id}</td>
//                 <td><img style={{ clipPath: "circle()" }}
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" alt="img" /></td>
//                 <td>{el.name}</td>
//                 <td>{el.email}</td>
//                 <td>Edit</td>
//                 <td>Delete</td>
//             </tr>
//         )
//     })}
