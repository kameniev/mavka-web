import React from 'react';
import s from './Super_Open.module.css';
import g from './../Style.module.css';
import Question from '../Objects/Question/Question.jsx';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';
class Open_Ended extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.number,
            data: props.data,
            active: props.active,
            answered: props.answered
        }
        console.log(props.data);
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            this.setState({
                number: this.props.number,
                data: this.props.data,
                active: this.props.active,
                answered: this.props.answered
            })
        }
    }
    
    render() {
        const data = this.state.data;
        let hidden = this.state.answered;

        return (
            <div>
                <div className={s.question_body}>
                    <Question
                        question={data.getQuestion()}
                        active={this.state.active}
                        />
                    <div className={s.main_answers}>
                        <Next />
                        <Topic
                            topic={data.getTopic()}
                            />
                        <Comment
                            comment={data.getComment()}
                            />
                        <Video />
                    </div>
                </div>
            </div>
        )
    }
}

export default Open_Ended;