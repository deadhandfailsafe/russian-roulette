import React from 'react';
import './GameButton.css';

const GameButton = ({ onGameStart, isGameState }) => {
    switch (isGameState) {
        case 1:
            return (
                <button onClick={onGameStart}>Your Turn</button>
            );
        case 2:
            return (
                <button onClick={onGameStart}>Tom's Turn</button>
            );
        default:
            return (
                <button onClick={onGameStart}>Start the Game</button>
            );
    }
}

export default GameButton;