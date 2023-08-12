// src/index.js
import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
