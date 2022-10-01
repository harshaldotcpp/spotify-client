import React from "react";
import Navbar from "./navbar/Navbar.jsx";
import Content from "./content/Content.jsx";
import "./MainPage.css";
import  getAccessToken from "../apiCalls/spotifyAuthontication.js"
import { getRequestToSpotifyApi } from "../apiCalls/spotifyApi";
import { UserTopRequestUrl } from "../urlClasses/topUserUrl.js";


const USERTOP_URL = new UserTopRequestUrl();

function MainPage(props){
 

//get access acessToken from code async
 let access_token = getAccessToken(props.code);


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
   
   getRequestToSpotifyApi(setUserTop,USERTOP_URL.url,access_token);

 },[access_token]);
  
  
 
  const handleTypeChange = (type) => {
    /*
      this function will handle button press event for type,
      limit and timeRange. ii will get and set data
    */ 
    USERTOP_URL.setType(type);
    getRequestToSpotifyApi(setUserTop,USERTOP_URL.url,access_token);
  }
  
  
  const handleTimeRangeChange = (time_range) => {
    
    USERTOP_URL.setTimeRange(time_range);
  getRequestToSpotifyApi(setUserTop,USERTOP_URL.url,access_token);
  }
 

  return (
    (userTops)?//if data is ready => render main-page else loading page
    <div className="MainPage">
    
      <Navbar 
        userTop={userTops}
        handleTimeChange={handleTimeRangeChange} 
        access_token={access_token} 
      / >
      
      <Content
       code ={props.code}
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
