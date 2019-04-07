import React from 'react';
import './GameButton.css';

const GameButton = ({ onGameStart }) => {
    return (
        <button onClick={onGameStart}>Take a Chance</button>
    );
}

export default GameButton;