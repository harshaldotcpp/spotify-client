import React from "react";
import Navbar from "./navbar/Navbar.jsx";
import Content from "./content/Content.jsx";
import "./MainPage.css";
import  fetchAccessToken  from "../apiCalls/spotifyAuthontication.js"
import {getAndSetUserTop} from "../apiCalls/spotifyApi";

/* getAndSetUserTop function make get request
   and set UserTop state which either top artists or
   track after geting data from api
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
   /*
       this function will fetch api data which is userTop artist as defailt when page loads
       this function will only run when access_token variable is set or changed
   */
   getAndSetUserTop("artists",setUserTop,access_token);
  },[access_token]);
  
  
 
  function handleTopListChange(endpoint){
    /*
      get userTop api data either   of top artists or top tracks
      depeneding on which button pressed in content componenet by get request with
      access_token and set userTop state after Loading  request
    */ 
    getAndSetUserTop(endpoint,setUserTop,access_token);
  }
 
 
 
  return (
    (userTop)?//if data is ready => render main-page else loading page
    <div className="MainPage">
       <Navbar / >
       <Content userTop={userTop} setTopList={handleTopListChange} />
    </div>
    :<div className="main-page-loading">
        <h1> Loading </h1>
     </div>
  )
}

export default MainPage;
