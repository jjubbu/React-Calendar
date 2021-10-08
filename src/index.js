import React from 'react';
import ReactDOM from 'react-dom';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"

import store from "./redux/store";
import { GlobalStyle } from './style/global';
import "./style/font.css"

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
