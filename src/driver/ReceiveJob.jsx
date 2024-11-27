import React from "react";
import Navbar from "./Navbar";
import DriverBottomNavBar from "./DriverBottomNavBar";
import { useNavigate } from "react-router-dom";
import "./ReceiveJob.css";

const ReceiveJob = () => {
  const navigate = useNavigate();

  const handleselectjob = () => {
    navigate("/drivertobiding");
  };

  const jobs = [
    {
      distance: "18 km",
      from: "เมเจอร์รังสิต",
      to: "อู่ศรีปทุม",
      className: "job-major-rangsit",
    },
    {
      distance: "9 km",
      from: "บางรัก",
      to: "อู่น้องแดน",
      className: "job-bangrak",
    },
    {
      distance: "20 km",
      from: "ประเวศ",
      to: "อู่ลุงซัน",
      className: "job-pravet",
    },
  ];

  return (
    <div className="receive-job-container">
      <Navbar />
      <div className="job-list">
        {jobs.map((job, index) => (
          <div className={`job-card ${job.className}`} key={index} onClick={handleselectjob}>
            <div className="job-header">
              <span className="job-distance">{job.distance}</span>
            </div>
            <div className="job-body">
              <div className="job-location">
                <span className="job-icon">🟢</span>
                <span className="job-text">{job.from}</span>
              </div>
              <div className="job-location">
                <span className="job-icon">📍</span>
                <span className="job-text">{job.to}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <DriverBottomNavBar />
    </div>
  );
};

export default ReceiveJob;
