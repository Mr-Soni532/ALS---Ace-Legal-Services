import React from "react";

const DetailsCom = ({ users, deletEele }) => {
  let skills = ["Skills1", "Skills2", "Skills3"];
  function achievment(rank) {
    if (rank == 1) {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGuAS_snKvi6BPC3WNidmpbJXc8f9VnpXlA&usqp=CAU";
    } else if (rank == 2) {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmRWC3KNEF7-AjwbHmzSlMdBOrEMX1ZxFUw&usqp=CAU";
    } else if (rank == 3) {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSdedGybJvkyQw81eJ82MwQmEY5_h11dRDYg&usqp=CAU";
    } else {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTce5Mg4n8Hj_22MJVm7u44oaacciPw4ScpFQ&usqp=CAU";
    }
  }
  return users.lenght == 0 ? (
    <>
      <h1>Data Unavailable</h1>
    </>
  ) : (
    <>
      {users &&
        users.map((el, index) => {
          return (
            <div
              className="lawyerCard"
              key={el.id}
              data-aos="fade-left"
              data-aos-delay={index * 50}
            >
              <div>
                <img
                  style={{ clipPath: "circle()" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
                  alt="img"
                />
              </div>
              <div className="lawyerDetails">
                <h2 className="adminLayerName">{el.name}</h2>
                <h5 className="adminLayerType">Lawyer type</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatum dolores odit hic, pariatur sunt autem aspernatur
                  voluptatem eaque officiis cupiditate?
                </p>
                <div className="skilsDiv">
                  {skills.map((el) => {
                    if (el !== "") {
                      return <p>{el}</p>;
                    }
                  })}
                </div>

                <div className="rankDiv">
                  <img src={achievment(el.id)} alt="achievment" />
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
                    deletEele(el);
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
