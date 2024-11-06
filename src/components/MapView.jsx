// src/components/MapView.jsx
import React, { useState } from 'react';
import { GoogleMap, Marker, Autocomplete, useJsApiLoader } from '@react-google-maps/api';
import './MapView.css';

const MapView = () => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState({ lat: 13.85600682383675, lng: 100.58578256895566 }); // พิกัดเริ่มต้นที่มหาวิทยาลัยศรีปทุม
  const [autocomplete, setAutocomplete] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAU-zXlLCv3bX76fLS4mPEYYIrSOxkAfnA', // ใส่ API Key ของคุณที่นี่
    libraries: ['places'],
  });

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const newPosition = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setPosition(newPosition);
        map.panTo(newPosition); // เลื่อนแผนที่ไปยังตำแหน่งที่เลือก
      }
    }
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
        <div className="search-item">
          <Autocomplete
            onLoad={(autocompleteInstance) => setAutocomplete(autocompleteInstance)}
            onPlaceChanged={onPlaceChanged}
          >
            <input
              type="text"
              placeholder="คุณจะไปที่ไหน"
              className="search-input"
            />
          </Autocomplete>
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