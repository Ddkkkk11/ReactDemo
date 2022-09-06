import React from 'react'
import { Outlet, Link, useLocation ,useNavigate} from 'react-router-dom'

const App10 = () => {
  const navigate = useNavigate();

  const goDetail = () => {
      //跳转详情页面
    navigate('/detail');
  }
  return (
    <div>
      <ul>
        <li><Link to="/home">首页</Link></li>
        <li><Link to="/list">列表页</Link></li>
        <li><Link to="/detail">详情页</Link></li>
      </ul>
      <button onClick={goDetail}>跳转详情页面</button>
      <hr/>
      <Outlet/>
    </div>

  )
}

export default App10