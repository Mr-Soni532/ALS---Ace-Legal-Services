import React from 'react'
import './slotbtn.style.css'
const SlotBtn = ({time,active}) => {
  return (
    <div className={`slot-btn ${!active&&'inactive'}`}>{time}</div>
  )
}

export default SlotBtn