import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Nav(props) {
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

  return (
    <nav>
      <ul className="nav nav-pills px-3 m-3">
        <li className="nav-item p-2" key="overview">
          <span className="nav-link" onClick={() => setCurrentPage('overview')}>
            Overview
          </span>
        </li>
        <li className="nav-item p-2" key="projects">
          <span
            className="nav-link active"
            onClick={() => setCurrentPage('projects')}
          >
            Projects
          </span>
        </li>
        <li className="nav-item p-2" key="contact">
          <span className="nav-link" onClick={() => setCurrentPage('contact')}>
            Contact
          </span>
        </li>
        <li className="nav-item p-2" key="logout">
          <span className="nav-link" onClick={handleLogout}>
            Logout
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
