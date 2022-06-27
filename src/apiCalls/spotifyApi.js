import { getNowPlayingInfo } from "../components/navbar/navbarComponents/utility.js";

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


function getRequestToSpotifyApi(setUserTop,SPOTIFY_API_URL,access_token){
    
  reqInfo.headers["Authorization"] = "Bearer " + access_token;
  
  fetchApi((data)=>{
    setUserTop(data)
  },SPOTIFY_API_URL,reqInfo);
  
}


export { getRequestToSpotifyApi };
