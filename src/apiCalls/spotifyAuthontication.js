import React from "react";

const TOKEN = "https://accounts.spotify.com/api/token";
const CLIENT_ID = "a201e1c8ee7c4676886781255be2c68b";
const CLIENT_SECRET = "43599d0109654011a6a3295b65f2eb1b";



function getAccessToken(code){
  /* 
    this function return access TOKEN
    this function invoked first when 
    command entered in main-page
    to get access_token and start
    making api calls
  */
  
  
 let [access_token,setAccessToken] = React.useState();
 let [expires_in,setExpireIn] = React.useState();
  
 function fetchAccessToken(code){
  //console.log(code)
    if(!localStorage.getItem("refresh_token")){
      let body = "grant_type=authorization_code";
      body += "&code=" + code;
      body += "&redirect_uri=" + encodeURI("http://localhost:8158/index.html");
      body += "&client_id="+CLIENT_ID;
      body += "&client_secret=" + CLIENT_SECRET;
      callAuthorizationApi(body);
    }
    else{
      let body = "grant_type=refresh_token";
      body += "&refresh_token=" + code;
      callAuthorizationApi(body);
    }
  }

  function callAuthorizationApi(body){
    /*
      post request for access_token
    */
    const request ={
      method:"POST",
      headers :{
        "content-type":"application/x-www-form-urlencoded",
        "Authorization":"Basic "+btoa(CLIENT_ID +":"+CLIENT_SECRET)
      },
      body: body
    }
    
    fetch(TOKEN,request)
    .then((response)=>response.json())
    .then((data)=>{
      handleAutorizationResponse(data)
    });
    
  }
  
  function handleAutorizationResponse(data){
    window.history.pushState({},null,"index.html");
    setAccessToken(data.access_token);
  
    if(data.refresh_token)
      localStorage.setItem("refresh_token",data.refresh_token);
    
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

 
  return access_token;

}

export default getAccessToken;

