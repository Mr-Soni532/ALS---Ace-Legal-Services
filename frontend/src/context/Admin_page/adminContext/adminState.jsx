import React, { useEffect, useState } from "react";
import AdminrContext from "./adminContext";
import { Navigate } from "react-router-dom";

const AdminState = ({ children }) => {
  const [users, setUser] = useState([]);
  const [ err, setError ] =useState(false)
  const [ loading , setLoading ] = useState(false)

  const url = "https://jsonplaceholder.typicode.com/users";

  const getUser = async () => {
    // API call
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    // console.log(json)
    setUser(json);
  };

  const postAdmin = (obj) =>{
    const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(obj)
        };
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions).then(response => response.json())
        .then(data => {alert("New Lawyer Added");console.log(data);Navigate("/adminpage")}).catch((err)=>{alert("Something went wrong")})
  }

  const deletefun =  (els) => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/users/${els.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((datas) => {
      setUser(
        users.filter((el) => {
          return el.id !== els.id;
        })
      );
      setLoading(false);
    })
    .catch((err) => {
      setError(true);
      setLoading(false);
    });
  };

  return (
    <AdminrContext.Provider value={{ getUser, users , err , loading , deletefun , postAdmin }}>
      {children}
    </AdminrContext.Provider>
  );
};

export default AdminState;
