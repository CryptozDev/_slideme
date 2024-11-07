// src/components/Home.jsx
import React from 'react';
import Navbar from './Navbar';
import BottomNavBar from './BottomNavBar';
import MapView from './MapView';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <MapView />
      <BottomNavBar />
    </div>
  );
};

export default Home;