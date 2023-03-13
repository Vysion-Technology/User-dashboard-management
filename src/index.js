import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './components/Account/Login';
import FrontPage from './components/FrontPage';
// import Home from './components/pages/Home';
// import Formed from './components/Formed';
// import Verification from './components/Verification';
// import FrontPage from './components/FrontPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <LoginPage/>
    {/* <FrontPage/> */}
    {/* <Home/> */}
    {/* <Formed/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
