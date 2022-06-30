import React from "react";
import { Route, Routes } from "react-router-dom";
import Card from "./card/Card.jsx";
import CardList from "./card/CardList.jsx";
import TopSection from "./topsection/TopSection.jsx";
import  CardExpand from "./card/CardExpand.jsx"
import {getCardList, getFirstCardInfo } from "./contentUtility.js"
import "./Content.css";


function Content(props){
  //type-btn state
  let [btnState,setBtnState] = React.useState([{color:"green"},{},{}]);
  
  /*
     getCardList function get array of card component 
     with all props
 */
   const cards = getCardList(props.userTop);
   const firstCardInfo = getFirstCardInfo(props.userTop);

  
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
   {/**********************************************************/}
      <TopSection 
        img={firstCardInfo.img} 
        moreInfo={firstCardInfo.moreInfo} 
        name={firstCardInfo.name}
      />
  {/* ********************************************************/}
    
      <div className="top-list-of">
          <button style={btnState[0]} id="type-0" value="artists" onClick={handleOnClickTypeBtn} type="button">Artists</button>
          <button style={btnState[1]} id="type-1" value="tracks" onClick={handleOnClickTypeBtn} type="button">Songs</button>
          <button style={btnState[2]} id="type-2" value="Albums" type="button">Albums</button>
      </div>
      

      <Routes >
        <Route path="/index.html" element={ <CardList cards={cards} /> }  />
        <Route path="/index.html/cardexpand" element={<CardExpand />} />
      </Routes>
    
  </div>
     
  );
}


export default Content;

