import { html } from "https://unpkg.com/lit-html";

export default class ShoppingCartEntry {
  constructor(id, amount, cookie) {
    this.id = id;
    this.amount = amount;
    this.cookie = cookie;
  }

  template() {
    return html`
    <div class="row cart-item hidden-xs">
        <div class="col-xs-6">
            <div>
            <img src="http://www.coolmix.nl/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_4s_front.jpg"</img>
            </div>
            <div>
            <span>${this.cookie.name}</span><br>
            <span>Artikelnummer: ${this.cookie.id}</span>
            </span>
            </div>
        </div>
        <span class="col-xs-2 text-right">${new Intl.NumberFormat("nl-BE", {
          style: "currency",
          currency: "EUR",
        }).format(this.cookie.price / 100)}</span>
        <span class="col-xs-2"><input .value=${this.amount}></input><a>Wijzigen</a></span>
        <span class="text-right col-xs-2"><strong>${new Intl.NumberFormat("nl-BE", {
          style: "currency",
          currency: "EUR",
        }).format(this.cookie.price / 100)}</strong><br><a>Verwijderen</a></span>
    </div>
    `;
  }
}
