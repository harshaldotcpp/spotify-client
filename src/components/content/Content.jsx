import React from "react";
import "./Content.css";
import Card from "./card/Card.jsx"
import {getCardList} from "./contentUtility.js"



function Content(props){
  /* getCardList function get array of card component 
     with all props 
 */
  //console.log(props.userTop.href.split("?")[0].split("/").pop())
  let [cards,img,moreInfo] = getCardList(props.userTop);
  
  
  function handleOnClickTypeBtn(e){
    props.setTopList(e.target.value);
  }
  
  return(
   <div id="content">
      <div className="top-section">
        <div className="nav-top">
            <img src={img} alt="top artist" />
        </div>
        <div className="nav-info">
          <div>
            <h4>{props.userTop.items[0].name} </h4>
            <p5>{moreInfo}</p5>
          </div>
        </div>
      </div>
      
       <div className="top-list-of">
          <button value="artists"onClick={handleOnClickTypeBtn} type="button">Artists</button>
          <button value="tracks" onClick={handleOnClickTypeBtn} type="button">Songs</button>
          <button value="Albums" type="button">Albums</button>
       </div>
       
       <div className="top-list">
           {cards}
       </div>
   </div>
  );
}


export default Content;
