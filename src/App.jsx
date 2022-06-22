import React from 'react';
import './App.css';
import Login from './Login.jsx'
import MainPage from "./components/MainPage.jsx"
import getAccessToken from "./apiCalls/spotifyAuthontication.js";


  let isCode = new URLSearchParams(window.location.search)
  .get('code');
  
function App() {

  return (
    (isCode)
    ?<MainPage code={isCode} />
    :<Login />
  );
}

export default App;
