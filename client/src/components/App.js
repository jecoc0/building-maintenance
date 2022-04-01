import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import { AuthProvider } from '../contexts/AuthContext';
import Overview from './Overview';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PrivateRoute component={Dashboard} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/overview"
          element={<PrivateRoute component={Overview} />}
        />
        <Route
          path="/projects"
          element={<PrivateRoute component={Projects} />}
        />
        <Route path="/contact" element={<PrivateRoute component={Contact} />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
