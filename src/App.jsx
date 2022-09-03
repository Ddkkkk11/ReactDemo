import React from "react";

const msg = '你好世界';
//类组件
export default class  App extends React.Component{
        render() {
            return (
                    <div>
                        <h1>HelloWorld</h1>
                         <h2>{msg}</h2>
                    </div>
            )
        }

}
/*
* 1.文件名可以是jsx或者js,不影响文件的代码
* 2.组件名称必须大写
* 3.出现（）代表其中想写html
* 4.html出现花括号代表其中想写js
* 5.export default可以写道class前面
* 6.jsx语法可以在vscode中设置
*
*
* */