import React from "react";
import "./Navbar.css";

function Navbar(props){

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
    </nav>
  )
}




export default Navbar;