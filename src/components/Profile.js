import React, { Profiler, useState } from 'react';
import { Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email: </strong> {currentUser?.email}
        <Link
          to="/update-profile"
          className="btn btn-outline-danger w-100 mt-3"
        >
          Update Profile
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Profile;
