import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Detaildriver.css";
import humanImage from "./human.copy.jpg";

const Profile = () => {
  const initialUserInfo = {
    name: "",
    username: "",
    phone: "",
    email: "",
    gender: "",
    id: "35264078",
    image: humanImage,
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmittonext = () => {
    navigate("/account-driver");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Info:", userInfo);
    setIsChanged(false);
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
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
