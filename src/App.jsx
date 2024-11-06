// src/App.jsx
import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MapView from './components/MapView';
import BottomNavBar from './components/BottomNavBar';
import Login from './components/Login';
import Register from './components/Register';
import DetailForm from './components/DetailForm';
import OTP from './components/OTP';
import Createpass from './components/Createpass';
import Forgotpass from './components/Forgotpass';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detailform" element={<DetailForm />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/createpass" element={<Createpass />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <div className="input-container">
                  {/* Search input form */}
                </div>
                <MapView />
                <BottomNavBar />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;