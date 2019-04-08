import React from 'react';
import './Counters.css';

const Counters = () => {
    let countPlayerDeaths = 1;
    let countTomDeaths = 0;
    return (
        <ul>
            <li>
                <h3>Player Deaths</h3>
                <p>{countPlayerDeaths}</p>
            </li>
            <li>
                <h3>Tom Deaths</h3>
                <p>{countTomDeaths}</p>
            </li>
        </ul>
    );
}

export default Counters;