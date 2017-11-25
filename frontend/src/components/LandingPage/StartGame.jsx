import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class StartGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      open: false,
      disabled: true
    }
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleStartGame(this.state.name);
    this.setState({ open: false });
  };

  handleOnNameChange = (event) => {
    let newState = this.state
    if(this.state.name){
      newState.name = event.target.value
      newState.disabled = false
      this.setState({newState})
    } else {
      newState.name = event.target.value
      newState.disabled = true
      this.setState({newState})
    }
  }

  handleOnCancel = () => {
    this.setState({ open: false });
  }

  render(){
    return(
      <div>
        <p>Click here to Host a Game</p>
        <Button 
          raised 
          color="primary"
          onClick={this.handleClickOpen}
          >Start</Button>
        <Dialog open={this.state.open}>
          <form onSubmit={this.handleOnSubmit}>
          <DialogTitle>Create a Game</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To create a game, please enter your name here. We will send you a code that you can share for others to join.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Your Name"
              onChange={this.handleOnNameChange}
              helperText="Your name is required"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={this.handleOnSumbit} 
              color="primary" 
              type="submit"
              disabled={this.state.disabled}
              >
              State Game
            </Button>
             <Button 
              onClick={this.handleOnCancel} 
              color="default" 
              >
              Cancel
            </Button>
          </DialogActions>
         </form> 
        </Dialog>
      </div>
     ); 
  }
}

export default StartGame;