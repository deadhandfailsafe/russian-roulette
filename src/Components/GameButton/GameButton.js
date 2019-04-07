import React from 'react';
import './GameButton.css';

const GameButton = ({ onGameStart }) => {
    return (
        <button onClick={onGameStart}>Start Game</button>
    );
}

export default GameButton;