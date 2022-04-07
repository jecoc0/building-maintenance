import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navigation() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

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
    <div className="nav-style">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="FM-style">
            Facilities Maintenance
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <img src="../../assets/logoSF.png" className="sflogo" />

            <Nav className="nav-contact">
              <Nav.Item className="px-2">
                <Link to="/overview">Overview</Link>
              </Nav.Item>
              <Nav.Item className="px-2">
                <Link to="/projects">Projects</Link>
              </Nav.Item>
              <Nav.Item className="px-2">
                <Link to="/contact">Contact</Link>
              </Nav.Item>
              <Nav.Item className="px-2">
                <button onClick={handleLogout}>Logout</button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
