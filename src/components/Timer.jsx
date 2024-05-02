import React, { useState, useEffect } from 'react';
import styles from './TimerPage.module.css';

function TimerPage() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showP2Img, setShowP2Img] = useState(false);
  const [showP3Gif, setShowP3Gif] = useState(true);
  const [buttonTop, setButtonTop] = useState('65%');

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((secs) => secs + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  // 监听窗口大小变化并更新按钮的顶部位置
  useEffect(() => {
    function updateButtonPosition() {
      setButtonTop(`${window.innerWidth * 0.65}px`);
    }

    window.addEventListener('resize', updateButtonPosition);
    updateButtonPosition(); // 初始设置

    return () => {
      window.removeEventListener('resize', updateButtonPosition);
    };
  }, []);

  const startTimer = () => {
    setIsActive(true);
    setShowP2Img(true);
    setShowP3Gif(false);
  };

  const stopTimer = () => {
    setIsActive(false);
    setSeconds(0);
    setShowP2Img(false);
    setShowP3Gif(true);
  };

  const formattedTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ position: 'relative' }}>
      {!isActive && (
        <button
          className={styles.bbutton}
          style={{ position: 'absolute', zIndex: 4, left: '50%', transform: 'translateX(-50%)', top: buttonTop }}
          onClick={startTimer}>
          Start timing!
        </button>
      )}
      {isActive && (
        <div
          id="timer-display"
          style={{ position: 'absolute', zIndex: 4, left: '50%', transform: 'translateX(-50%)', top: buttonTop,  justifyContent: 'center', alignItems: 'center' }}>
          <p id="timer" className={styles.timer}>{formattedTime()}</p>
          <button
            id="stop-button"
            className={styles.bbutton}
            style={{ marginLeft: '16%' }}
            onClick={stopTimer}>
            Stop
          </button>
        </div>
      )}
      <img src="p11.png" style={{ width: '100%', position: 'absolute', zIndex: 3,left:0 }} alt="Image 1" />
      {showP2Img && <img id="p2-img" className={styles.p2img} src="p22.png" style={{ width: '100%', position: 'absolute', zIndex: 2,left:0,top:'90px'}} alt="Image 2" />}
      {showP3Gif && <img id="p3-gif" src="p22.png" style={{ width: '100%', position: 'absolute', zIndex: 1,left:0,top:'90px' }} alt="GIF Animation" />}
    </div>
  );
}

export default TimerPage;
