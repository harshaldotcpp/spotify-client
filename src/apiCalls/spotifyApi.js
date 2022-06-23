  const reqInfo = {
      method:"get",
      headers:{
        "Authorization": "Bearer ",
        "Content-Type": "application/json"
      }
} 




function fetchApi(doThis,SPOTIFY_API_URL,info,setUserTop){
  
    fetch(SPOTIFY_API_URL,info)
    .then(response => response.json())
    .then(doThis)
    .catch((e)=>{
       
    });
}


function getAndSetUserTopFromSpotifyApi(body,setUserTop,access_token){
    
  
  const SPOTIFY_API_URL = body.url+body.type+body.limit+body.timeRange+body.offset;
  
  reqInfo.headers["Authorization"] = "Bearer " + access_token;
  
  fetchApi((data)=>{
    setUserTop(data)
  },SPOTIFY_API_URL,reqInfo);
    
}

function getAndSetNowPlaying(setNowPlaying,access_token){
  
  reqInfo.headers["Authorization"] = "Bearer " + access_token;
  const SPOTIFY_API_URL = "https://api.spotify.com/v1/me/player/currently-playing";


  fetchApi((data)=>{
    setNowPlaying(data);
  },SPOTIFY_API_URL,reqInfo)
  
}


export { getAndSetUserTopFromSpotifyApi, getAndSetNowPlaying};
