import React, { useContext } from 'react'
import './apo-form.style.css'
import { Button, Form, Input, Select } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import styles from './hardStyling';
import { AppointmentContext } from '../../context/appointment/appointmentContext';
import { useNavigate } from 'react-router-dom';
const Appointment_form = () => {
    const context  = useContext(AppointmentContext);
    const {setDetials} = context;
    let navigate = useNavigate()
    const userData = JSON.parse(localStorage.getItem('userData'))
    function handleForm(formData){
        setDetials(prev => ({
            ...prev, ...formData
        }))
        navigate('/bookslot')
    }
    return (
        <>
            <div className="form-container">
                <h1>Client Details</h1>
                <Form onFinish={handleForm}>
                    <Form.Item
                        name="name"
                        rules={[{ required: false, message: 'Please input your Username!' }]}
                        initialValue={userData.name}
                    >
                        <Input inputMode='text' name='name' placeholder="Name" style={styles.input} />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: false, message: 'Please input your email address!' }]}
                        initialValue={userData.email}
                    >
                        <Input inputMode='email' name='email' placeholder="Email Address" style={styles.input} />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[{ required: false, message: 'Please input your phone number!' }]}
                        initialValue=""
                    >
                        <Input name='phone' placeholder="Phone Number" style={styles.input} />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        rules={[{ required: false, message: 'Please describe your case details!' }]}
                        initialValue=""
                    >
                        <Input.TextArea rows={4} name='description' placeholder="Case Summary" style={styles.input} />
                    </Form.Item>

                    <Form.Item
                        name="type"
                        rules={[{ required: false, message: 'Please Select Appointment Type!' }]}
                    >
                        <Select
                            placeholder="Select Appointment Type"
                            size='large'
                            style={{ lineHeight: '30px' }}
                            name='type'
                        >
                            <Select.Option value="virtual">Virtual</Select.Option>
                            <Select.Option value="personal">Personal</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button block type="primary" style={styles.formBtn} size='large' htmlType='submit'>
                            Book Slot
                            <ArrowRightOutlined />
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default Appointment_form