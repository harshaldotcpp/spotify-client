import React from 'react';
import './App.css';
import Login from './Login.jsx'
import MainPage from "./components/MainPage.jsx"


  let a = window.location.search;
  let urlparams = new URLSearchParams(a);
  let code = urlparams.get("code");

function App() {
  return ( (code)
    ?<MainPage code={code} />
    :<Login />
   
  );
}

export default App;
