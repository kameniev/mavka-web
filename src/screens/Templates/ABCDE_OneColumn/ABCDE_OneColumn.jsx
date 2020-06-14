import React from 'react'
import s from './ABCDE_OneColumn.module.css';
import g from './../Style.module.css';
import Party from "../Icon/Party";
import Answer from '../Objects/Answer/Answer.jsx';
import Question from '../Objects/Question/Question';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';
class ABCDE_OneColumn extends React.Component {
    render() {
        return (
            <div className={g.background}>
                <div className={[s.page, g.page_].join(' ')}>
                    <Header />
                    <div className={s.question_body}>
                        <Question />
                        <div className={s.answers_frame}>
                            <p className={g.choose}><strong>Обери одну відповідь</strong></p>
                            <div className={s.answers}>
                                <Answer />
                                <Answer />
                                <Answer />
                                <Answer />
                                <Answer />
                            </div>
                            <Next />
                            <Topic />
                            <Comment />
                            <Video />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ABCDE_OneColumn;