import React, { useState } from 'react';
import Random from 'random';

import Counters from './Components/Counters/Counters';
import Logo from './Components/Logo/Logo';
import GameButton from './Components/GameButton/GameButton';

import './App.css';

// TODO: Make the styles actually look nice

// Plays the game
const onGameStep = (isGameState, setGameState, playerTurn, setPlayerTurn) => {
  // Do a Play Again check first
  if (isGameState === 3) {
    setGameState(0);
    setPlayerTurn(true);
    return;
  }

  // Find out if the gun is destined to fire
  let gunFired = pullTrigger(playerTurn, setPlayerTurn);

  // If it is, figure out who lost, if not - "click"
  if (gunFired === true) {
    if (playerTurn === true) {
      alert(`Bang! -- You lose.`);
    } else {
      alert(`Bang! -- You win!`);
    }
    // Set game to a play again state.
    setGameState(3);
  } else {
    alert(`Click.`);
    // Change the game state according to whether the game started or not and who's turn it is
    switch (isGameState) {
      case 0:
      case 1:
        setGameState(2);
        break;
      case 2:
        setGameState(1);
        break;
      default:
        break;
    }
  }
};

// Creates a revolver with 6 chambers in the cylinder, and one round loaded randomly.
// This follows standard rules where one round is loaded into one of six chambers, and the cylinder is spun each time before pulling the trigger.
const setupRevolver = () => {
  let revolverChambers = [0, 0, 0, 0, 0, 0];
  let chamberSelection = Random.int(0, 5);
  revolverChambers[chamberSelection] = 1;
  return revolverChambers;
};

// TODO: Create functions for different rule variants.

// Simple check to see if the chamber is loaded upon trigger pull. If it is, game is over win/loss.
const pullTrigger = (playerTurn, setPlayerTurn) => {
  let revolver = setupRevolver();
  if (revolver[0] === 1) {
    return true;
  } else {
    // Next person's turn
    if (playerTurn === true) {
      setPlayerTurn(false);
    } else {
      setPlayerTurn(true);
    }
    return false;
  }
};

function App() {
  const [playerTurn, setPlayerTurn] = useState(true);
  const [isGameState, setGameState] = useState(0);

  return (
    <React.Fragment>
      <Counters />
      <Logo />
      <GameButton
        onGameStep={() =>
          onGameStep(isGameState, setGameState, playerTurn, setPlayerTurn)
        }
        isGameState={isGameState}
      />
    </React.Fragment>
  );
}

export default App;
