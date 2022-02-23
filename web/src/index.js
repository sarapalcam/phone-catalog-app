import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./components/App";
import {Provider} from 'react-redux';
import store from "./redux/store/store"

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <HashRouter>
        <App />
      </HashRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById("root")
);
