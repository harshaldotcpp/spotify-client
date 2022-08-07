import React from "react";
import './Menu.css';
import NowPlaying from "./NowPlaying.jsx"

function Menu(props){
  return(
    <div className="menu" style={props.style}>
    
      <NowPlaying access_token={props.access_token}  />
      
      <ul className="menu-ul" style={{display:"flex",flexDirection:"column"}} >
        <li> Profile </li>
        <li> Top </li>
        <li> Recently Played </li>
        <li> Recommendation </li>
        <li>Playlists</li>
        <li> Log Out </li>
      </ul>
  
    </div>
      
  )
}

export default Menu;
