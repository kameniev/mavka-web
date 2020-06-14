import React from 'react'
import s from './ABCDE.module.css'
import g from './../Style.module.css';
import Party from "../Icon/Party";
import Question from '../Objects/Question/Question.jsx';
import Answer from '../Objects/Answer/Answer.jsx';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';
import { Component } from 'react';

class ABCDE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedAnswers: props.checkedAnswers,
            number: props.number,
            data: props.data,
            active: props.active,
            answered: props.answered,
            currentAnswer: props.currentAnswer
        }
        console.log(props.data);
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            console.log('sos' + this.props.answered)
            this.setState({
                checkedAnswers: this.props.checkedAnswers,
                number: this.props.number,
                data: this.props.data,
                active: this.props.active,
                answered: this.props.answered,
                currentAnswer: this.props.currentAnswer
            })
        }
    }

    updateCurrentAnswer = (answer) => {
        this.setState({
            currentAnswer: answer
        })
    }
    render() {
        const data = this.state.data;
        let hidden = this.state.answered;
        console.log("ABCDE.jsx");
        console.log(this.props.checkedAnswers);
        console.log(this.state.checkedAnswers);
        return (
            <div className={g.background}>
                <div className={[s.page, g.page_].join(' ')}>
                    <Header
                        checkedAnswers={this.state.checkedAnswers}
                        subject={data.getSubject()}
                        year={data.getYear()}
                        session={data.getSession()}
                        list={this.state.number}
                        updateQuestion={this.props.updateQuestion}
                        active={this.state.active}
                    />
                    <div className={s.question_body}>
                        <div className={s.question_form}>
                            <Question
                                question={data.getQuestion()}
                                active={this.state.active}
                                />
                            <Topic
                                topic={data.getTopic()}
                                hidden={hidden}
                                />
                            <Comment
                                comment={data.getComment()}
                                hidden={hidden}
                                />
                            <Video 
                                hidden={hidden}
                            />
                        </div>

                        <div className={s.answers_frame}>
                            <p className={g.choose}><strong>Обери одну відповідь</strong></p>
                            <div className={s.answers}>
                                <Answer 
                                    answered={this.state.answered}
                                    letter={"A"}
                                    question={data.getQuestions()[0]}
                                    explanation={data.getExplanations()[0]}
                                    hidden={hidden}
                                    updateCurrentAnswer={this.updateCurrentAnswer}
                                    currentAnswer={this.state.currentAnswer}
                                />
                                <Answer
                                    answered={this.state.answered}
                                    letter={"Б"}
                                    question={data.getQuestions()[1]}
                                    explanation={data.getExplanations()[1]}
                                    hidden={hidden}
                                    updateCurrentAnswer={this.updateCurrentAnswer}
                                    currentAnswer={this.state.currentAnswer}
                                />
                                <Answer
                                    answered={this.state.answered}
                                    letter={"В"}
                                    question={data.getQuestions()[2]}
                                    explanation={data.getExplanations()[2]}
                                    hidden={hidden}
                                    updateCurrentAnswer={this.updateCurrentAnswer}
                                    currentAnswer={this.state.currentAnswer}
                                />
                                <Answer
                                    answered={this.state.answered}
                                    letter={"Г"}
                                    question={data.getQuestions()[3]}
                                    explanation={data.getExplanations()[3]}
                                    hidden={hidden}
                                    updateCurrentAnswer={this.updateCurrentAnswer}
                                    currentAnswer={this.state.currentAnswer}
                                />
                                <Answer
                                    answered={this.state.answered}
                                    letter={"Д"}
                                    question={data.getQuestions()[4]}
                                    explanation={data.getExplanations()[4]}
                                    hidden={hidden}
                                    updateCurrentAnswer={this.updateCurrentAnswer}
                                    currentAnswer={this.state.currentAnswer}
                                />
                            </div>
                            <Next 
                                answered={this.state.answered}
                                updateQuestion={this.props.updateQuestion}
                                number={this.state.active}
                                currentAnswer={this.state.currentAnswer}
                                updateAnswers={this.props.updateAnswers}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ABCDE;