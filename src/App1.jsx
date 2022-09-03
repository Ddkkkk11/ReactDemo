import React from "react";
const msg = 'App';
const myStyle = {background:'pink'};
export  default class App1 extends React.Component{
    render() {
        return(
            <div>
                <h1>helloWorld</h1>
                <h2>{msg}</h2>
                <label htmlFor="username">用户名：</label>
                <input type="text" id="username"/>
                <div className="box">盒子</div>
                <div style={myStyle}>{1+1}</div>
            </div>

        )
    }
}