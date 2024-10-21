import React, { useContext, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalProvider';
import axiosInstance from '../../utils/axiosInstance';


const LoginContainer: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthTokenHandler, setMessage } = useContext(GlobalContext);
  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
        const response = await axiosInstance.post('api/token/', values);
        // Store the tokens
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        setAuthTokenHandler(response.data.access);
        message.success('Login successful!');
        navigate('/profile');
    } catch (error) {
        message.error('Invalid credentials');
    } finally {
        setLoading(false);
    }
};

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto' }}>
      <h2>Login</h2>
      <Form onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginContainer;
