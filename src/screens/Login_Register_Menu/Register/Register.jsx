import React from 'react'
import s from './../Login_Register.module.css';
import g from '../../../Templates/Style.module.css';

class Register extends React.Component {
    render() {
        return (
            <div className={g.background}>
                <div className={s.window}>
                    <div className={s.header}>
                        <strong>���������</strong>
                    </div>
                    <div className={s.btns}>
                        <button className={s.btn_google}>����� � Google</button>
                        <button className={s.btn}>����� � Facebook</button>
                        <div className={s.info}>
                            <div className={s.title}>EMAIL</div>
                            <div className={s.inp_wrapper}><div className={s.icon}></div><input></input></div>
                        </div>

                        <div className={s.info}>
                            <div className={s.title}>������</div>
                            <div className={s.inp_wrapper}><div className={s.icon}></div><input></input></div>
                        </div>
                        <button className={s.btn}>���������� � Email</button>
                        <div className={s.account}>��� � ������?</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;