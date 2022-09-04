import React,{useState,useRef} from 'react'

export default function App6() {
  const [value,setValue] = useState('asd');
  const inputValue = (e) =>  setValue(e.target.value);
  const element = useRef(null);
  return (
    <>
     <h3>受控组件</h3>
      <input type="text" value={value} onChange={inputValue}/>
      <button onClick={() => console.log(value)}>获取input的值</button>
      <hr />
      <h3>不受控组件</h3>
      <input type="text"  ref={element}/>
      <button onClick={()=> console.log(element.current.value)}>获取input的值</button>
    </>
  )
}

/* 
  受控组件和不受控组件
  受控组件和不受控组件只存在表单元素
  所谓的受控组件就是表单元素的value需要通过state(useState)来定义
  不受控组件表示表单元素的value无法通过state来获取 ，只能使用ref（useRef）
*/