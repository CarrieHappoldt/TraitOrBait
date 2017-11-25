import React, { Component } from 'react';
import Button from 'material-ui/Button';


class StartGame extends Component {
  render(){
    return (
      <div>
        <p>Click here to Host a Game</p>
        <Button 
          raised 
          color="primary"
          onClick={this.props.handleStartGame}
          >Start</Button>
      </div>
    )
  }
}

export default StartGame;