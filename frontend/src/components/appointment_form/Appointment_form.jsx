import React from 'react'
import './apo-form.style.css'
import { Button, Form, Input, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './hardStyling';
import { Option } from 'antd/es/mentions';
const Appointment_form = () => {
    function handleForm(e){
        console.log(e)
    }
    return (
        <>
            <div className="form-container">
                <h1>Client Details</h1>
                <Form onFinish={handleForm}>
                    <Form.Item
                        name="username"
                        rules={[{ required: false, message: 'Please input your Username!' }]}
                        initialValue=""
                    >
                        <Input inputMode='text' name='name' placeholder="Name" style={styles.input} />
                    </Form.Item>
                    <Form.Item
                        name="Email"
                        rules={[{ required: false, message: 'Please input your email address!' }]}
                        initialValue=""
                    >
                        <Input inputMode='text' name='email' placeholder="Email Address" style={styles.input} />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[{ required: false, message: 'Please input your phone number!' }]}
                        initialValue=""
                    >
                        <Input name='phone' placeholder="Phone Number" style={styles.input} />
                    </Form.Item>
                    <Form.Item
                        name="summary"
                        rules={[{ required: false, message: 'Please describe your case details!' }]}
                        initialValue=""
                    >
                        <Input.TextArea rows={4} name='summary' placeholder="Case Summary" style={styles.input} />
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        rules={[{ required: false, message: 'Please Select your Gender!' }]}
                    >
                        <Select
                            placeholder="Select Appointment Type"
                            size='large'
                            style={{ lineHeight: '30px' }}
                        >
                            <Select.Option value="male">Virtual</Select.Option>
                            <Select.Option value="female">Personal</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button block type="primary" style={styles.formBtn} size='large' htmlType='submit'>
                            Primary
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default Appointment_form