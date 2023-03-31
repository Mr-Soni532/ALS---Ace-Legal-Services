import React from "react";

const DetailsCom = ({ users }) => {

    return (
        <div className="userItem">
            {users.map(el => {
                return (<div key={el.id}>
                    <p>{el.id}</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" alt="User_Image" />
                    <p>{el.email}</p>
                    <h3>{el.name}</h3>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>)
            }
            )}
        </div>
    )
}
export default DetailsCom;