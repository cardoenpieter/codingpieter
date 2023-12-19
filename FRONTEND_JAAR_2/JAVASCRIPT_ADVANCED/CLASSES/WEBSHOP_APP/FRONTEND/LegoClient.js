class LegoClient {
  constructor() {
    //constructor wordt uitgevoerd van zodra de new LegoClient wordt uitgevoerd
    this.apiUrl = "http://localHost:1337/api/legos?populate=*";
    //this is defined van zodra er new wordt gecalld,
    //this bestaat niet in static
  }

  get() {
    return fetch(this.apiUrl, {
      headers: {
        Authorization:
          "Bearer 7e6c8b07ab46e6ac84ec59ef5951fa7a0c6c26ee0057d1ec1f2be175e65038ae2a2f18f3427e8233e6eab4fc83788ec7c9975aa6b2711a5984f61065b6a5fb664aed30953ebac18a965197248c7c181b501f59700abcd4c96b7eaf4c9479d396618fbd47074e2b7796c362b98cff84bbdcf82c4625efc5eb373bb3c7bf117441",
      },
    }).then((res) => res.json());
  }
}

export default new LegoClient();
