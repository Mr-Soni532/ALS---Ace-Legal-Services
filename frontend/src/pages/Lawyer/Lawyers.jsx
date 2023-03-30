import React from 'react'
import LawyerCard from '../../components/lawyers/LawyerCard';

const Lawyers = (props) => {
  console.log(props.props);
  return (
    <div>
      {props?.props?.map((el) => {
        // console.log(el);
        return <LawyerCard props={el} />
      })}
    </div>
  )
}

export default Lawyers