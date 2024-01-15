class ShoppingCartClient {
  constructor() {
    this.baseUrl = "http://localhost:1337/api/shopping-carts";
    // DO NOT THIS IN REAL LIFE. FO REAL.
    this.apiKey =
      "79a566a103281fa8186b0f17f076f4be182d0e1b1074d5ac99add2ac06e827c6d1f1648ed16b47c4632c1a76ce29c0f110e0c6e780d69576c405fadaa6e8c92a1ddc5c0366a1b80e951e037cbf3d61dbfe2e75bd0b4d95a0c1e26174c3ca3d10eb4cf07289d0aae861a77e55354ecf89582caa7f52b0b0aadf43b5b6c7426267";
  }

  /**
   * Get all cookies
   */
  get() {
    return fetch(`${this.baseUrl}?populate=*`, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        return data.map((entry) => {
          return {
            id: entry.id,
            amount: entry.attributes.amount,
            cookie: {
              id: entry.attributes.cookie.data.id,
              ...entry.attributes.cookie.data.attributes,
            },
          };
        });
      });
  }

  update(amount, id) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        amount,
      }),
    });
  }

  add(id) {
    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: { cookie_id: id, cookie: id },
      }),
    });
  }

  delete(id) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
  }
}

export default new ShoppingCartClient();
