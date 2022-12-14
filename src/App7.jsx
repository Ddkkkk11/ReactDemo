import React, { useState, memo, useContext, createContext, useCallback, useMemo } from 'react'

const Child = memo((props) => {
  console.log(123);
  return <>
    <h2>我是子组件</h2>
    <button onClick={() => props.doSth()}>累加</button>
  </>

})
/*
function Child(){
  console.log(123)
        return (
          <>
            <h2>我是子组件</h2>
          </>
        )

}*/
const App7 = () => {
  const [num, setNum] = useState(1);
  /*
  * setNum(newValue)  使用新值强行覆盖初始值旧值
  * set Num( (num) =>num+1); 不断使用新值覆盖旧值
  *
  *
  *
  * */
  const doSth = useCallback(()=> setNum(num =>num+1),[]);
  //useMemo 需要返回一个回调
  /*const doSth = useMemo(() => {
    return () =>{
      setNum((num) => num+1)
    }
  });*/
  return (
    <div>
      <h2>父组件,Num为：{num}</h2>
      <hr/>
        <Child doSth={doSth}/>
    </div>
  )
}

export default App7