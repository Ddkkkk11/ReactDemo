import React, {Component} from 'react';

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
    }

    render() {
        return (
            <div>
                <h1>当前数字为：{this.state.number}</h1>
                <button onClick={() => this.setState({
                    number: this.state.number + 1
                })}>按钮1
                </button>
            </div>
        );
    }
}

class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}

const per = new Person('xdd');
per.sayName();


export default Count;
