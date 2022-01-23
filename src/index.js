import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from './components/auth/Register';
import Login from './components/auth/Login'
import Payment from './components/payments/Payment';
import CheckOut from './components/products/CheckOut';
import './index.css';
import { Provider } from 'react-redux';
import store from './store'
import App from './App';
ReactDOM.render(

<Provider store={store}>
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='payment' element={<Payment/>}/>
    <Route  path='register' element={<Register />} />
    <Route  path='login' element={<Login />} />
    <Route path='cart' element={<CheckOut />}/>
  </Routes>
  </BrowserRouter>
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
