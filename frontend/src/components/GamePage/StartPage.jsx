import React, { Component } from "react";

class StartPage extends Component {
  constructor(props) {
        super(props);
        this.state = {

        } // end of state   
  }// end of constructor
    

    render() {
      return (
        <div>
          <h1>Welcome to the Start Page</h1>
          <p>To have friends join share this link!<span><a href="#" > link</a></span></p>
          <button type="button" onClick={this.props.handleStartGame}>Start The Game</button>
        </div>
      )
    } 

}

export default StartPage;
