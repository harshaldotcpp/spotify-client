 import React from "react";
 import Card from "./card/Card.jsx";
 
 
 
 function getImgName(top){
  const endpoint = top.href.split("/").pop();
 
    top = top.items[0];
    if(endpoint === "artists"){
    }
    else{
      return [top.album.images[0].url,"by "+top.artists[0].name];
    }
  }
  
  
function getCardList(userTop){
  const endpoint = userTop.href.split("/").pop();
   userTop = userTop.items;
   
   if(endpoint === "artists"){
     
     let cards = userTop.map((val)=>{
      return <Card 
        img={val.images[0].url} 
        name={val.name} 
        moreInfo={val.genres[0]}
      />
     });
     cards.splice(0,1);
     return [cards,userTop[0].images[0].url,userTop[0].genres[0]];
   }
   else{
  
     let cards = userTop.map((val)=>{
       return <Card 
          img={val.album.images[1].url}
          name={val.name}
          moreInfo={"by "+val.artists[0].name}
       />
     });
      cards.splice(0,1)
       return [cards,userTop[0].album.images[0].url,"by "+userTop[0].artists[0].name]
   }
}
 
 
 export { getImgName, getCardList };