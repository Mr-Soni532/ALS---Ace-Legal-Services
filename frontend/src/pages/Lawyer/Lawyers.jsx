import React, { useEffect, useState } from "react";
import LawyerCard from "../../components/lawyers/LawyerCard";
import SearchBar from "../../components/lawyers/SearchBar";

import DashNavbar from "../../components/UserDashboardComponents/DashNavbar/DashNavbar";
import LawyerFilterer from "../../components/lawyers/LawyerFilterer";
import "./lawyer.css";
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';
import HOST from "../../utils/baseUrl";
const Lawyers = () => {
  
  const [query, setQuery] = useState("");
  const [option, setOption] = useState("name");

  useEffect(() => {
    fetch(`${HOST}/lawyer/searchLawyer`, {
      method: 'post',
      // authorization: 'bearer ' + JSON.stringify(localStorage.getItem('token')),
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        type : option,
        value: query.toLowerCase()
      })
    }).then(data => data.json()).then(data => setItems(data.data))
  }, [query])

  const [items, setItems] = useState([])

  return (
    <div>
      <DashNavbar />

      <div className="search-div">
        <SearchBar query={query} setQuery={setQuery} setOption={setOption} />
      </div>
      <div className="LawyerArea">
        <LawyerFilterer />
        <div className="lawyer-list">
          {items?.map((el,index) => {
            return <div key={index}><LawyerCard data={el}/></div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
