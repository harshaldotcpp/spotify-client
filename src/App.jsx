import React from 'react';
import './App.css';
import Login from './Login.jsx'
import MainPage from "./components/MainPage.jsx"
import getAccessToken from "./apiCalls/spotifyAuthontication.js";
import Client from "./urlClasses/client.js";



const client = new Client;

function App() {

  return (
    (client.isLogged())
    ?<MainPage code={client.getToken()} />
    :<Login />
  );
}

export default App;
