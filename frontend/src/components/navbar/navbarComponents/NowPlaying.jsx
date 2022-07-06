import React from "react";
import "./NowPlaying.css"
import { getRequestToSpotifyApi } from "static/apiCalls/spotifyApi.js"
import { getNowPlayingInfo } from "./utility.js";

const NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";
function NowPlaying(props){
  
  let [nowPlaying,setNowplaying] = React.useState(null);
  
  
  
  React.useEffect(()=>{
    getRequestToSpotifyApi((data)=>{
      
      data = getNowPlayingInfo(data);
      if(data)
        setNowplaying(data);
      
    },NOW_PLAYING_URL,props.access_token);
  });
  
  
  return(
    (nowPlaying)?//if no track playing dont render this
    <div className="now-playing" >
        <div className="now-playing-card" >
          <img className="now-playing-img" alt="png" src={nowPlaying.img} />
          <div className="now-playing-info">
            <div className="info" >
              <h4>{nowPlaying.name} </h4>
              <p4>By {nowPlaying.artist} </p4>
            </div>
          </div>
        </div>
    </div>
   : <React.Fragment>
    <div className="now-playing" >
      <span>No track playing curently</span>
    </div>
    </React.Fragment>
  );
}


export default NowPlaying;