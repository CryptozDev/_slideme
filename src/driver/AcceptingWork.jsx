import React from "react";
import "./AcceptingWork.css";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import DriverBottomNavBar from './DriverBottomNavBar';

const App = () => {
  const data = [
    { distance: "18 km", from: "เบอร์รี่วิลล์", to: "อู่ศรีปทุม" },
    { distance: "9 km", from: "บางรัก", to: "อู่น้องแดน" },
    { distance: "20 km", from: "ประเวศ", to: "อู่ลุงซัน" },
  ];

  const navigate = useNavigate();

  const handleAccept = () => {
    navigate(`/drivertobiding`);
  };

  return (
    <div className="app-container">
      <Navbar />
        <main className="app-content">
          {data.map((item, index) => (
            <div key={index} className="card">
              <div className="card-header">
                <span className="distance">{item.distance}</span>
              </div>
              <div className="card-body" onClick={handleAccept}>
                <div className="location from">
                  <span className="location-icon"></span>
                  <span>{item.from}</span>
                </div>
                <div className="divider"></div>
                <div className="location to">
                  <span className="location-icon"></span>
                  <span>{item.to}</span>
                </div>
              </div>
            </div>
          ))}
        </main>
      <DriverBottomNavBar />
    </div>
  );
};

export default App;
