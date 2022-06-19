import React from "react";
import Navbar from "./navbar/Navbar.jsx";
import Content from "./content/Content.jsx";
import "./MainPage.css";
import  fetchAccessToken  from "../apiCalls/spotifyAuthontication.js"
import {getAndSetUserTop} from "../apiCalls/spotifyApi";



/*
   getAndSetUserTop function make get request
   and set userTop data. it has type and queries
   which are store in itself function Object
   they will be modified on different event/button presse
 
   example if tracks button pressed handleEvent function will chnage type property to tracks and
  and function will be invoke to make get request and set state
   
*/





function MainPage(props){

//get access acessToken from code

 let [access_token,refresh_token] = fetchAccessToken(props.code);


/* 
  userTop data from api.spotify saved as
  state of this component either top tracks or top artists
*/

 let [userTop, setUserTop] = React.useState(null);



 React.useEffect(()=>{
   if(!access_token) return;
   /*
       this function will fetch api data which is userTop artist as defailt when page loads
       this function will only run when access_token variable is set or changed
   */
   
   getAndSetUserTop.type = "artists";
   getAndSetUserTop.limit = "?limit=21";
   getAndSetUserTop.timeRange = "&time_range=long_term";
   
   getAndSetUserTop(setUserTop,access_token);
  
   
 },[access_token]);
  
  
 
  const handleTypeChange = (type=null,limit=null,timeRange=null) => {
    /*
      this function will handle button press event for type,
      limit and timeRange. ii will get and set data
    */ 
    getAndSetUserTop.type = (type)? type : getAndSetUserTop.type;
    getAndSetUserTop.limit = (limit)? limit : getAndSetUserTop.limit;
    getAndSetUserTop.timeRange = (timeRange)? timeRange : getAndSetUserTop.timeRange;
    
    
    getAndSetUserTop(setUserTop,access_token);
  }
 

  return (
    (userTop)?//if data is ready => render main-page else loading page
    <div className="MainPage">
       <Navbar handleTimeChange={handleTypeChange} / >
       <Content userTop={userTop} setTopList={handleTypeChange} />
    </div>
    :<div className="main-page-loading">
        <h1> Loading </h1>
     </div>
  )
}

export default MainPage;
