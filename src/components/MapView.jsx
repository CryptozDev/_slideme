// src/components/MapView.jsx
import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import './MapView.css';

const MapView = () => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState({ lat: 13.85600682383675, lng: 100.58578256895566 }); // พิกัดเริ่มต้นที่มหาวิทยาลัยศรีปทุม
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAU-zXlLCv3bX76fLS4mPEYYIrSOxkAfnA', // ใส่ API Key ของคุณที่นี่
  });

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const handleDestinationClick = () => {
    navigate('/destination'); // นำทางไปหน้า /destination
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="map-view">
      <div className="search-container">
        <div className="search-item">
          <span className="icon">🟢</span>
          <span className="text">ตำแหน่งปัจจุบัน</span>
        </div>
        <div className="search-item" onClick={handleDestinationClick}>
          <span className="icon">🔍</span>
          <span className="text">เลือกจุดหมายปลายทาง</span>
        </div>
      </div>

      <GoogleMap
        center={position}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        onLoad={onLoad}
      >
        <Marker position={position} />
      </GoogleMap>
    </div>
  );
};

export default MapView;