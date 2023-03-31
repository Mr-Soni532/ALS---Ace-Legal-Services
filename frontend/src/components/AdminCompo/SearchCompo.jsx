import React from "react";
import "../../utlis/admin_css/contentNav.css"
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = (props) => {
    return (
        <div className="contentNav">
            <h2>
               {props.name}
            </h2>
            <div>
                {props.name=='lawyers'?<select>
                    <option>Filter</option>
                    <option>Business Lawyer</option>
                    <option>Constitutional Lawyer</option>
                    <option>Criminal Defense Lawyer</option>
                    <option>Employment and Labor Lawyer</option>
                    <option>Entertainment Lawyer</option>
                    <option>Tax Lawyer</option>
                </select>:null}
                <div>
                    <AiOutlineSearch className="searchIcon"/>
                    <input type="search" placeholder="Search..."/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar


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