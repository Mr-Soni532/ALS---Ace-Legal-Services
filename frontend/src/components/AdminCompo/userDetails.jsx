import React from "react";

const DetailsCom = ({ users }) => {
    console.log(users)
    return users.lenght==0?<><h1>No Data here</h1></>:(
        <>
            {
                users &&
                users.map((el, index) => {
                    return (
                        <tr key={el.id}>
                            <td>{el.id}</td>
                            <td><img style={{ clipPath: "circle()" }}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" alt="img" /></td>
                            <td>{el.name}</td>
                            <td>{el.email}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    )
                })}
        </>
    )
}

export default DetailsCom;