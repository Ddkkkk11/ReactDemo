import React, {Component} from 'react';

class SetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
        this.addNum = this.addNum.bind(this);
    }
    render() {
        return (
            <div>
                <h1>当前数字为：{this.state.number}</h1>
                {/*箭头函数写法*/}
                <button onClick={() => this.setState({
                    number: this.state.number + 1
                })}>按钮1
                </button>
                {/*改变this函数*/}
                <button onClick={this.addNum.bind(this)}>按钮2
                </button>
                <button onClick={this.addNum}>按钮3</button>
                {/*    箭头函数规避this写法*/}
                <button onClick={() => this.addNum()}>按钮4</button>
            </div>
        );

    }
    addNum(){
        this.setState({
            number:this.state.number + 1,
        })
    }

}
export default SetState;
