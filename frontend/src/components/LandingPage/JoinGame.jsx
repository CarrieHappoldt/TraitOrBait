import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class JoinGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      code: '',
      disabled: true
    }
  }

  handleOnChange = (event) => {
    let newState = this.state
    newState.code = event.target.value
    if(this.state.code.length > 5){
      newState.disabled = false;
    } if(this.state.code.length < 5){
      newState.disabled = true;
    }
    this.setState({newState})
  }

  checkValidation = (event) => {
    event.preventDefault();
    if(this.state.code.length > 5){
      this.props.handleJoinGame(this.state.code);
    } 
  }
  
  render(){
    return (
      <div>
        <div>
        <p>Enter your code here to join a game</p>
        <form onSubmit={this.checkValidation} noValidate autoComplete="off">
          <TextField
            id="code"
            label="code"
            margin="normal"
            onChange={this.handleOnChange}
          />
          <Button
            type='submit' 
            raised 
            color="primary"
            disabled={this.state.disabled}
            >Start</Button>
       </form> 
      </div>
      </div>
    )
  }
}

export default JoinGame;