import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from "./contexts/UserContext"
import { ElderContextProvider } from './contexts/ElderContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContextProvider>
      <ElderContextProvider>
        <App />
      </ElderContextProvider>
    </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();