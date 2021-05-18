import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const currentTime = new Date();
console.log(currentTime);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
