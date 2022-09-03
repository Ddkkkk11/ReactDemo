import {useState,useEffect} from 'react'

export default function App2() {
  const [num,setNum] = useState(1);
  const [num1,setNum1] = useState(1);
  /* useEffect(() =>{
    //模拟mounted,一般在这个位置写ajax
    console.log('挂载完成');
  }) */

  //监测数据更新 监测那个数据更新 就把变量填写到数组中
  //当要监测的是页面中所有的变量，可以在数组中填写全部变量 2是不要写数组 
  //如果不想要监测数据 直接填写空数组
 /*  useEffect(()=>{
    console.log('num1更新了');
  },[num]) */

  //模拟beforeDestory
  useEffect(()=>{
      return ()=>{
        //一般在这个阶段处理垃圾回收 删除数据 或者垃圾回收
        console.log('销毁前');
      }
  },[])
  return (
      <>
          <h1>{num}</h1>
          <button onClick={()=> setNum(num+1)}>我是按钮</button>
          <hr />
          <h1>{num1}</h1>
          <button onClick={()=> setNum1(num1+1)}>我是按钮</button>
      </>
    )
}

/* 
  函数式组件没有生命周期
    数据请求 监测数据更新 垃圾回收

    useEffect 
*/