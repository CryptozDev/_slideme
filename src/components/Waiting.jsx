import React, { useState } from 'react';
import Navbar from './Navbar';
import BottomNavBar from './BottomNavBar';
import MapView from './MapView';
import WaitingPopup from './PriceRequestPopup';
import './Waiting.css';

const Waiting = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true); // Set to true if you want it to appear on page load

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="Waiting-container">
      <Navbar />
      <MapView />
      {isPopupVisible && <WaitingPopup onClose={handleClosePopup} />}
      <BottomNavBar />
    </div>
  );
};

export default Waiting;