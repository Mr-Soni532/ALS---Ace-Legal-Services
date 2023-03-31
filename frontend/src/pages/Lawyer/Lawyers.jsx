import React from 'react'
import "./lawyer.css"
import LawyerCard from '../../components/lawyers/LawyerCard';
import SearchBar from '../../components/lawyers/SearchBar';

const Lawyers = (props) => {
  // console.log(LayerDta);

  return (
    <div>
      <div className="search-div">
        <SearchBar />
      </div>
      <div className="lawyer-list">
        {props?.props?.map((el) => {
          // console.log(el);
          return <LawyerCard props={el} />
        })}
      </div>
    </div>
  )
}

export default Lawyers