import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './Fidni logo.svg'; // Replace with your logo file path

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2024-08-20T00:00:00");
    const now = new Date();
    const difference = launchDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + Math.floor(difference / (1000 * 60 * 60 * 24)) * 24,
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Our website is under construction and will be ready soon.</p>
        <div className="countdown">
          {timeLeft.hours !== undefined ? (
            <>
              <h1>{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</h1>
            </>
          ) : (
            <h1>Time's up!</h1>
          )}
        </div>
      </header>
    </div>
  );
};

export default ComingSoon;
