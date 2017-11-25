import React, { Component } from 'react';
import StartGame from "./StartGame"
import JoinGame from "./JoinGame"
import logo from "./logo.jpg"

class LandingPage extends Component {

  handleStartGame = (name) => {
    console.log(`${name} want to start a Game`)
  }

  handleJoinGame = (name, code) => {
    console.log(`${name} want to join a game and here is my ${code}`)
  }

  render(){
    return (
      <div>
        <img src={logo} alt="conversation logo" style={{width: "200px", height: "200px",}}/>
        <h2>Welcome To TraitOrBait!</h2>
        <h4>A party converstatoin start and game!</h4>
        <StartGame handleStartGame={this.handleStartGame}/>
        <JoinGame handleJoinGame={this.handleJoinGame}/>
      </div>
    )
  }
}

export default LandingPage;