import Cookie from "../models/Cookie.js";

class CookieClient {
  constructor() {
    this.baseUrl = "http://localhost:1337";
    // DO NOT THIS IN REAL LIFE. FO REAL.
    this.apiKey =
      "baca3c2fdd68eb5c4fe37dbf8919e6d6e9b51a5463dc5ff9e262c2c6c878d1be12d35fb69739a8eeb6cd8e51b7d37d1fd4525fbbd39787204803b325a1284a520f622102d61350dc15b16fd01444fce60df1cc77c8cf27ed03446428e3066b6c9ba073e162de091fc65abd7614ecf7bf26affc7c795151617c658c34b94bf195";
  }

  /**
   * Get all cookies
   */
  get() {
    return fetch(`${this.baseUrl}/api/cookies?populate=allergens,picture`, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    })
      .then((response) => response.json())
      .then(({ data }) =>
        data.map((cookie) => {
          const formattedCookie = {
            id: cookie.id,
            ...cookie.attributes,
          };
          const allergens = formattedCookie.allergens.data.map((allergen) => allergen.attributes.name);
          const picture = `${this.baseUrl}${formattedCookie.picture.data.attributes.url}`;
          return {
            id: formattedCookie.id,
            name: formattedCookie.name,
            price: formattedCookie.price,
            picture,
            allergens,
          };
        })
      );
  }
}

export default new CookieClient();
