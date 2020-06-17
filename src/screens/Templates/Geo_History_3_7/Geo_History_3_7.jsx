import React from 'react';
import s from './Geo_History_3_7.module.css';
import g from './../Style.module.css';
import Header from '../Objects/Header/Header';
import Answer from '../Objects/Answer/Answer';
import Question from '../Objects/Question/Question';
import Next from '../Objects/Next/Next';
import Topic from '../Objects/Topic/Topic';
import Comment from '../Objects/Comment/Comment';
import Video from '../Objects/Video/Video';

class Geo_History_3_7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            checkedAnswers: props.checkedAnswers,
            number: props.number,
            data: props.data,
            active: props.active,
            answered: props.answered,
            currentAnswer: props.currentAnswer
        }
        //console.log(props.data);
=======
            number: props.number,
            data: props.data,
            active: props.active,
            answered: props.answered
        }
        console.log(props.data);
>>>>>>> 452f1f746b412bf90d9f834e5752032925e9909f
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            this.setState({
<<<<<<< HEAD
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

        let curAnswer = this.state.currentAnswer
        let ans = [];
        for(let i = 0; i < curAnswer.length; i++) {
            if(curAnswer[i] == answer) {
                
            }
            else {
                ans.push(curAnswer[i]);
            }
        }
        if(ans.length != curAnswer.length) {
            this.setState({
                currentAnswer: ans
            })
            return;
        }

        if(curAnswer.length == 3){
            //
        }else curAnswer.push(answer);
        curAnswer.sort();
        this.setState({
            currentAnswer: curAnswer
        })
    }

    nextValidation(currentAnswer){
        if(this.state.currentAnswer.length == 3)
            return true;
        else return false;
    }

=======
                number: this.props.number,
                data: this.props.data,
                active: this.props.active,
                answered: this.props.answered
            })
        }
    }
>>>>>>> 452f1f746b412bf90d9f834e5752032925e9909f
    render() {
        console.log(this.state.data.evaluate(this.state.currentAnswer))

        if(typeof this.state.currentAnswer == "undefined"){
            this.setState({
                currentAnswer: []
            })
            return(<div></div>)
        }
        console.log(this.state.currentAnswer);
        let isNextAllowed = this.nextValidation(this.state.currentAnswer);
        const data = this.state.data;
        let hidden = this.state.answered && this.props.isPractice;
        return (
            <div>
<<<<<<< HEAD
                <Question 
                    question={data.getQuestion()}
                    active={this.state.active}
                />
                <div style={{marginBottom:20}}><strong>Обери ТРИ відповіді:</strong></div>
                <div className={s.question_body}>
                    <div className={s.answers}>
                        <Answer 
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getHistory37Questions()[0]}
                            explanation={data.getHistory37Explanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect("1")}
                        />
                        <Answer 
                            answered={this.state.answered}
                            letter={"2"}
                            question={data.getHistory37Questions()[1]}
                            explanation={data.getHistory37Explanations()[1]}
                            hidden={hidden}
                            updateCurrentAnswer={this.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect("2")}
                        />
                        <Answer 
                            answered={this.state.answered}
                            letter={"3"}
                            question={data.getHistory37Questions()[2]}
                            explanation={data.getHistory37Explanations()[2]}
                            hidden={hidden}
                            updateCurrentAnswer={this.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect("3")}
                        />
                        <Answer 
                            answered={this.state.answered}
                            letter={"4"}
                            question={data.getHistory37Questions()[3]}
                            explanation={data.getHistory37Explanations()[3]}
                            hidden={hidden}
                            updateCurrentAnswer={this.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect("4")}
                        />
                    </div>
                    <div className={s.answers}>
                        <Answer 
                            answered={this.state.answered}
                            letter={"5"}
                            question={data.getHistory37Questions()[4]}
                            explanation={data.getHistory37Explanations()[4]}
                            hidden={hidden}
                            updateCurrentAnswer={this.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect("5")}
                        />
                        <Answer 
                            answered={this.state.answered}
                            letter={"6"}
                            question={data.getHistory37Questions()[5]}
                            explanation={data.getHistory37Explanations()[5]}
                            hidden={hidden}
                            updateCurrentAnswer={this.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect("6")}
                        />
                        <Answer 
                            answered={this.state.answered}
                            letter={"7"}
                            question={data.getHistory37Questions()[6]}
                            explanation={data.getHistory37Explanations()[6]}
                            hidden={hidden}
                            updateCurrentAnswer={this.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect("7")}
                        />
                    </div>
                </div>
                <Next 
=======
                <div style={{ marginBottom: 20 }}><strong>Обери ТРИ відповіді:</strong></div>
                <div className={s.question_body}>
                    <div className={s.answers}>
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                    </div>
                    <div className={s.answers}>
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                    </div>
                </div>
                <Next
>>>>>>> 452f1f746b412bf90d9f834e5752032925e9909f
                    answered={this.state.answered}
                    updateQuestion={this.props.updateQuestion}
                    number={this.state.active}
                    currentAnswer={this.state.currentAnswer}
                    updateAnswers={this.props.updateAnswers}
                    isPractice={this.props.isPractice}
<<<<<<< HEAD
                    isNextAllowed={this.nextValidation()}
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
=======
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
>>>>>>> 452f1f746b412bf90d9f834e5752032925e9909f
                    hidden={hidden}
                />
            </div>
        );
    }
}

export default Geo_History_3_7;