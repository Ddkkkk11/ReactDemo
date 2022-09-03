import React from "react";
const msg = 'App';
let flag = true; //true表示粉色 false 表示蓝色
let arr = ['1', '2', '3'];
export  default class App1 extends React.Component{
    render() {
        return(
            <>
                <h1>helloWorld</h1>
                <h2>{msg}</h2>
                {/*你要写一个js的注释 所以你得写上花括号*/}
                <label htmlFor="username">用户名：</label>
                <input type="text" id="username"/>
                <div className="box">盒子</div>
                <div style={{background:flag ? 'pink' : 'blue'}}>{1+1}</div>
                <hr/>
                <ul >
                    {
                        //react中的列表循环有且只有map可以使用
                        //map有返回值 forEach没有
                        arr.map((item,index)=> {
                            return <li key={index}>{item},{index}</li>
                        })

                    }
                </ul>
            </>
        )
    }
}
