import React from "react";
import "./Navbar.css";
import Menu from "./navbarComponents/Menu.jsx";
import TimeRange from "./navbarComponents/TimeRange.jsx";
function Navbar(props){
  //change data according to time
  const [menuStyle, setmenuStyle] =React.useState({});
 
  
  
  const handleCheck = (e)=>{
    if(e.target.checked){
      setmenuStyle({height: "375px",opacity:"1"});
    }
    else
      setmenuStyle({height: "0px",opacity:"0"})
  }
  
  
  return(
    <nav className="navbar">
    
         <div className="heading" >
          <input onClick={handleCheck} type="checkBox" />
           <h1> <strong>suoppnfwrvoi</strong> </h1>
           <img sr="" alt=" " />
         </div> 
        
        <Menu access_token={props.access_token} style={menuStyle} />
        <TimeRange handleTimeChange={props.handleTimeChange} />
    </nav>
  )
}




export default Navbar;