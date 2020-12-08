import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './ViewComponents/homepage/serviceWorker';
import { Provider } from 'react-redux';
// import {createStore, compose} from 'redux';
// import ReducerUtils from './Store/Reducers/ReducerUtils';
import store from './Store/Store';
import UserProvider from './login/userProvider';
import { CookiesProvider } from 'react-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';
// serviceWorker.unregister();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </UserProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
