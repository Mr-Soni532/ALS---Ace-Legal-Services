import React, { useEffect } from 'react'
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router';
const FailedBooking = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }, [])
    return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<Button type="danger">Back Home</Button>}
        />
    )
}

export default FailedBooking