import React, { useState } from 'react'
import Calander from '../../components/slots/Calander'
import SlotBtn from '../../components/slots/SlotBtn';
import './bookSlot.style.css'

const BookSlot = () => {
    const [inputDate, setInputDate] = useState("");
    function updateDate(date){
        setInputDate(date)
    }
  return (
    <div className='slot_mainContainer'>
        <div className="slot_col-1">
            <Calander updateDate={updateDate}/>
        </div>
        <div className="slot_col-2">
            <span>Available Slots {inputDate}</span>
            <div className="slot_container">
                <SlotBtn time={'9:00 AM'} active={true}/>
                <SlotBtn time={'11:00 AM'} active={false}/>
                <SlotBtn time={'2:00 PM'} active={false}/>
                <SlotBtn time={'4:00 PM'} active={true}/>
            </div>
        </div>
    </div>
  )
}

export default BookSlot