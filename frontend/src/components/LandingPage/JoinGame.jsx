import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class JoinGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      code: '',
      disabled: true,
      name: '',
      open: false
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
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleOnClick = () => {
    this.props.handleStartGame(this.state.name);
    this.setState({ open: false });
  };

  handleOnNameChange = (event) => {
    this.setState({ name : event.target.value })
  }
  
  render(){
    return (
      <div>
        <div>
        <p>Enter your code here to join a game</p>
        <form onSubmit={this.checkValidation} noValidate autoComplete="off">
          <Button
            type='submit' 
            raised 
            color="primary"
            disabled={this.state.disabled}
            >Start</Button>
            <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Create a Game</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To create a game, please enter your name here. We will send you a code that you can share for others to join.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="name"
              type="name"
              onChange={this.handleOnNameChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleOnClick} color="primary">
              State Game
            </Button>
          </DialogActions>
        </Dialog>
       </form> 
      </div>
      </div>
    )
  }
}

export default JoinGame;