import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navigation(props) {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const { setCurrentPage } = props;

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  <Nav className="nav-pills px-3 m-3">
    <Nav.Item className="p-2" key="overview">
      <Nav.Link onClick={() => setCurrentPage('overview')}>Overview</Nav.Link>
    </Nav.Item>
  </Nav>;
}

export default Navigation;
