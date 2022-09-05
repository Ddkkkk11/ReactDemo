import React from 'react'
import {connect} from 'react-redux'

const App9 = (props) => {
  return (
      <>
        <h2>阿萨德</h2>
        <h1>当前数字为{props.num}</h1>
        <button onClick={() => props.add()}>累加</button>
      </>
  )
}
//状态映射 将reducer中的state映射成props 让开发者可以在组件中使用props.num 去调用state的num
const mapStateToProps = (state) => {
      return {
        num : state.num,
      }

}
//事件派发映射
  //将reducer中的事件映射成props让开发者可以在组件中使用 props.addNum();

const mapDispatchToProps = (dispatch) => {
  return {
    add(){
      const action = {type : 'addNum'};
      dispatch(action);
    }
  }
}
// export default connect('两个映射')('当前组件名称') App9
export default connect(mapStateToProps,mapDispatchToProps)(App9)
