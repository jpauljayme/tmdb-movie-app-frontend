import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL="http://localhost:8080/api/";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
