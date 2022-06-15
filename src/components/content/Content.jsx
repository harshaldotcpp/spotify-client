import React from "react";
import "./Content.css";


function Content(props){
  return(
   <div id="content">
       <div className="top-list-of">
          <button value="artists"onClick={(e)=>props.setTopList(e.target.value)} type="button">Artists</button>
          <button value="tracks" onClick={(e)=>props.setTopList(e.target.value)} type="button">Songs</button>
       </div>
       
       <div className="top-list">
       
       </div>
   </div>
  );
}


export default Content;