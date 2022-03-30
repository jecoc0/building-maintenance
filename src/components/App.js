import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import { AuthProvider } from "../contexts/AuthContext";


function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh " }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute component={Dashboard} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </div>
      </Container>
    </AuthProvider>
  )
}

export default App