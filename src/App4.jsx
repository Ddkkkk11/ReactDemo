import React ,{useState,createContext}  from "react";
//创建上下文空间（创建后会得到两个东西） Provider提供器  Consumer 消费者
const NumContext = createContext();
//子组件
function Sub(props){

    return (
        <NumContext.Consumer>
            {
                ({num,setNum}) =>(
                    <>
                        <h2>{num}</h2>
                        <button onClick={() =>setNum('qwe')}>我是按钮</button>
                    </>
                )
            }
        </NumContext.Consumer>
    )

}

//父组件
const Father = ()=> <Sub/>


//顶级组件
const App4 = () => {
    const [num,setNum] = useState(234);
    return (
        <NumContext.Provider value={{num,setNum}}>
            <Father />
        </NumContext.Provider>
    );
};

export default App4;