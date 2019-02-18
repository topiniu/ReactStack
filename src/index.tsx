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
