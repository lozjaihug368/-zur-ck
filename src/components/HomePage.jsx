// src/components/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegClock,FaPaintRoller, FaPaste,FaQuestionCircle,FaPhotoVideo,FaDrawPolygon } from 'react-icons/fa';
import './HomePage.css'; 

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className='home-page' style={{ backgroundImage: 'url("background.png")' }}>
      <h1>Choose One...</h1>
      <div className="button-container">
        <button onClick={() => navigate('/welcome-back')} className="nav-button">
          <div className="rotating-background" style={{ backgroundImage: 'url("logo192.png")' }}></div>
          <FaPaintRoller size={30} className="icon" />
          <span style={{ zIndex: '1' }}>Welcome Back</span>
        </button>
        <button onClick={() => navigate('/timer')} className="nav-button">
          <div className="rotating-background" style={{ backgroundImage: 'url("logo192.png")' }}></div>
          <FaRegClock size={30} className="icon" />
          <span style={{ zIndex: '1' }}>Just a Timer</span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
