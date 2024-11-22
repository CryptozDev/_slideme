// src/App.jsx
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { io } from 'socket.io-client'; // นำเข้า Socket.IO Client
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
import ChatCustomer from './components/ChatCustomer';
import { ChatProvider } from './components/ChatContext';

import DriverBottomNavBar from './driver/DriverBottomNavBar';
import SplashScreenDriver from './driver/SplashScreen';
import LoginDriver from './driver/Login';
import RegisterDriver from './driver/Register';
import OTPDriver from './driver/OTP';
import CreatepassDriver from './driver/Createpass';
import ForgotpassDriver from './driver/Forgotpass';
import Drivertobiding from './driver/Drivertobiding';
import Bidding from './driver/Bidding';
import WaitingDriver from './driver/Waiting';
import BiddingcompletedDriver from './driver/Biddingcompleted';
import HomeDriver from './driver/Home';
import CheckDestination from './driver/CheckDestination';
import ChatDriver from './driver/ChatDriver';

// URL ของ Socket.IO Server
const SOCKET_URL = 'https://slideme-rao3.onrender.com';

function App() {
  const [socket, setSocket] = useState(null); // สร้าง state สำหรับ socket connection

  useEffect(() => {
    // เริ่มการเชื่อมต่อ Socket.IO
    const newSocket = io(SOCKET_URL, {
      transports: ['websocket'], // ใช้ WebSocket เป็น transport protocol
      reconnection: true, // เปิดใช้งานการ reconnect อัตโนมัติ
    });
    setSocket(newSocket); // บันทึก socket instance ไว้ใน state

    // Cleanup: ปิดการเชื่อมต่อเมื่อ component ถูก unmount
    return () => newSocket.close();
  }, []);

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
            <Route path="/chat-customer" element={<ChatCustomer />} />

            {/* เส้นทางของคนขับ */}
            <Route path="/driver" element={<SplashScreenDriver />} />
            <Route path="/driver/login" element={<LoginDriver />} />
            <Route path="/driver/register" element={<RegisterDriver />} />
            <Route path="/driver/otp" element={<OTPDriver />} />
            <Route path="/driver/createpass" element={<CreatepassDriver />} />
            <Route path="/driver/forgotpass" element={<ForgotpassDriver />} />
            <Route path="/driver/drivertobiding" element={<Drivertobiding />} />
            <Route path="/driver/biding" element={<Bidding />} />
            <Route path="/driver/waiting" element={<WaitingDriver />} />
            <Route path="/driver/bidcom" element={<BiddingcompletedDriver />} />
            <Route path="/driver/home" element={<HomeDriver />} />
            <Route path="/driver/checkdestination" element={<CheckDestination />} />
            <Route path="/driver/chat" element={<ChatDriver />} />

            {/* จัดการเส้นทางที่ไม่พบ */}
            <Route path="*" element={<Navigate to="/" replace />} />
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
                  <BottomNavBar />
                  <DriverBottomNavBar />
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