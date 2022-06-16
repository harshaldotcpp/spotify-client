import React from "react";
import "./Content.css";
import Card from "./card/Card.jsx"

function Content(props){
  
  let userTop = props.userTop.items;
  console.log(userTop.splice(0,1));
  let cards = userTop.map((val)=>{
      return <Card name={val.name} img={val.images[0].url} />
    });
     
  return(
   <div id="content">
       <div className="top-list-of">
          <button value="artists"onClick={(e)=>props.setTopList(e.target.value)} type="button">Artists</button>
          <button value="tracks" onClick={(e)=>props.setTopList(e.target.value)} type="button">Songs</button>
          <button value="Albums" type="button">Albums</button>
       </div>
       <div className="top-list">
           {cards}
       </div>
   </div>
  );
}


export default Content;
