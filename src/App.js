import React, { Component } from 'react';
import Random from 'random';

import Counters from './Components/Counters/Counters';
import Logo from './Components/Logo/Logo';
import GameButton from './Components/GameButton/GameButton';

import './App.css';

class App extends Component {

  // Creates a revolver with 6 chambers in the cylinder, and one round loaded randomly. This can also be used to respin the cylinder on a "draw".
  setupRevolver = () => {
    let revolverChambers = [0,0,0,0,0,0];
    let chamberSelection = Random.int(0, 5);
    revolverChambers[chamberSelection] = 1;
    return revolverChambers;
  }

  // Simple check to see if the chamber is loaded upon trigger pull. If it is, game is over win/loss. If it's empty, the chamber is cycled forward.
  pullTrigger = (revolver, currentChamber) => {
    if (revolver[currentChamber] === 1) {
      alert(`${revolver} -- Bang!`);
    } else {
      currentChamber++;
      alert(`${revolver} -- Click!`);
    }
  }

  // Initializes the game
  onGameStart = () => {
    let revolver = this.setupRevolver();
    let currentChamber = 0;
    this.pullTrigger(revolver, currentChamber);
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
