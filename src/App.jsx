// src/App.jsx
import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MapView from './components/MapView';
import MapHome from './components/MapHome';
import BottomNavBar from './components/BottomNavBar';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Register from './components/Register';
import DetailForm from './components/DetailForm';
import OTP from './components/OTP';
import Createpass from './components/Createpass';
import Forgotpass from './components/Forgotpass';
import Home from './components/Home';
import DestinationSelect from './components/DestinationSelect';
import ConfirmDestination from './components/ConfirmDestination';
import Towtruck from './components/Towtruck';
import PickupDetail from './components/PickupDetail';
import Waiting from './components/Waiting';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detailform" element={<DetailForm />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/createpass" element={<Createpass />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<DestinationSelect />} />
          <Route path="/confirmdestination" element={<ConfirmDestination />} />
          <Route path="/choosetowtruck" element={<Towtruck />} />
          <Route path="/pickupdetail" element={<PickupDetail />} />
          <Route path="/waiting" element={<Waiting />} />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <div className="input-container">
                  {/* Search input form */}
                </div>
                <MapView />
                <MapHome />
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