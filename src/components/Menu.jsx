import React from 'react';
import './Menu.css';
import Navbar from './Navbar';
import BottomNavBar from './BottomNavBar';
import { Link } from 'react-router-dom';

function Menu() {
  
  return (
    <div className="menu-container">
    <Navbar />
      <div className="profile-section">
        <div className="profile-icon">
          <img src="https://img2.pic.in.th/pic/12e234e91a48646d1.jpg" alt="Profile" />
        </div>
        <div className="profile-info">
          <div className="profile-name">เด็กชายแดน มองทำไม</div>
          <div className="profile-status">Gold Member</div>
        </div>
        <span className="arrow">›</span>
      </div>
      <div className="menu-items">
        <Link to={"/notifications"} style={{ textDecoration: 'none' }}><div className="menu-item">การแจ้งเตือน<span className="arrow">›</span></div></Link>
        <div className="menu-item">ค่าจัดส่ง<span className="arrow">›</span></div>
        <div className="menu-item">ภาษา<span className="arrow">›</span></div>
        <div className="menu-item">การตั้งค่า<span className="arrow">›</span></div>
        <Link to={"/report"} style={{ textDecoration: 'none' }}><div className="menu-item">รายงาน<span className="arrow">›</span></div></Link>
        <Link to={"/chat-admin"} style={{ textDecoration: 'none' }}><div className="menu-item">ศูนย์ความช่วยเหลือ<span className="arrow">›</span></div></Link>
        <Link to={"/aboutus"} style={{ textDecoration: 'none' }}><div className="menu-item">เกี่ยวกับ Slide Me<span className="arrow">›</span></div></Link>
      </div>
      <BottomNavBar />
    </div>
  );
}

export default Menu;