import React ,{useState}  from "react";


//子组件
function Sub(props){

    return (
        <>
            <h2>Sub组件{props.num}</h2>
            <button onClick={() =>props.setNum(567)}>点我修改num的值</button>
        </>
    )

}

//父组件
function Father(props) {
    console.log(props)
    return (
        <Sub num={props.num} setNum={props.setNum}/>
    )
}


//顶级组件
const Child = () => {
    const [num,setNum] = useState(234);
    //提供给子组件修改num的函数
  /*  const changeNumFun = (arg) =>{
        // setNum('asdasd');
    setNum(arg);
    }*/
    return (
        <>
            App3
            <Father num={num} setNum={setNum}/>
        </>
    );
};

export default Child;