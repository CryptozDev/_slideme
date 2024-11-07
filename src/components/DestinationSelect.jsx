// src/components/DestinationSelect.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DestinationSelect.css';

const DestinationSelect = () => {
  const navigate = useNavigate();

  const handleSelectDestination = (destination) => {
    console.log("Selected destination:", destination);
    // คุณสามารถเพิ่ม logic เพื่อนำทางไปยังหน้าถัดไปหรือใช้งานข้อมูลจุดหมายปลายทางได้ที่นี่
  };

  return (
    <div className="destination-container">
      <header className="destination-header">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h1>เลือกจุดหมายปลายทาง</h1>
      </header>
      <div className="destination-list">
        <div className="destination-item" onClick={() => handleSelectDestination("คู่ศรีปทุม")}>
          <span>คู่ศรีปทุม</span>
          <p>2410/2 ถนนพหลโยธิน เขตจตุจักร กรุงเทพ 10900</p>
        </div>
        <div className="destination-item" onClick={() => handleSelectDestination("อู่บางแคตลาดสายทอง")}>
          <span>อู่บางแคตลาดสายทอง</span>
          <p>1234 ถนนพณานินทร์ เขตภาษีเจริญ กรุงเทพ 11111</p>
        </div>
        <div className="destination-item" onClick={() => handleSelectDestination("อู่อธงชัย")}>
          <span>อู่อธงชัย</span>
          <p>2456 ถนนดอนเมือง เขตดอนเมือง กรุงเทพ 77777</p>
        </div>
        <div className="destination-item" onClick={() => handleSelectDestination("อู่เดชวิริสจัดสรรวิล")}>
          <span>อู่เดชวิริสจัดสรรวิล</span>
          <p>958 ถนนพญาไท เขตปทุมวัน กรุงเทพ 98765</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationSelect;
