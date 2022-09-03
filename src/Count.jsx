import {useState} from "react";

let msg = 'HelloWorld'
//没有触发视图的东西
function Count() {
    //hook只能用到组件函数中的最顶层
    const [num,setNum] = useState(1);
    // console.log(msg)
    /*const fn =()=>{
        msg='你好世界';
        console.log(msg)
    }*/
    return (
        <>
            <h2>{num}</h2>
            <button onClick={()=>setNum(num+1)}>点我一下</button>
        </>
    )
}
export default Count;