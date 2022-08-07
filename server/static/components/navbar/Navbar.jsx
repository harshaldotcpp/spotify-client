import React from "react";
import "./Navbar.css";
import Menu from "./navbarComponents/Menu.jsx";
import TimeRange from "./navbarComponents/TimeRange.jsx";
import { getFirstCardInfo } from "../content/contentUtility.js"
import 'fast-average-color';


function Navbar(props){
  //change data according to time
  let info = getFirstCardInfo(props.userTop);
  
  
  const [menuStyle, setmenuStyle] = React.useState({height: "0px",opacity:"0"});
  const [hamburger, setHambergerStyle] = React.useState(["",""])
  const [menuColor, setMenuColor] = React.useState({})
 
  
  const handleCheck = (e)=>{
    if(e.target.checked){
      setmenuStyle({height: "375px",opacity:"1"});
      setHambergerStyle(["bar1","bar2"]);
    }
    else{
      setmenuStyle({height: "0px",opacity:"0"})
      setHambergerStyle(["",""]);
    }
  }
  
  
  return(
    <nav style={menuColor} className="navbar">
    
         <div  className="heading" >
         <label className="hamburgerMenu" for="navigation" >
          <input id="navigation" onClick={handleCheck} type="checkBox" />
          <div className={`hambar ${hamburger[0]}`} >
          </div>
          <div className={`hambar ${hamburger[1]}`} >
          </div>
        </label>
           <h1> <strong>idontknow</strong> </h1>
           <img sr="" alt=" " />
         </div> 
        
        <Menu access_token={props.access_token} style={menuStyle} />
        <TimeRange handleTimeChange={props.handleTimeChange} />
    </nav>
  )
}




export default Navbar;