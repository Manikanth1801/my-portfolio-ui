// src/components/header/Header.tsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalProvider';
import { Menu, Button } from 'antd';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { authToken, setAuthTokenHandler } = useContext(GlobalContext);

  const handleLogout = () => {
    setAuthTokenHandler(null);
    navigate('/');
  };

  const menuItems = [
    { key: 'home', label: <Link to="/">Home</Link> },
    { key: 'about', label: <Link to="/about">About</Link> },
    { key: 'projects', label: <Link to="/projects">Projects</Link> },
    { key: 'contact', label: <Link to="/contact">Contact</Link> },
  ];

  if (authToken) {
    menuItems.push({ key: 'detailboard', label: <Link to="/detailboard">Detailboard</Link> });
    menuItems.push({
      key: 'logout',
      label: (
        <Button type="link" onClick={handleLogout}>
          Logout
        </Button>
      ),
    });
  } else {
    menuItems.push({ key: 'login', label: <Link to="/login">Login</Link> });
  }

  return (
    <header className="header">
      <Menu mode="horizontal" items={menuItems} />
    </header>
  );
};

export default Header;
