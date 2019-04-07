import React, { Component } from 'react';
import Random from 'random';

import Counters from './Components/Counters/Counters';
import Logo from './Components/Logo/Logo';
import GameButton from './Components/GameButton/GameButton';

import './App.css';

// Initialized states for the game
const initialState = {
  playerAlive: true,
  tomAlive: true,
  playerTurn: true, // Player always goes first :)
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  // Plays the game
  onGameStart = () => {
    let gunFired = this.pullTrigger();
    if (gunFired === true) {
      alert(`Bang! -- Player Turn: ${this.state.playerTurn}, Player Alive: ${this.state.playerAlive}, Tom Alive: ${this.state.tomAlive}`)
    } else {
      alert(`Click. -- Player Turn: ${this.state.playerTurn}, Player Alive: ${this.state.playerAlive}, Tom Alive: ${this.state.tomAlive}`)
    }
  }

  // Creates a revolver with 6 chambers in the cylinder, and one round loaded randomly.
  setupRevolver = () => {
    let revolverChambers = [0,0,0,0,0,0];
    let chamberSelection = Random.int(0, 5);
    revolverChambers[chamberSelection] = 1;
    return revolverChambers;
  }

  // Simple check to see if the chamber is loaded upon trigger pull. If it is, game is over win/loss.
  pullTrigger = () => {
    let revolver = this.setupRevolver();
    if (revolver[0] === 1) {
      // Checks who to kill
      if (this.state.playerTurn === true) {
        this.setState({playerAlive: false});
      } else {
        this.setState({tomAlive: false});
      }
      return true;
    } else {
      // Next person's turn
      if (this.state.playerTurn === true) {
        this.setState({playerTurn: false});
      } else {
        this.setState({playerTurn: true});
      }
      return false;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Counters />
        <Logo />
        <GameButton onGameStart={this.onGameStart} />
      </React.Fragment>
    );
  }
}

export default App;
