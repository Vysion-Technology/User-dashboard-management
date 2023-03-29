import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './components/Account/Login';
import FrontPage from './components/FrontPage';
// import Home from './components/pages/Home';
import Formed from './components/Formed';
// import SideBar from './components/Industries/sidebar';
// import Frame1 from './components/check/Frame1';
// import Component1 from './components/check/Component1';
// import Admin from './components/Industries/myteam/admin';
// import AdminSection from './components/Industries/myteam/admin';
// import ManagerSection from './components/Industries/myteam/manager';

// import MyTeamPage from './components/Industries/myteam/myteam';
// import IndustryPage from './components/Industries/industries';
import Verification from './components/Verification';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Frame1/> */}
    {/* <SideBar/> */}
    {/* <ManagerSection/> */}
    {/* <Frame48/> */}
    {/* <MyTeamPage/> */}
    {/* <IndustryPage/> */}
    {/* <Component1/> */}
    {/* <LoginPage/> */}
    {/* <Formed/> */}
    {/* <FrontPage/> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
