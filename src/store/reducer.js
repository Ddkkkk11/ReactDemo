//创建初始状态。并且导出一个函数
const defaultState = {
  num:1
}
export  default (state = defaultState,action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === 'addNum'){
    newState.num ++;
    console.log(newState)
  }
  return newState;
}