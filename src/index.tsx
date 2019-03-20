import * as React from "react";
import * as ReactDOM from "react-dom";
import RouteC from "./router";
import { Provider } from "react-redux";
import store from "./redux/stores";


ReactDOM.render(
  <Provider store={store}>
    <RouteC />
  </Provider>,
  document.getElementById("root")  
);


if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js',{scope: '/'}).then((registration:any) => {
      console.log('serviceWorker 注册成功')
    }).catch((err:any) => {
      console.log('serviceWorker注册失败：' + err)
    })
  })
}