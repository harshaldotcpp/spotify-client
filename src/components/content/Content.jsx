import React from "react";
import "./Content.css";
import Card from "./card/Card.jsx"
import {getCardList} from "./contentUtility.js"



function Content(props){
  /*
     getCardList function get array of card component 
     with all props 
 */

  let [cards,img,moreInfo] = getCardList(props.userTop);




  
  //type-btn state
  let [btnState,setBtnState] = React.useState([{color:"green"},{},{}])
 
  function handleOnClickTypeBtn(e){
    let obj = [{},{},{}];
    obj[parseInt(e.target.id.split("-")[1])] = {color:"green"};
    
    setBtnState(()=>{
      return [...obj];
    });
    
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
          <button style={btnState[0]} id="type-0" value="artists"onClick={handleOnClickTypeBtn} type="button">Artists</button>
          <button style={btnState[1]} id="type-1" value="tracks" onClick={handleOnClickTypeBtn} type="button">Songs</button>
          <button style={btnState[2]} id="type-2" value="Albums" type="button">Albums</button>
       </div>
       
       <div className="top-list">
           {cards}
       </div>
   </div>
  );
}


export default Content;
