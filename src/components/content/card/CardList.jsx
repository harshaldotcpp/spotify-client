import React from "react";


function CardList(props){
  return(
  <div className="top-list">
      {props.cards}
  </div>
  )
}

export default CardList;