import React from 'react';
import './App.css';
import Login from './Login.jsx'
import MainPage from "./components/MainPage.jsx"
import getAccessToken from "./apiCalls/spotifyAuthontication.js";
import Client from "./urlClasses/client.js";



const client = new Client;
const isLogged = client.isLogged();

function App() {

  return (
    (isLogged)
    ?<MainPage code={isLogged} />
    :<Login />
  );
}

export default App;
