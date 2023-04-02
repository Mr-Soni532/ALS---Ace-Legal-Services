
import React, { useEffect, useState } from "react";
import LawyerContext from "./lawyerContext"
import { useNavigate, Redirect,Route  } from 'react-router-dom';

const LawyerState = ( {children} ) => {
    const navigate = useNavigate()
    const [lawyers, setLawyers] = useState([]);
    const [ err, setError ] =useState(false)
    const [ loading , setLoading ] = useState(false)

    const url = "https://jsonplaceholder.typicode.com/users"

    const getLawyer = () => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
        .then((data)=> {console.log(data);setLawyers(data)})
        .catch((err)=> setError(true))
        .finally(()=> setLoading(false))
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
            setLawyers(
            lawyers.filter((el) => {
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

      const postLawyers = (obj) =>{
        const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(obj)
            };
            fetch('https://jsonplaceholder.typicode.com/posts', requestOptions).then(response => response.json())
            .then(data => {alert("New Lawyer Added");console.log(data);navigate("/adminpage")}).catch((err)=>{alert("Something went wrong")})
      }

    return (
        <LawyerContext.Provider value={{ getLawyer , err , loading , setLawyers , lawyers , deletefun , postLawyers }}>
            {children}
        </LawyerContext.Provider>
    )
}

export default LawyerState