import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import humanImage from './human.jpg';

const Profile = () => {
  const initialUserInfo = {
    name: 'สมชาย ใจดี', 
    username: 'somchai.inbkk', 
    phone: '+123456789',
    email: 'somchai.jai@example.com',
    age: '23',
    image: humanImage,
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [isChanged, setIsChanged] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Info:', userInfo);
    setIsChanged(false);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    setUserInfo({});
    localStorage.removeItem('userInfo');
    sessionStorage.removeItem('userInfo');
    navigate('/login');
  };

  useEffect(() => {
    setIsChanged(JSON.stringify(userInfo) !== JSON.stringify(initialUserInfo));
  }, [userInfo]);

  return (
    <div className="account-container">
      <div className="go-back-group">
        <button
          onClick={handleGoBack}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            top: '-15px',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </button>
      </div>

      <h1 className="acc-information">Account Information</h1>

      <div className="profile-image-container">
        <img src={userInfo.image} alt="Profile" className="profile-img" />
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
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username" 
            value={userInfo.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Age</label>
          <input
            type="age"
            id="age"
            name="age"
            placeholder="Enter your age"
            value={userInfo.age}
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
            <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
              Terms and Conditions
            </a>.
          </label>
        </div>
        <div className="btnaction-group">
          <div className="save-group">
            <button type="submit" className='save-btn' disabled={!isChanged}>Save Changes</button>
          </div>

          <div className="logout-group">
            <button type="button" className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
