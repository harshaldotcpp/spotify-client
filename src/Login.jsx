import React from "react";
import "./Login.css"


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=a201e1c8ee7c4676886781255be2c68b&response_type=code&redirect_uri=http://localhost:8158/index.html&scope=user-read-recently-played%20user-read-currently-playing%20user-read-playback-position%20user-top-read";        


function Login(){
  
  return(
    <div id="login-page" >
      <div className="login-div" >
        <h1> Log into your Spotify </h1>
        <a href={AUTH_URL} > login spotify </a>
      </div> 
    </div> 
  )
}

export default Login