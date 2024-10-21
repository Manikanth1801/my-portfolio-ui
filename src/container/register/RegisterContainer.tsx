import React, { useContext, useState } from 'react';
import { Form, Input, Button, message, DatePicker, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { GlobalContext } from '../../context/GlobalProvider';
import axiosInstance from '../../utils/axiosInstance';

const { Option } = Select;

const RegisterContainer: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthTokenHandler, setMessage } = useContext(GlobalContext);
  const token = localStorage.getItem('authToken');

  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    const formattedValues = {
        ...values,
        dob: values.dob ? moment(values.dob).format('YYYY-MM-DD') : null,
    };
    try {
        const response = await axiosInstance.post('accounts/register/', formattedValues);
        // Store tokens
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        setAuthTokenHandler(response.data.access);
        message.success('Registration successful!');
        navigate('/detailboard');
    } catch (error) {
        message.error('Registration failed');
    } finally {
        setLoading(false);
    }
};

  return (
    <div style={{ maxWidth: '600px', margin: '100px auto' }}>
      <h2>Register</h2>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item name="firstName" label="First Name" rules={[{ required: true, message: 'Please input your first name!' }]}>
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name" rules={[{ required: true, message: 'Please input your last name!' }]}>
          <Input placeholder="Last Name" />
        </Form.Item>

        <Form.Item name="dob" label="Date of Birth" rules={[{ required: true, message: 'Please select your date of birth!' }]}>
          <DatePicker placeholder="Select Date of Birth" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please select your gender!' }]}>
          <Select placeholder="Select Gender">
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
        </Form.Item>

        <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterContainer;
