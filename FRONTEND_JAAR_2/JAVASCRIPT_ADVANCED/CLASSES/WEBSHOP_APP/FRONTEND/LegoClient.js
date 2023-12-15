class LegoClient {
  constructor() {
    //constructor wordt uitgevoerd van zodra de new LegoClient wordt uitgevoerd
    this.apiUrl = "http://localHost:1337/api/legos";
  }

  get() {
    return fetch(this.apiUrl).then((response) => response.json());
  }
}

export default new LegoClient();
