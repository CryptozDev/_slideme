// src/components/Payment.jsx
import React from 'react';
import './Payment.css';

const Payment = () => {
  return (
    <div className="payment-container">
      <header className="payment-header">
        <button className="back-button">←</button>
        <h1>วิธีการชำระเงิน</h1>
      </header>
      <div className="payment-content">
        <div className="payment-option">
          <img src="https://via.placeholder.com/40" alt="QR พร้อมเพย์" className="payment-icon" />
          <span>QR พร้อมเพย์</span>
        </div>

        <div className="section-title">แอปธนาคาร</div>
        <div className="payment-option">
          <img src="https://via.placeholder.com/40" alt="K PLUS" className="payment-icon" />
          <span>K PLUS</span>
        </div>
        <div className="payment-option">
          <img src="https://via.placeholder.com/40" alt="Krungthai NEXT" className="payment-icon" />
          <span>Krungthai NEXT</span>
        </div>
        <div className="payment-option">
          <img src="https://via.placeholder.com/40" alt="KMA Krungsri app" className="payment-icon" />
          <span>KMA Krungsri app</span>
        </div>
        <div className="payment-option">
          <img src="https://via.placeholder.com/40" alt="SCB EASY" className="payment-icon" />
          <span>SCB EASY</span>
        </div>

        <div className="section-title">TrueMoney Wallet</div>
        <div className="payment-option">
          <img src="https://via.placeholder.com/40" alt="TrueMoney Wallet" className="payment-icon" />
          <span>TrueMoney Wallet</span>
        </div>

        <div className="section-title">เพิ่มบัตรใหม่</div>
        <div className="payment-option">
          <img src="https://via.placeholder.com/40" alt="บัตรเครดิต/บัตรเดบิต" className="payment-icon" />
          <span>บัตรเครดิต / บัตรเดบิต</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;