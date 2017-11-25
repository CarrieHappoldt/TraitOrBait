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
      open: false
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
    return(
      <div>
        <p>Click here to Host a Game</p>
        <Button 
          raised 
          color="primary"
          onClick={this.handleClickOpen}
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
      </div>
     ); 
  }
}

export default StartGame;