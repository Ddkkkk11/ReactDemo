import ReactDOM from 'react-dom';
// import React from 'react';
import App from "./App2";

ReactDOM.render(<App/>,document.getElementById('root'));
setTimeout(()=>{
  ReactDOM.render(<input/>,document.getElementById('root'));
},3000)