import React from "react";
import './Menu.css';


function Menu(props){
  return(
    <div className="menu" style={props.style}>
       
       <div className="now-playing" >
       </div>
      <ul className="menu-ul" style={{display:"flex",flexDirection:"column"}} >
        <li> Profile </li>
        <li> Top </li>
        <li> Recently Played </li>
        <li> Recommendation </li>
        <li>last fm</li>
        <li> log out </li>
      </ul>
  
    </div>
      
  )
}

export default Menu;