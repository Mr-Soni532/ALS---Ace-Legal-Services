import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppointmentContext } from '../../context/appointment/appointmentContext';
import './slotbtn.style.css'
const SlotBtn = ({time,active,slot}) => {
    const navigate = useNavigate();    
    const context = useContext(AppointmentContext)
    const {setDetials} = context;
    function handleClick(e){
        setDetials(prev => ({
            ...prev, ...{time:e.target.innerText},appointmentSlot:slot
        }))
        navigate('/')
    }
  return (
    <div className={`slot-btn ${!active&&'inactive'}`} onClick={handleClick}>{time}</div>
  )
}

export default SlotBtn