import React from "react";
import "./Navbar.css";

function Navbar(props){
  //change data according to time
  const [menu, setmenu] =React.useState({});
  let [btnState,setBtnState] = React.useState([{borderBottom:"3px solid green"},{},{}])
  function handleClickTimeBtn(e){
    
    
    let obj = [{},{},{}];
    obj[parseInt(e.target.id.split("-")[1])] = {borderBottom:"3px solid green"};
    
    setBtnState(()=>{
      return [...obj];
    });
    
    props.handleTimeChange(null,null,e.target.value);
  }
  
  const handleCheck = (e)=>{
    if(e.target.checked){
      setmenu({height: "300px"});
    }
    else
      setmenu({height: "0px"})
  }
  
  
  return(
    <nav className="navbar">
    
         <div className="heading" >
           <h1> <strong> sjzhbdioab</strong> </h1>
          <input onClick={handleCheck} type="checkBox" />
         </div> 
          
          
       <div className="menu" style={menu}> 
       
       </div>
        <div className="control-panel">
          <ul>
            <li> <button index="hii" style={btnState[0]} id="time-0" value="&time_range=long_term" type="button" onClick={handleClickTimeBtn} > All Time </button> </li>
            <li> <button style={btnState[1]} id="time-1" value="&time_range=short_term" type="button" onClick={handleClickTimeBtn} > last 4 Week </button> </li>
            <li> <button style={btnState[2]} id="time-2" value="&time_range=medium_term" type="button" onClick={handleClickTimeBtn} > 6 months </button> </li>
          </ul>
      </div>
    </nav>
  )
}




export default Navbar;