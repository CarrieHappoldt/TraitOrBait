import React, { Component } from "react";

class AnsweringPage extends Component {
  constructor(props) {
        super(props);
        this.state = {
            answer : ""
        }
    }

    handleOnSaveAnswers = (event) => {
        event.preventDefault();
        this.props.handleOnSaveAnswers(this.state.answer);
    }

    handleOnChange = (event) => {
        let answer = event.target.value;
        this.setState({answer: answer})
    }

    render() {
        return (
            <div>
                <p>You have TIME to answer this question. When you are finished click Submit</p>
                <form onSubmit={this.handleOnSaveAnswers}>
                <p>Question: {this.props.questions.q1}</p>
                    <div>
                        <label>Answer:</label>
                        <textarea onChange={this.handleOnChange}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        )
    } 

}

export default AnsweringPage;
