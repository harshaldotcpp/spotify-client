import React from "react";
import "./Navbar.css";

function Navbar(props){

  return(
    <nav className="navbar">
      <div className="control-panel">
          <h1> <strong> Spotistate </strong> </h1>
          <ul>
            <li> All Time </li>
            <li> last 4 Week </li>
            <li> 6 months </li>
          </ul>
      </div>
    </nav>
  )
}




export default Navbar;