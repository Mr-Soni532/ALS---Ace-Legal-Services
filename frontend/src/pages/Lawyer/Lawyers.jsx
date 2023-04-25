import React, { useEffect, useState } from "react";
import LawyerCard from "../../components/lawyers/LawyerCard";
import SearchBar from "../../components/lawyers/SearchBar";

import DashNavbar from "../../components/UserDashboardComponents/DashNavbar/DashNavbar";
import LawyerFilterer from "../../components/lawyers/LawyerFilterer";
import "./lawyer.css";
// import { uuid } from 'uuidv4';

import HOST from "../../utils/baseUrl";
import Loading from "../../components/AdminCompo/Loading";
const Lawyers = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState("name");
  const [items, setItems] = useState([]);

  async function FetchLawyers() {
    let response = await fetch(`${HOST}/lawyer/searchLawyer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: option || "",
        value: query.toLowerCase() || "",
      }),
    });
    let data = await response.json();
    setItems(data.data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    FetchLawyers();
  }, [query, option]);

  return (
    <div>
      <DashNavbar />
      <div className="search-div">
        <SearchBar query={query} setQuery={setQuery} setOption={setOption} />
      </div>
      <div className="LawyerArea">
        <LawyerFilterer />
        {!loading ? (
          <div className="lawyer-list">
            {items?.map((el, index) => {
              return (
                <div key={index + "4iop89721"}>
                  <LawyerCard key={index + "7897546"} data={el} />
                </div>
              );
            })}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Lawyers;
