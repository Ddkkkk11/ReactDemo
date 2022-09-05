import {createRoot} from "react-dom/client";
// import {Provider} from 'react-redux'
  import Router from './router'

// import store from './store'

createRoot(document.getElementById('root'))
  .render(
    <Router/>
)
