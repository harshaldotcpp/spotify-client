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
    <TopSection 
        img={firstCardInfo.img} 
        moreInfo={firstCardInfo.moreInfo} 
        name={firstCardInfo.name}
    />
  
    <Routes >
    
      <Route path="/index.html" 
        element={ 
          <CardList btnState={btnState} 
            handleOnClickTypeBtn={handleOnClickTypeBtn} 
            cards={cards} 
          /> 
        }  
      />
        
      <Route 
        path="/index.html/cardexpand" 
        element={
          <CardExpand />
        }
      />
      
    </Routes>
  </div>
     
  );
}


export default Content;

