// src/App.jsx
import React, { useEffect, useState } from 'react';
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
import Biddingcompleted from './components/Biddingcompleted';
import Payment from './components/Payment';
import QrPayment from './components/QrPayment';
import Waitpickup from './components/Waitpickup';
import Driveriscoming from './components/Driveriscoming';
import Datadriver from './components/Datadriver'; 
import Call from './components/Call';
import CallDriver from './driver/CallDriver';
// import ChatCustomer from './components/ChatCustomer';
import { ChatProvider } from './components/ChatContext';

import DriverBottomNavBar from './driver/DriverBottomNavBar';
import SplashScreenDriver from './driver/SplashScreen';
import LoginDriver from './driver/Login';
import RegisterDriver from './driver/Register';
import OTPDriver from './driver/OTP';
import CreatepassDriver from './driver/Createpass';
import ForgotpassDriver from './driver/Forgotpass';
import AcceptingWork from './driver/AcceptingWork';
import Drivertobiding from './driver/Drivertobiding';
import Bidding from './driver/Bidding';
import WaitingDriver from './driver/Waiting';
import BiddingcompletedDriver from './driver/Biddingcompleted';
import HomeDriver from './driver/Home';
import JobDetail from './driver/Jobdetail';
import CheckDestination from './driver/CheckDestination';
// import ChatDriver from './driver/ChatDriver';

// import Chat from './slideme/Chat';

import ChatAdmin from './components/Chatadmin';
import Tip from './components/Tip';
import Notifications from './components/notifications';
import NotificationsDriver from './driver/Notificationsdriver';
import Star from './components/Form';
import Driveraccount from './driver/Driveraccount'; 
import Drivinglicense from './driver/Drivinglicense'; 
import PriceTable from './driver/table'; 

function App() {

  return (
    <ChatProvider>
      <Router>
        <div className="app-container">
          <Routes>
            {/* เส้นทางของผู้ใช้ */}
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/detailform" element={<DetailForm />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/createpass" element={<Createpass />} />
            <Route path="/forgotpass" element={<Forgotpass />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/home" element={<Home />} />
            <Route path="/destination" element={<DestinationSelect />} />
            <Route path="/confirmdestination" element={<ConfirmDestination />} />
            <Route path="/choosetowtruck" element={<Towtruck />} />
            <Route path="/pickupdetail" element={<PickupDetail />} />
            <Route path="/waiting" element={<Waiting />} />
            <Route path="/bidcom" element={<Biddingcompleted />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/qrpayment" element={<QrPayment />} />
            <Route path="/waitpickup" element={<Waitpickup />} />
            <Route path="/driveriscoming" element={<Driveriscoming />} />
            <Route path="/call" element={<Call />} />
            <Route path="/star" element={<Star />} />
            <Route path="/tip" element={<Tip />} />
            <Route path="/chat-admin" element={<ChatAdmin />} />
            {/* <Route path="/chat-customer" element={<ChatCustomer />} /> */}

            {/* เส้นทางของคนขับ */}
            <Route path="/driver" element={<SplashScreenDriver />} />
            <Route path="/login-driver" element={<LoginDriver />} />
            <Route path="/register-driver" element={<RegisterDriver />} />
            <Route path="/account-driver" element={<Driveraccount />} />
            <Route path="/driving-license" element={<Drivinglicense />} />
            <Route path="/otp-driver" element={<OTPDriver />} />
            <Route path="/createpass-driver" element={<CreatepassDriver />} />
            <Route path="/forgotpass-driver" element={<ForgotpassDriver />} />
            <Route path="/notifications-driver" element={<NotificationsDriver />} />
            <Route path="/receive-job" element={<AcceptingWork />} />
            <Route path="/drivertobiding" element={<Drivertobiding />} />
            <Route path="/biding-driver" element={<Bidding />} />
            <Route path="/pricetable" element={<PriceTable />} />
            <Route path="/waiting-driver" element={<WaitingDriver />} />
            <Route path="/bidcom-driver" element={<BiddingcompletedDriver />} />
            <Route path="/home-driver" element={<HomeDriver />} />
            <Route path="/jobdetail" element={<JobDetail />} />
            <Route path="/checkdestination" element={<CheckDestination />} />
            <Route path="/call-driver" element={<CallDriver />} />
            {/* <Route path="/chat-driver" element={<ChatDriver />} /> */}

            {/* เช็คงานเฉยๆ */}
            <Route path="/data-driver" element={<Datadriver />} />


            {/* จัดการเส้นทางที่ไม่พบ */}
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            {/* Home */}
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
                  <DriverBottomNavBar />
                  <BottomNavBar />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </ChatProvider>
  );
}

export default App;