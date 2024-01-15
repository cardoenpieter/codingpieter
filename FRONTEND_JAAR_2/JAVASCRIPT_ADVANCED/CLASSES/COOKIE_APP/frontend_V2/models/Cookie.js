import { html } from "https://unpkg.com/lit-html";
import CookieClient from "../api/CookieClient.js";
import ShoppingCartClient from "../api/ShoppingCartClient.js";
import Cookies from "./Cookies.js";

export default class Cookie {
  constructor(id, name, price, picture, allergens) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.picture = picture;
    this.allergens = allergens;
  }

  onDelete = () => {
    CookieClient.delete(this.id).then(() => {
      Cookies.display();
    });
  };

  onUpdate() {
    console.log("updating");
  }

  onAddToCart = () => {
    ShoppingCartClient.add(this.id);
  };

  /**
   * The html function helps us avoid writing code like this:
   * 
   * const querySelectorAll = document.querySelectorAll(".col");
    querySelectorAll.forEach((element) => {
      element.addEventListener("click", click);
    });
   * @returns 
   */
  template() {
    return html`
      <div class="col">
        <div class="card shadow-sm">
          <img src=${this.picture} />
          <div class="card-body">
            ${this.allergens.map((allergen) => html`<span class="badge bg-secondary">${allergen}</span>`)}
            <a href="/frontend/details.html?id=${this.id}">${this.name}</a>
            <p class="card-text">This is a cookie</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button
                  @click=${this.onAddToCart}
                  type="button"
                  class="btn btn-sm btn-outline-secondary btn-success text-white"
                >
                  Add to Cart
                </button>
                <button
                  @click=${this.onDelete}
                  type="button"
                  data-id=${this.id}
                  class="btn btn-sm btn-outline-secondary btn-success text-white"
                >
                  Delete
                </button>
                <button
                  @click=${this.onUpdate}
                  type="button"
                  class="btn btn-sm btn-outline-secondary btn-success text-white"
                >
                  Update
                </button>
              </div>
              <small class="text-muted"
                >${new Intl.NumberFormat("nl-BE", { style: "currency", currency: "EUR" }).format(
                  this.price / 100
                )}</small
              >
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
