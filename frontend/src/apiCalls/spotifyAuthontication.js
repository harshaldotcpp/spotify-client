import React from "react";
import Client from "../urlClasses/client.js";

const TOKEN = "https://accounts.spotify.com/api/token";
const  client = new Client();
const postUrl = {
    grantType:  "grant_type=authorization_code",
    code: "&code=",
    reUrl: "&redirect_uri=" + encodeURI("http://localhost:8000"),
    cliendId: "&client_id="+ client.id,
    clientSecret: "&client_secret=" + client.secret,
}


async function fetchAccessToken(code){
  
  if(!client.alreadyLoggedIn()){
    postUrl.code += code;
    let body = Object.values(postUrl).reduce((acc,val)=>{
        return acc += val;
    },"");
    
    return authorizationForAccessToken(body);
  }
 
  let body = "grant_type=refresh_token";
  body += "&refresh_token=" + code;
  return authorizationForAccessToken(body);
 
}

async function authorizationForAccessToken(body){
    /*
      post request for access_token
    */
  const request = {
    method:"POST",
    headers :{
      "content-type":"application/x-www-form-urlencoded",
      "Authorization":"Basic "+btoa(client.id +":"+client.secret)
    },
     body: body
  }
    
  const response = await fetch(TOKEN,request)
  const data = await response.json()
    
  return data;
}





function getAccessToken(code){

 let [access_token,setAccessToken] = React.useState();
 let [expires_in,setExpireIn] = React.useState();
  
  React.useEffect(()=>{
  /* 
    this function will fetch access_token   and set as state of this function and
    return that access token to main-page
    for api calls
    once post request load we set acces_token
    and return that token from where 
    this whole function was called
  */
  
    fetchAccessToken(code)
    .then((data)=>{
      window.history.pushState({},null,"/");
      setAccessToken(data.access_token);
  
      if(data.refresh_token)
        localStorage.setItem("refresh_token",data.refresh_token);
    
    });
    
 },[code]);

 
  return access_token;

}

export default getAccessToken;

