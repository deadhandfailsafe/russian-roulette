import React from 'react';
import './Counters.css';

const Counters = ({ countDeaths }) => {
  return (
    <div className="death-count">
      <h3>Player Deaths</h3>
      <p>{countDeaths}</p>
    </div>
  );
};

export default Counters;
