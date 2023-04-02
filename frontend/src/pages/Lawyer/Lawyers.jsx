import React, { useEffect, useState } from "react";
import LawyerCard from "../../components/lawyers/LawyerCard";
import SearchBar from "../../components/lawyers/SearchBar";
import lawyerData from "../../assets/lawyers.json";
import DashNavbar from "../../components/UserDashboardComponents/DashNavbar/DashNavbar";
import LawyerFilterer from "../../components/lawyers/LawyerFilterer";
import "./lawyer.css";

const Lawyers = () => {

  const [query, setQuery] = useState("");
  const [option, setOption] = useState("name");
  const keys = ["name", "profession", "experience"];

  const search = (data) => {

    return data.filter((item) => {
      if (!query) {
        return item;
      } else {
        return keys.some(() => item[option].toLowerCase().includes(query));
      }
    });

  };

  const [items, setItems] = useState(search(lawyerData))

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setItems(search(lawyerData))
    }, 800);

    return () => clearTimeout(timeOut)
  }, [query])
  return (
    <div>
      <DashNavbar />

      <div className="search-div">
        <SearchBar query={query} setQuery={setQuery} setOption={setOption} />
      </div>
      <div className="LawyerArea">
        <LawyerFilterer />
        <div className="lawyer-list">
          {items?.map((el) => {
            return <LawyerCard props={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
