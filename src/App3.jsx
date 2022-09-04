import React from 'react';

//子组件
function Child(props){
    console.log('子组件的props',props.num);
    return <h2>child组件</h2>
}

//父组件
function Father(props) {
    return (
        <Child num={props.num}/>
    )
}


//顶级组件
const App3 = () => {
    return (
        <>
            App3
            <Father num={123}/>
        </>
    );
};

export default App3;