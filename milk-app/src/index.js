import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './SignIn';
import reportWebVitals from './reportWebVitals';
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDAakGtZnsBWA5wtMVDLnSJMJi0Yqnb_-g",
  authDomain: "vacathon-1ba21.firebaseapp.com",
  databaseURL: "https://vacathon-1ba21.firebaseio.com",
  projectId: "vacathon-1ba21",
  storageBucket: "vacathon-1ba21.appspot.com",
  messagingSenderId: "586328858963",
  appId: "1:586328858963:web:6ccdf03df5e8a88162c1a6",
  measurementId: "G-F6R7EXKE9J"
};

firebase.default.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
