import React from 'react';
import revolver from './revolver.png';
import './Logo.css';

const Logo = ({ actionResult }) => {
  return (
    <div className="logo">
      <img alt="logo" src={revolver} />
      <h1>Russian Roulette</h1>
      <p>{actionResult}</p>
    </div>
  );
};

export default Logo;
