import {useState} from "react";

let msg = 'HelloWorld'
//没有触发视图的东西
function App1() {
    //hook只能用到组件函数中的最顶层
    const [msg,setMsg] = useState('helloWorld');
    console.log(msg)
    /*const fn =()=>{
        msg='你好世界';
        console.log(msg)
    }*/
        return (
            <>
                <h2>{msg}</h2>
                <button onClick={()=>setMsg('你好世界')}>点我一下</button>
            </>
        )
}
export default App1;