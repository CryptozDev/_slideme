import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePhone } from "../PhoneContext"; // ใช้ PhoneContext
import "./Detaildriver.css";
import humanImage from "./human.copy.jpg";

const Profile = () => {
  // เริ่มต้นข้อมูลผู้ใช้
  const initialUserInfo = {
    name: "",
    username: "",
    phone: "",
    email: "",
    gender: "",
    id: "35264078",
    image: humanImage,
  };

  // ดึงข้อมูลเบอร์โทรจาก PhoneContext
  const { phoneNumber } = usePhone();

  // ใช้เบอร์โทรที่ได้จาก Context เป็นค่าเริ่มต้น
  const [userInfo, setUserInfo] = useState({ ...initialUserInfo, phone: phoneNumber });

  const navigate = useNavigate();

  // ฟังก์ชันเปลี่ยนแปลงข้อมูลผู้ใช้
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // ฟังก์ชันสำหรับการเปลี่ยนหน้าไปที่หน้า "account-driver"
  const handleSubmittonext = () => {
    navigate("/account-driver");
  };

  // ฟังก์ชันส่งข้อมูล (ยืนยันการบันทึก)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Info:", userInfo);
    // คุณสามารถเพิ่มการบันทึกข้อมูลที่นี่ เช่นส่งไปที่ API
  };

  return (
    <div className="account-container">
      <h1 className="acc-information">Account Information</h1>

      <div className="profile-image-container">
        <img src={userInfo.image} alt="Profile" className="profile-img" />
      </div>

      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userInfo.username}
          onChange={handleInputChange}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="username">ID Number</label>
          <input
            type="text"
            id="id"
            name="id"
            value={userInfo.id}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={userInfo.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="agreements-group">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            onChange={(e) => setIsChanged(e.target.checked)}
          />
          <label htmlFor="agree">
            I agree to the
            <a
              href="/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
            .
          </label>
        </div>

        <div className="submit-group">
          <button type="submit" onClick={handleSubmittonext}>
            ดำเนินการต่อ
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;