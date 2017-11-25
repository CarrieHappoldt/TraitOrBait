import React, {Component} from 'react'

/*
    {
        players: { "123" : "John", "231" : "Beth"}
        host : { id : "123"},
        state: "NEW" | "ANSWERING" | "REVIEWING" | "DONE",
        questions: { "q1" : "Question text", "q2" : "Question text two"},
        answers: {
            "q1" : {
                "a1" : { answer :  "Answer from some player", player_id : "123"}, //player_id optional until game done
                "a2" : { answer :  "Answer from some player", player_id : "123"},,
            },
            "q2" : {
                "a111" : { answer :  "Answer from some player", player_id : "123"},,
                "a222" : { answer :  "Answer from some player", player_id : "123"},,
            }
        },
        current_question: "q1",
        begin_time: "2017-11-25T20:30:00+00:00"
    }

*/


class GamePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>{this.props.match.params.id}</span>
            </div>
        )
    } 

}

export default GamePage;