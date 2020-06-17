import React from 'react';
import g from './../../Style.module.css';
import Strong from './../../Icon/Strong/Strong';
import QuestionNavPanel from "../../../../UI/QuestionNavPanel";
import { Link } from 'react-router-dom';
import Clock from "../../Icon/Clock";
import Alert from "../../../Alert/Alert";
import s from "../HeaderMobile/HeaderMobile.module.css";
import WavingHand from "../../Icon/WavingHand";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active,
            checkedAnswers: props.checkedAnswers,
            time: 0,
            start: 0,
            isOn: false,
            timeOfStart: Date.now(),
            durationTime: 180 * 60
        }
        this.startTimer = this.startTimer.bind(this);
        this.startTimer();
    }

    startTimer() {
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time,
            isOn: true,
            clicked: false
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            this.setState({
                active: this.props.active,
                checkedAnswers: this.props.checkedAnswers,
            })
        }
    }

    convertTime (time) {
        time = Math.max(time, 0);
        return Math.floor(time / 60) + ":" + (time % 60);
    }

    cancel = () => {
        this.setState({
            clicked: false
        })
    }

    render() {
        let left = Math.max(0, Math.floor(this.state.durationTime - (this.state.time - this.state.timeOfStart) / 1000.0));
        //console.log(this.state.checkedAnswers);

        if (window.innerWidth <= 992) {
            return (
                <div>
                    {(left <= 0 || this.state.clicked) && !this.props.isPractice ? (<Alert
                        time={left}
                        cancel={this.cancel}
                        subject={this.props.subject}
                        updateQuestion={this.props.updateQuestion}
                    />) : null}
                    <div className={s.header}>
                        <div className={s.nav_panel}>
                            <div className={s.nav}>Усі завдання</div>
                            {this.props.isPractice ? (
                                    <div className={g.icon_header}><div><Strong />&nbsp;</div><strong>Практика</strong></div>
                                ) :
                                (
                                    <b className={s.timer}><Clock/>{this.convertTime(Math.floor(this.state.durationTime - (this.state.time - this.state.timeOfStart) / 1000.0))}</b>
                                )
                            }
                            {this.props.isPractice ?
                                (
                                    <button className={g.end} onClick={() => {
                                        this.props.updateQuestion(10000);
                                    }}>Завершити</button>
                                ) :
                                (
                                    <button className={g.end} onClick={() => {
                                        this.setState({
                                            clicked: true
                                        })
                                    }}>Завершити</button>)
                            }
                        </div>
                        <div className={s.tip} >
                            <div className={s.title}> <WavingHand /> <strong>&nbsp;Порада!</strong></div>
                            <div className={s.description}>Гортай сторінку вправо та вліво, щоб переключатися між сусідніми завданнями.</div>
                        </div>
                        <div className={s.tip_1}>
                            <div className={s.title}><strong>{this.props.subject}</strong></div>
                            <div className={s.description}>{this.props.year} {this.props.session} сесія</div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div>
                {(left <= 0 || this.state.clicked) && !this.props.isPractice ? (<Alert
                    time={left}
                    cancel={this.cancel}
                    subject={this.props.subject}
                    updateQuestion={this.props.updateQuestion}
                />) : null}
                <div>
                    <div className={g.question_header}>
                        <div className={g.title_bar}>
                            {this.props.isPractice ? (
                                    <div className={g.icon_header}><div><Strong />&nbsp;</div><strong>Практика</strong></div>
                                ) :
                                (
                                    <b><Clock/>{this.convertTime(Math.floor(this.state.durationTime - (this.state.time - this.state.timeOfStart) / 1000.0))}</b>
                                )
                            }
                            <p><strong>{this.props.subject}</strong> {this.props.year} {this.props.session} сесія</p>
                            {this.props.isPractice ?
                                (
                                    <button className={g.end} onClick={() => {
                                        this.props.updateQuestion(10000);
                                    }}>Завершити</button>
                                ) :
                                (
                                <button className={g.end} onClick={() => {
                                this.setState({
                                    clicked: true
                                })
                            }}>Завершити</button>)
                            }
                        </div>
                    </div>
                    <QuestionNavPanel
                        checkedAnswers={this.state.checkedAnswers}
                        list={this.props.list}
                        updateQuestion={this.props.updateQuestion}
                        active={this.props.active}
                    />
                </div>
            </div>
        );
    }
}

export default Header;
