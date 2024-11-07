import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import BottomNavBar from './BottomNavBar';
import MapView from './MapView';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/destination');
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="search-container">
        <div className="search-item" onClick={handleSearchClick}>
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="จุดหมายปลายทาง"
            className="search-input"
            readOnly
          />
        </div>
      </div>
      <MapView />
      <BottomNavBar />
    </div>
  );
};

export default Home;