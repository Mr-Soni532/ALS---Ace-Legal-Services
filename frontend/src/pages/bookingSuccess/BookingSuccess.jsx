import React, { useEffect, useState } from 'react'
import SuccessCard from './SuccessCard'

const BookingSuccess = () => {
    const [flag, setFlag] = useState(true)
    useEffect(() => {
      setTimeout(() => {
          setFlag(false)
      }, 3000)
    }, [])
    const style = {
        margin: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
    }
    return (
        <div style={style}>
            {flag ? <img src='loading_2.gif' alt='Loading...' /> : <SuccessCard />}
        </div>
    )
}

export default BookingSuccess