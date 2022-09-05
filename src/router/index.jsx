/*
* APP下面有home 和list 和detail
*
*react-router-dom 中有两种模式 一种是BrowseRouter(history模式) HashRouter(Hash模式)
* */
import APP from '../App10'
import Home from '../page/Home'
import Detail from '../page/Detail'
import List from '../page/List'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//定义一个路由
const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<APP/>}> </Route>

      <Route path="/home" element={<Home/>}></Route>
      <Route path="/detail" element={<Detail/>}></Route>
      <Route path="/list" element={<List/>}></Route>
    </Routes>
  </BrowserRouter>

)
export default BaseRouter

