



function getAndSetUserTop(setUserTop,access_token){
    if(access_token == undefined) return;
    
    let type = getAndSetUserTop.type;
    let limit = getAndSetUserTop.limit;
    let timeRange = getAndSetUserTop.timeRange;
    
    const SPOTIFY_API_URL = "https://api.spotify.com/v1/me/top/"+type+limit+timeRange;
   
    const info = {
      method:"get",
      headers:{
        "Authorization": "Bearer "+access_token,
        "Content-Type": "application/json"
      }
    }  
    
    fetch(SPOTIFY_API_URL,info)
    .then(response => response.json())
    .then((data)=> setUserTop(data))
    .catch((e)=>{
       
    });
    
}


export { getAndSetUserTop };
