import React, {Component} from 'react';
import StartPage from './StartPage';
import AnsweringPage from './AnsweringPage';
import WaitingPage from './WaitingPage';
import DonePage from './DonePage';

/*
    {
        players: { "123" : "John", "231" : "Beth"},
        host : { id : "123"},
        state: "NEW" | "ANSWERING" | "REVIEWING" | "DONE",
        questions: { "q1" : "Question text", "q2" : "Question text two"},
        answers: {
            "q1" : {
                "a1" : { answer :  "Answer from some player", player_id : "123"}, //player_id optional until game done
                "a2" : { answer :  "Answer from some player", player_id : "123"},
            },
            "q2" : {
                "a111" : { answer :  "Answer from some player", player_id : "123"},
                "a222" : { answer :  "Answer from some player", player_id : "123"},
            }
        },
        current_question: "q1",
        begin_time: "2017-11-25T20:30:00+00:00"
    }
*/


class GamePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: { "123" : "John", "231" : "Beth"},
            host : { id : "123"},
            state: "NEW",
            questions: { "q1" : "Question text", "q2" : "Question text two"},
            answers: {
                "q1" : {
                    "a1" : { answer :  "Answer from some player", player_id : "123"}, //player_id optional until game done
                    "a2" : { answer :  "Answer from some player", player_id : "123"},
                },
                "q2" : {
                    "a111" : { answer :  "Answer from some player", player_id : "123"},
                    "a222" : { answer :  "Answer from some player", player_id : "123"},
                }
            },
            current_question: "q1",
            begin_time: "2017-11-25T20:30:00+00:00"
        }

    } // end of constructor


    handleStartGame = () => {
            let newState = this.state
            newState.state = "ANSWERING"
            console.log("Start Game = change State")
            this.setState({newState})
        }
    
    handleOnSaveAnswers = (answer) => {  
        let newState = this.state
        newState.state = "REVIEWING"
        newState.answers.q1.a1 = answer
        console.log("answer = ", answer)
        this.setState({newState})
    }    

    render() {
        if(this.state.state === "NEW") {
            return (
                <div>
                    <span>{this.props.match.params.id}</span>
                    <StartPage people={this.state.players} handleStartGame={this.handleStartGame}/>
                </div>
            )
        } 
        if(this.state.state === "ANSWERING") {
            return (
                <div>
                    <span>{this.props.match.params.id}</span>
                    <AnsweringPage questions={this.state.questions} handleOnSaveAnswers={this.handleOnSaveAnswers}/>
                </div>
            )
        } 
        if(this.state.state === "REVIEWING") {
            return (
                <div>
                    <span>{this.props.match.params.id}</span>
                    <WaitingPage />
                </div>
            )
        }
        if(this.state.state === "DONE") {
            return (
                <div>
                    <span>{this.props.match.params.id}</span>
                    <DonePage />
                </div>
            )
        }   
    } 

}

export default GamePage;