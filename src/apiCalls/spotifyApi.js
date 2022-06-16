

function spotifyApi(handleOneLoad,apiEndpoint,access_token){
   if(access_token === undefined)
    return;
  
   let xhr = new XMLHttpRequest();
   xhr.open("GET",apiEndpoint,true);
   xhr.setRequestHeader("Authorization", "Bearer "+access_token);
   xhr.setRequestHeader("Content-Type", "application/json");
   xhr.send(null);
   xhr.onload = handleOneLoad;
}



function getAndSetUserTop(endpoint,setUserTop,access_token){
    spotifyApi(function(){
      if(this.status === 200){
        setUserTop(JSON.parse(this.responseText));
      }
    },"https://api.spotify.com/v1/me/top/"+endpoint,access_token);
  }

export { spotifyApi , getAndSetUserTop };
