
class Client{
  
  constructor(){
    this.token = localStorage.getItem("refresh_token");
  }
  
  alreadyLoggedIn(){
    if(this.token)
      return true;
    else return false;
  }
  
  getToken(){
    return this.token;
  }
  
  ifLogged(){
    this.token = new URLSearchParams(window.location.search)
    .get('code');
    if(this.token)
      return true;
    return false;
  }
  
  isLogged(){
    if(this.alreadyLoggedIn()){
       return true; //true
    }
    return ifLogged();
  }
  
}

export default Client
