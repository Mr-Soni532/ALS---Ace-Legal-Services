import React, { useState } from 'react'
import "./lawyer.css"
import LawyerCard from '../../components/lawyers/LawyerCard';
import SearchBar from '../../components/lawyers/SearchBar';
import lawyerData from "../../assets/lawyers.json"
const Lawyers = () => {
  console.log(lawyerData);
  const [query, setQuery] = useState("")
  const [option, setOption] = useState("name")
  const keys = ["name", "profession", "experience"]
  const search = (data) => {
    return data.filter((item) => {
      if (!query) {
        return item
      } else {
        // return item.toLowerCase().includes(query)
        return keys.some((key) => item[option].toLowerCase().includes(query))
      }
    })
  }

  const items = search(lawyerData)

  return (

    <div>
      <div className="search-div">
        <SearchBar query={query} setQuery={setQuery} setOption={setOption} />
      </div>
      <div className="lawyer-list">
        {items?.map((el) => {
          // console.log(el);
          return <LawyerCard props={el} />
        })}
      </div>
    </div>
  )
}

export default Lawyers