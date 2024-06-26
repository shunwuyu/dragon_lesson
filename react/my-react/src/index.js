import ReactDOM from 'react-dom/client';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
// 节点
const element2 = React.createElement('div', {id:'name'}, '郑小辉')
console.log(element2)
// root.render(element)
// react 法宝 JSX语法
// 不是纯js,  react  jsx 语法  js里表达html的
const element = (<h1>郑大辉</h1>)
console.log(element);
// root.render(element)
root.render(element2)