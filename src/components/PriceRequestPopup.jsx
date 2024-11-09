import React from 'react';
import './PriceRequestPopup.css';

const PriceRequestPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3 className="popup-title">คนขับกำลังเสนอราคาให้คุณ</h3>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <div className="vehicle-info">
          <p className="vehicle-type">รถสไลด์</p>
          <p className="waiting-message">โปรดรอคนขับสักครู่</p>
        </div>
        <button className="cancel-button" onClick={onClose}>
          ยกเลิก
        </button>
      </div>
    </div>
  );
};

export default PriceRequestPopup;