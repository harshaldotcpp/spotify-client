 function getImgName(top){
    let endpoint = top.href.split("/").pop();
    top = top.items[0];
    if(endpoint === "artists")
      return [top.images[0].url,"Most Player artist"];
    else
      return [top.album.images[0].url,"by "+top.artists[0].name];
    
  }
 
 
 export { getImgName };