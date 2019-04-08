import React from 'react';
import './GameButton.css';

const GameButton = ({ onGameStart, isGameState }) => {
    switch (isGameState) {
        case 1:
            return (
                <button className='buttonTurnPlayer' onClick={onGameStart}>Your Turn</button>
            );
        case 2:
            return (
                <button className='buttonTurnTom' onClick={onGameStart}>Tom's Turn</button>
            );
        case 3:
            return (
                <button className='buttonAgain' onClick={onGameStart}>Play Again?</button>
            );
        default:
            return (
                <button className='buttonStart' onClick={onGameStart}>Start the Game</button>
            );
    }
}

export default GameButton;