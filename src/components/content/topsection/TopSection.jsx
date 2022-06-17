import React from "react";
import './TopSection.css';



function TopSection(props){
  
  return(
    <div className="top-section">
        <div className="top-img">
            <img src={props.img} alt="top artist" />
        </div>
        <div className="top-info">
          <div>
            <h4>{props.name} </h4>
            <p5>{props.moreInfo}</p5>
          </div>
        </div>
    </div>
      
  );
  
}


export default TopSection;