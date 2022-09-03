import React, {Component} from 'react';
let number = 1;

class App2 extends Component {
    state={
        number:1,
    }
    render() {
        return (
            <div>
                <h1 >当前数字为：{this.state.number}</h1>
                <button onClick={() =>this.setState({
                    number:this.state.number+1
                })}>点我+1</button>
            </div>
        );
    }
}

export default App2;
/*
*  data => setData
*   state => setState
* */