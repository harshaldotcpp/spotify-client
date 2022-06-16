import React from "react";
import "./Card.css"


function Card(props){
  
  return(
    <div id="top-card" >
      <img src={props.img} />
      <div className="info">
        <h4>{props.name}</h4>
      </div>
    </div>
  )
  
}


export default Card;
