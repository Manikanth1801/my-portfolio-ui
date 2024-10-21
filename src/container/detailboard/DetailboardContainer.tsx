import React, { useContext } from 'react';
import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalProvider';
import axiosInstance from '../../utils/axiosInstance';


const DetailboardContainer: React.FC = () => {
  const { setAuthTokenHandler, setMessage } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/logout/');
      setAuthTokenHandler(null);  // Clear the auth token
      message.success('Logout successful');
      setMessage('You have been logged out');
      navigate('/login');
    } catch (error) {
      message.error('Logout failed');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto' }}>
      <h2>Detail Board</h2>
      <Button type="primary" onClick={handleLogout} block>
        Logout
      </Button>
    </div>
  );
};

export default DetailboardContainer;
