import React, {Component} from 'react'

class GamePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>{this.props.match.params.id}</span>
        )
    } 

}

export default GamePage;