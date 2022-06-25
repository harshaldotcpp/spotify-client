import React from "react";
import Navbar from "./navbar/Navbar.jsx";
import Content from "./content/Content.jsx";
import "./MainPage.css";
import  fetchAccessToken  from "../apiCalls/spotifyAuthontication.js"
import { getRequestToSpotifyApi } from "../apiCalls/spotifyApi";
import { UserTopRequestUrl } from "../urlClasses/topUserUrl.js";

const USERTOP_REQUEST_URL ={
  url: "https://api.spotify.com/v1/me/top",
  type:"/artists",
  limit: "?limit=21",
  timeRange: "&time_range=long_term",
  offset: "&offset=0",
}


const convertUrlObjectToUrl = () =>{
  let body = "";
  Object.entries(USERTOP_REQUEST_URL).forEach((val)=>{
      body += val[1];
  });
  return body;
}

const usertopUrl = new UserTopRequestUrl();


function MainPage(props){

//get access acessToken from code
 let [access_token,refresh_token] = fetchAccessToken(props.code);
  

/* 
  userTop data from api.spotify saved as
  state of this component either top tracks or top artists
*/

 let [userTops, setUserTop] = React.useState(null);



 React.useEffect(()=>{
   if(!access_token) return;
   /*
       this function will fetch api data which is userTop artist as defailt when page loads
       this function will only run when access_token variable is set or changed
   console.log(USERTOP_REQUEST_URL.geturl())
   */
   let body = convertUrlObjectToUrl();
    
   getRequestToSpotifyApi(body,setUserTop,access_token);

 },[access_token]);
  
  
 
  const handleTypeChange = (type) => {
    /*
      this function will handle button press event for type,
      limit and timeRange. ii will get and set data
    */ 
    USERTOP_REQUEST_URL.type = type;
    let body = convertUrlObjectToUrl();
    
    
    getRequestToSpotifyApi(body,setUserTop,access_token);
  }
  
  
  const handleTimeRangeChange = (time_range) => {
    USERTOP_REQUEST_URL.timeRange = time_range
    
    let body = convertUrlObjectToUrl();
    getRequestToSpotifyApi(body,setUserTop,access_token);
  }
 

  return (
    (userTops)?//if data is ready => render main-page else loading page
    <div className="MainPage">
    
      <Navbar 
        handleTimeChange={handleTimeRangeChange} 
        access_token={access_token} 
      / >
      
      <Content 
        userTop={userTops} 
        setTopList={handleTypeChange}
      />
      
    </div>
    :<div className="main-page-loading">
        <h1> Loading </h1>
     </div>
  )
}

export default MainPage;
