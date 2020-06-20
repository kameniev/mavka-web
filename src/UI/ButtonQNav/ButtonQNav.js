import React from "react";
import g from './../../screens/Templates/Style.module.css';
export default props => (
    <button className={g.btnqnav} onClick={props.pushed} style={{
        backgroundColor: props.backColor,
        borderRadius: "5px",
        
        border: "1px solid " + props.backColor,
        width: '30px',
        marginLeft: props.marginLeft,
        height: '20px',
        verticalAlign:'baseline',
        color: props.color,
        textAlign:'center',
        fontSize: '18px',
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
        cursor:'pointer',
    }}>{props.number}</button>
);