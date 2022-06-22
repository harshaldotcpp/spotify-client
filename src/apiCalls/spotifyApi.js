



function getAndSetUserTopFromSpotifyApi(body,setUserTop,access_token){
    
  

    const SPOTIFY_API_URL = body.url+body.type+body.limit+body.timeRange+body.offset;
    console.log(body.timeRange)
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


export { getAndSetUserTopFromSpotifyApi };
