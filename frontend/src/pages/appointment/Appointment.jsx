import React from 'react'
import formVector from '../../assets/vector-graphics/formVector.jpg'
import AppointmentForm from '../../components/appointment_form/Appointment_form'
import './appointment.styles.css'
const Appointment = () => {
  return (
    <div className="parentlayout">
      <div className='container'>
        <div className="col-1">
          <img src={formVector} alt="" />
        </div>
        <div className="col-2">
          <AppointmentForm/>
        </div>
      </div>
    </div>
  )
}

export default Appointment
