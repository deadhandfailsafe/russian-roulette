import React from 'react';
import './Counters.css';

const Counters = () => {
  let countPlayerDeaths = 1;
  return (
    <div className="death-count">
      <h3>Player Deaths</h3>
      <p>{countPlayerDeaths}</p>
    </div>
  );
};

export default Counters;
