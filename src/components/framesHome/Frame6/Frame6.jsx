import React from 'react';
import './Frame6.css';
import { FiMail } from 'react-icons/fi'; // Install react-icons if not already
import Frame5 from '../Frame5/Frame5';

const Frame6 = () => {
  return (
    <div className="join-container">
      <div className="join-text">
        <h2>Join the world largest<br />online learning platform</h2>
      </div>
      <div className="join-form">
        <div className="input-container">
          <FiMail className="mail-icon" />
          <input type="email" placeholder="name@email.com" />
          <button>Join now</button>
        </div>
      </div>
    </div>
  );
};

export default Frame6;
