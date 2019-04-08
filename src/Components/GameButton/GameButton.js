import React from 'react';
import './GameButton.css';

const GameButton = ({ onGameStep, isGameState }) => {
    switch (isGameState) {
        case 1:
            return (
                <button className='buttonTurnPlayer' onClick={onGameStep}>Your Turn</button>
            );
        case 2:
            return (
                <button className='buttonTurnTom' onClick={onGameStep}>Tom's Turn</button>
            );
        case 3:
            return (
                <button className='buttonAgain' onClick={onGameStep}>Play Again?</button>
            );
        default:
            return (
                <button className='buttonStart' onClick={onGameStep}>Start the Game</button>
            );
    }
}

export default GameButton;