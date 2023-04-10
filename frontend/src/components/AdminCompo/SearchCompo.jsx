import React from "react";
import "./contentNav.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";
const SearchBar = ({ name, query, setQuery, setOption, processChange }) => {
  return (
    <div className="contentNav">
      <h2 className="SectionNameAdmin">{name}</h2>
      {name == "Lawyers" ? (
        <div>
          <Link to="/addlawyer">
            <button className="AddLawyerButton">
              Add Lawyer
              <UserAddOutlined style={{ fontSize: 25, padding: 5 }} />
            </button>
          </Link>
        </div>
      ) : null}
      {name == "Lawyers" ? (
        <>
          <div
            style={{
              width: "65%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="select selectoption">
              <span className="search-by">Search By : </span>
              <div class="mydict">
                <div>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      value="name"
                      onClick={(e) => {
                        setOption("name");
                      }}
                    />
                    <span>Name</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      value="profession"
                      onClick={(e) => {
                        setOption("profession");
                      }}
                    />
                    <span>Profession</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      value="experience"
                      onClick={(e) => {
                        setOption("experience");
                      }}
                    />
                    <span>Experience</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="searchdiv">
              <AiOutlineSearch className="searchIcon" />
              <input
                type="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </>
      ) : name == "Clients" ? (
        <div
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="select">
            <span className="search-by">Search By : </span>
            <div class="mydict">
              <div>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="name"
                    onClick={(e) => {
                      setOption("name");
                    }}
                  />
                  <span>User Name</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="Email"
                    onClick={(e) => {
                      setOption("Email");
                    }}
                  />
                  <span>User Email</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="UserID"
                    onClick={(e) => {
                      setOption("UserID");
                    }}
                  />
                  <span>User ID</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <AiOutlineSearch className="searchIcon" />
            <input
              type="search"
              placeholder="Search..."
              value={query}
              onChange={(e) => processChange(e)}
            />
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "75%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="select">
            <span className="search-by">Search By : </span>
            <div class="mydict">
              <div>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="name"
                    onClick={(e) => {
                      setOption("name");
                    }}
                  />
                  <span>Admin Name</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="Email"
                    onClick={(e) => {
                      setOption("Email");
                    }}
                  />
                  <span>Admin Email</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="AdminID"
                    onClick={(e) => {
                      setOption("AdminID");
                    }}
                  />
                  <span>Admin ID</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <AiOutlineSearch className="searchIcon" />
            <input
              type="search"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

// let selectData = document.querySelector("#select");
// selectData.addEventListener("change",function(){
//     if(selectData.value == "Select"){
//         displayData(normalData)
//     }else{
//         if(selectData.value == "Low to High"){
//              wholeData.sort((a,b)=>{
//              return a.price - b.price;
//              })
//         }
//          if(selectData.value == "High to Low"){
//              wholeData.sort((a,b)=>{
//              return b.price - a.price
//              })
//         }
//         displayData(wholeData);
//     }
// })

{
  /* <div>
<div className="select">
    <span className="search-by">Search By : </span>
    <div class="mydict">
      <div>
        <label>
          <input
            type="radio"
            name="radio"
            value="name"
            // onClick={(e) => {
            //   setOption("name");
            // }}
          />
          <span>Name</span>
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            value="profession"
            // onClick={(e) => {
            //   setOption("profession");
            // }}
          />
          <span>Profession</span>
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            value="experience"
            // onClick={(e) => {
            //   setOption("experience");
            // }}
          />
          <span>Experience</span>
        </label>
      </div>
    </div>
  </div>
<div>
  <AiOutlineSearch className="searchIcon" />
  <input type="search" placeholder="Search..." />
</div>
</div> */
}

// {name == "Lawyers" ? (
//   <select>
//     <option>Filter</option>
//     <option>Business Lawyer</option>
//     <option>Constitutional Lawyer</option>
//     <option>Criminal Defense Lawyer</option>
//     <option>Employment and Labor Lawyer</option>
//     <option>Entertainment Lawyer</option>
//     <option>Tax Lawyer</option>
//   </select>
// ) : null}
