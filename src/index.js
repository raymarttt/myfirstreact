import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './js/Button';
import reportWebVitals from './reportWebVitals';
import Button from './js/Button';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div>
        <Button/>
    </div>
    <App />
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
