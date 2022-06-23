import React from "react";
import "./TimeRange.css"

function TimeRange(props){
    let [btnState,setBtnState] = React.useState([{borderBottom:"3px solid green"},{},{}])
  
  function handleClickTimeBtn(e){

    let obj = [{},{},{}];
    obj[parseInt(e.target.id.split("-")[1])] = {borderBottom:"3px solid green"};
    
    setBtnState(()=>{
      return [...obj];
    });
    props.handleTimeChange(e.target.value);
    props.handleTimeChange(e.target.value);
  }
  
  return(
    <div className="time-range">
      <ul>
        <li> <button index="hii" style={btnState[0]} id="time-0" value="&time_range=long_term" type="button" onClick={handleClickTimeBtn} > All Time </button> </li>
        <li> <button style={btnState[1]} id="time-1" value="&time_range=short_term" type="button" onClick={handleClickTimeBtn} > last 4 Week </button> </li>
        <li> <button style={btnState[2]} id="time-2" value="&time_range=medium_term" type="button" onClick={handleClickTimeBtn} > 6 months </button> </li>
      </ul>
    </div>
  );
}


export default TimeRange;