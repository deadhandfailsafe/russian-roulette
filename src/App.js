import React, { Component } from 'react';
import Random from 'random';

import Counters from './Components/Counters/Counters';
import Logo from './Components/Logo/Logo';
import GameButton from './Components/GameButton/GameButton';

import './App.css';

// Initialized states for the game
const initialState = {
  playerTurn: true, // Player always goes first :)
  isGameState: 0 // Having a starting state before the back and forth in the game
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  // Plays the game
  onGameStep = () => {
    // Do a Play Again check first
    if (this.state.isGameState === 3) {
      this.setState({ isGameState: 0, playerTurn: true });
      return;
    }

    // Find out if the gun is destined to fire
    let gunFired = this.pullTrigger();

    // If it is, figure out who lost, if not - "click"
    if (gunFired === true) {
      if (this.state.playerTurn === true) {
        alert(`Bang! -- You blew your brains out! You lose.`);
      } else {
        alert(`Bang! -- Tom blew his brains out! You win!`);
      }
      // Set game to a play again state.
      this.setState({ isGameState: 3 });
    } else {
      alert(`Click.`);
      // Change the game state according to whether the game started or not and who's turn it is
      switch (this.state.isGameState) {
        case 0:
        case 1:
          this.setState({ isGameState: 2 });
          break;
        case 2:
          this.setState({ isGameState: 1 });
          break;
        default:
          break;
      }
    }
  };

  // Creates a revolver with 6 chambers in the cylinder, and one round loaded randomly.
  setupRevolver = () => {
    let revolverChambers = [0, 0, 0, 0, 0, 0];
    let chamberSelection = Random.int(0, 5);
    revolverChambers[chamberSelection] = 1;
    return revolverChambers;
  };

  // Simple check to see if the chamber is loaded upon trigger pull. If it is, game is over win/loss.
  pullTrigger = () => {
    let revolver = this.setupRevolver();
    if (revolver[0] === 1) {
      return true;
    } else {
      // Next person's turn
      if (this.state.playerTurn === true) {
        this.setState({ playerTurn: false });
      } else {
        this.setState({ playerTurn: true });
      }
      return false;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Counters />
        <Logo />
        <GameButton
          onGameStep={this.onGameStep}
          isGameState={this.state.isGameState}
        />
      </React.Fragment>
    );
  }
}

export default App;
