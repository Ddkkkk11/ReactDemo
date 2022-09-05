import React, { useState, memo } from 'react'

const Child = memo(() => {
  console.log(123);
  return <>
    <h2>我是子组件</h2>

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
  const [num, setNum] = useState(1)
  return (
    <div>
      <h2>父组件,Num为：{num}</h2>
      <button onClick={() => setNum(num + 1)}>累加</button>
      <hr/>
      <Child/>
    </div>
  )
}

export default App7