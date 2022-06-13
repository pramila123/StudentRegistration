import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import {Provider} from 'react-redux'

import store from './components/Redux/store';
import { listStudent } from './components/Redux/action';
const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(listStudent())
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);


