import React from 'react'
import style from './../styles/Login.module.css'
import {Link} from 'react-router-dom'
export class Login extends React.Component {


    constructor(props) {
        super(props)
    }
    render() {
        
        return (
            <div className={style.base_container}>
                <p>mavka</p>
                <p>Увійти</p>
                <div className={style.inputs}>
                    <p>Електронна пошта</p>
                    <input placeholder='Email'></input>
                    <p>Пароль</p>
                    <input type="password" placeholder='Пароль'></input>
                </div>
                <div className={style.btn_log_in}><Link to="/home"><button className={style.log_in}>Вхід</button></Link></div>
                <div className={style.social_or}>
                    <p>Або</p>
                    <p>Увійти разом з...</p>
                </div>
                <div className={style.social}>
                    <a href="#" class={style.facebook}>Facebook</a>
                    <a href="#" class={style.google}>Google</a>
                </div>
            </div>
        )
    }
}