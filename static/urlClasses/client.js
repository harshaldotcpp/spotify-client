
class Client{
  
  constructor(){
    this.token = localStorage.getItem("refresh_token");
    this.id = "a201e1c8ee7c4676886781255be2c68b";
    this.secret = "43599d0109654011a6a3295b65f2eb1b";

  }
  
  alreadyLoggedIn(){
    if(this.token)
      return true;
    else return false;
  }
  
  getToken(){
    return this.token;
  }
  
  
  isLogged(){
    if(this.token){
        
       return this.token; //true
    }
    console.log("hmm")
    let code = new URLSearchParams(window.location.search)
    .get('code');
    console.log(code);
    return code;
  }
  
}

export default Client
