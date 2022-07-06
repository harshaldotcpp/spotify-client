

const getNowPlayingInfo = (nowPlaying) =>{
  const nowPlayingInfo ={
    name:"",
    img:"",
    artist:"",
    isPlaying:"",
  }
  if(!nowPlaying )
    return nowPlaying;
    
    
  if(nowPlaying.currently_playing_type === "ad")
  {
    nowPlayingInfo.name = "ad";
    nowPlayingInfo.img = "";
    nowPlayingInfo.artist = "";
    nowPlayingInfo.isPlaying= nowPlaying.is_playing;
    return nowPlayingInfo;
  }
    
  nowPlayingInfo.name = nowPlaying.item.name;
  nowPlayingInfo.img = nowPlaying.item.album.images[2].url;
  nowPlayingInfo.artist = nowPlaying.item.artists[0].name;
  nowPlayingInfo.isPlaying = nowPlaying.is_playing; 
  return nowPlayingInfo;
}

export { getNowPlayingInfo };