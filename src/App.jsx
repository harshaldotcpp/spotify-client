import React from 'react';
import './App.css';
import Login from './Login.jsx'
import MainPage from "./components/MainPage.jsx"
import getAccessToken from "./apiCalls/spotifyAuthontication.js";


  let code = new URLSearchParams(window.location.search)
  .get('code');
  
function App() {

  return ((code)
    ?<MainPage code={code} />
    :<Login />
  );
}

export default App;
