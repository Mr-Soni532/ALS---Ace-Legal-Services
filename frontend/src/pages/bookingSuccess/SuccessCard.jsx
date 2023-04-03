import React from 'react'
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router';


const SuccessCard = () => {
    const navigate = useNavigate()
    function handleClick(){
        navigate('/userdashboard')
    }
    return (
        <Result
            status="success"
            title="Successfully Booked Your Appointment."
            subTitle="Your Appointment Details are updated in your dashboard as well as on your Email"
            extra={[
                <Button key="buy" onClick={handleClick}>Dashboard</Button>,
            ]}
        />
    );
}

export default SuccessCard