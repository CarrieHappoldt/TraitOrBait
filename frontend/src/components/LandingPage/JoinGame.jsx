import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
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

  handleOnCodeChange = (event) => {
    let newState = this.state
    newState.code = event.target.value
    if(this.state.code.length > 5){
      newState.disabled = false;
      this.setState({newState})
    } if(this.state.code.length < 5){
      newState.disabled = true;
      this.setState({newState})
    }
  }

  checkValidation = (event) => {
    if(this.state.code.length > 5){
      this.props.handleJoinGame(this.state.name, this.state.code);
    } 
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.checkValidation();
    this.setState({ open: false });
  };

  handleOnNameChange = (event) => {
    this.setState({ name : event.target.value })
  }
  
  render(){
    return (
      <div>
        <div>
        <p>Click here to Join an exstisting game</p>
          <Button 
            raised 
            color="primary"
            onClick={this.handleClickOpen}
            >Start</Button>
          <Dialog open={this.state.open}>
          <form onSubmit={this.handleOnSubmit}>  
          <DialogTitle>Join a Game</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To join a game, please enter your name here and the game code
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="name"
              onChange={this.handleOnNameChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="code"
              label="code"
              onChange={this.handleOnCodeChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={this.handleOnSubmit} 
              color="primary"
              disabled={this.state.disabled}
              type="submit"
              >
              Join
            </Button>
          </DialogActions>
          </form>
        </Dialog>
      </div>
      </div>
    )
  }
}

export default JoinGame;