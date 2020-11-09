import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './Components/homepage/serviceWorker';
import {Provider} from 'react-redux';
// import {createStore, compose} from 'redux';
// import ReducerUtils from './Store/Reducers/ReducerUtils';
import store from './Store/Store';
import UserProvider from './Components/login/userProvider';

// serviceWorker.unregister();

ReactDOM.render(
  <Provider store={store}>
    <UserProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserProvider>
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
