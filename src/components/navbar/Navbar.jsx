import React from "react";
import "./Navbar.css";
import {getImgName} from "./navBarUtility.js";


function Navbar(props){

 if(props.userTop!==null){
  let userTop = props.userTop;
  let [img,name] = getImgName(userTop);
  
  return(
    <nav className="navbar">
    
      <div className="control-panel">
          <h1> <strong> Spotistate </strong> </h1>
          <ul>
            <li> This week </li>
            <li> This month </li>
            <li> This Year </li>
          </ul>
      </div>
      
      <div className="top-section">
        <div className="nav-top">
            <img src={img} alt="top artist" />
        </div>
        <div className="nav-info">
          <div>
            <h4>{userTop.items[0].name} </h4>
            <p5>{name}</p5>
          </div>
        </div>
      </div>
      
    </nav>
  )
  }
  else{
    return (
      <div className="loading">
       <h1 id="navLoading"> loading </h1>
      </div>
    )
  }
}


export default Navbar;