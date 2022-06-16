import React from "react";
import "./Card.css"


function Card(props){
  
  return(
    <div id="top-card" >
      <img src={props.img} />
      <div className="info">
        <div>
        <h4>{props.name}</h4>
        <p4>{props.moreInfo}</p4>
        </div>
      </div>
    </div>
  )
  
}


export default Card;
