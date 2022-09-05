//仓库入库文件
//引入reducer
import reducer from './reducer';
//创建仓库
import { createStore,  } from 'redux'

const store = createStore(reducer);
//导出这个仓库
 export  default  store;