import { html } from "https://unpkg.com/lit-html";

export default class Cookie {
  constructor(id, name, price, picture, allergens) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.picture = picture;
    this.allergens = allergens;
  }

  onDelete() {
    console.log("deleting");
  }

  onUpdate() {
    console.log("updating");
  }

  onAddToCart() {
    console.log("adding to cart");
  }

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
            <h6>${this.name}</h6>
            <p class="card-text">This is a cookie</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button
                  @click=${this.onAddToCart}
                  id="liveToastBtn"
                  data-id="1"
                  data-price="109"
                  data-product="Jeans"
                  data-quantity="1"
                  type="button"
                  class="btn btn-sm btn-outline-secondary btn-success text-white"
                >
                  Add to Cart
                </button>
                <button
                  @click=${this.onDelete}
                  id="liveToastBtn"
                  data-id="1"
                  data-price="109"
                  data-product="Jeans"
                  data-quantity="1"
                  type="button"
                  class="btn btn-sm btn-outline-secondary btn-success text-white"
                >
                  Delete
                </button>
                <button
                  @click=${this.onUpdate}
                  id="liveToastBtn"
                  data-id="1"
                  data-price="109"
                  data-product="Jeans"
                  data-quantity="1"
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
