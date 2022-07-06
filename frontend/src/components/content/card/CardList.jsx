import React from "react";
import './cardList.css';

function CardList(props){
  return(
  <React.Fragment>
  <div className="top-type">
          <button style={props.btnState[0]} id="type-0" value="artists" onClick={props.handleOnClickTypeBtn} type="button">Artists</button>
          <button style={props.btnState[1]} id="type-1" value="tracks" onClick={props.handleOnClickTypeBtn} type="button">Songs</button>
          <button style={props.btnState[2]} id="type-2" value="Albums" type="button">Albums</button>
  </div>
  <div className="top-list">
      {props.cards}
  </div>
  </React.Fragment>
  )
}

export default CardList;