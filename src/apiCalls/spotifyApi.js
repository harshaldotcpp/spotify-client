

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



function getAndSetUserTop(setUserTop,access_token){
    let type = getAndSetUserTop.type;
    let limit = getAndSetUserTop.limit;
    let timeRange = getAndSetUserTop.timeRange;
  
    spotifyApi(function(){
      
      if(this.status === 200){
        console.log("hdllo")
        setUserTop(JSON.parse(this.responseText));
      }
      
      
    },"https://api.spotify.com/v1/me/top/"+type+limit+timeRange,access_token);
    
}


export { spotifyApi , getAndSetUserTop };
