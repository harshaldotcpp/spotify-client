 import React from "react";
 import Card from "./card/Card.jsx";

/* helper function */
const createCardCompoListForArtist = (userTop) => {
   return userTop.map((val)=>{
      return <Card 
        img={val.images[0].url} 
        name={val.name} 
        moreInfo={val.genres[0]}
      />
     });
 }

/*helper function */
const createCardCompoListForTrack = (userTop) =>{
  
   return userTop.map((val)=>{
       return <Card 
          img={val.album.images[1].url}
          name={val.name}
          moreInfo={"by "+val.artists[0].name}
       />
     });
} 

const getType = (userTop) => {
  return userTop.href.split("?")[0].split("/").pop();
}

/*********/



const getFirstCardInfo = (userTop) => {
  const type = getType(userTop);
  
  userTop = userTop.items;
  const info = {};
  if(type === "artists"){
    info.name = userTop[0].name;
    info.img = userTop[0].images[0].url;
    info.moreInfo = userTop[0].genres[0];
  }
  else{
    info.name = userTop[0].name;
    info.img = userTop[0].album.images[1].url;
    info.moreInfo = "by "+userTop[0].artists[0].name;
  }
  
  return info;
}




const getCardList = (userTop) => {
 const type = getType(userTop);
  userTop = userTop.items;
   
   if(type === "artists"){
     let cards = createCardCompoListForArtist(userTop);
     cards.splice(0,1);
     return cards;
   }
   else{
     let cards = createCardCompoListForTrack(userTop);
     cards.splice(0,1)
      return cards
   }
}
 
 
 export { getCardList, getFirstCardInfo };