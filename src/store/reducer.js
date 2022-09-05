//创建初始状态。并且导出一个函数
const defaultState = {
  num: 1
}
//eslint-disable-next-line
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'addNum' :
      newState.num += action.value
      break
    default:
      break

  }

  return newState
}