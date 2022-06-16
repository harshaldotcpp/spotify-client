import React from "react";

const TOKEN = "https://accounts.spotify.com/api/token";
const client_id = "a201e1c8ee7c4676886781255be2c68b";
const client_secret = "43599d0109654011a6a3295b65f2eb1b";
let access;
let refresh;


function getAccessToken(code){
  /* 
    this function return access TOKEN
    this function invoked first when 
    command entered in main-page
    to get access_token and start
    making api calls
  */
  
  
 let [access_token,setAccessToken] = React.useState();
 let [refresh_token,setRefreshToken] = React.useState();
 let [expires_in,setExpireIn] = React.useState();
 function fetchAccessToken(code){
  //console.log(code)
    let body = "grant_type=authorization_code";
    body += "&code=" + code;
    body += "&redirect_uri=" + encodeURI("http://localhost:7700/index.html");
    body += "&client_id="+client_id;
    body += "&client_secret=" + client_secret;
    callAuthorizationApi(body);
  }

  function callAuthorizationApi(body){
    /*
      post request for access_token
    */
    let xhr = new XMLHttpRequest();
    xhr.open("POST",TOKEN,true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhr.setRequestHeader("Authorization","Basic "+btoa(client_id +":"+client_secret));
    xhr.send(body);
    xhr.onload = handleAutorizationResponse;
  
  }
  function handleAutorizationResponse(){
     if(this.status === 200){
       var data = JSON.parse(this.responseText);
       if(data.access_token !=undefined)
        access = data.access_token;
       if(data.refresh_token != undefined)
        refresh = data.refresh_token;
        
        
  
        setAccessToken(access);
        setRefreshToken(refresh);
     }
    else if(this.status === 400)
      window.location = "https://accounts.spotify.com/authorize?client_id=a201e1c8ee7c4676886781255be2c68b&response_type=code&redirect_uri=http://localhost:8158/index.html&scope=user-read-recently-played%20user-read-playback-position%20user-top-read";        
  
  }

React.useEffect(()=>{
  /* 
    this function will fetch access_token   and set as state of this function and
    return that access token to main-page
    for api calls
    once post request load we set acces_token
    and return that token from where 
    this whole function was called
  */
  
    fetchAccessToken(code);
   
 },[code]);
 
 return [access_token,refresh_token];

}

export default getAccessToken;

