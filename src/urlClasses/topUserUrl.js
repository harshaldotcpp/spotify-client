

class UserTopRequestUrl{
  
  constructor(){
    this.type = "tracks";
    this.limit = "21";
    this.offset = "0";
    this.timeRange = "long_term";
    this.url = `https://api.spotify.com/v1/me/top/${this.type}?limit=${this.limit}&offset=${this.offset}&time_range=${this.timeRange}`;
  }
  
  setType(type){
    this.type = type;
    this.url = `https://api.spotify.com/v1/me/top/${this.type}?limit=${this.limit}&offset=${this.offset}&time_range=${this.timeRange}`;
  }
  
  setLimit(limit){
    this.limit = limit;
    this.url = `https://api.spotify.com/v1/me/top/${this.type}?limit=${this.limit}&offset=${this.offset}&time_range=${this.timeRange}`;
   }
  
  setOffset(offset){
    this.offset = offset;
    this.url = `https://api.spotify.com/v1/me/top/${this.type}?limit=${this.limit}&offset=${this.offset}&time_range=${this.timeRange}`;
  }
  
  setTimeRange(time_range){
    this.timeRange = time_range;
    this.url = `https://api.spotify.com/v1/me/top/${this.type}?limit=${this.limit}&offset=${this.offset}&time_range=${this.timeRange}`;
  }
  geturl(){
    return this.url;
  }
}

export { UserTopRequestUrl }
