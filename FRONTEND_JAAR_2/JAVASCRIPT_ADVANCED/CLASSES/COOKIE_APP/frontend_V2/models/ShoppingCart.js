import { html, render } from "https://unpkg.com/lit-html";
import ShoppingCartEntry from "./ShoppingCartEntry.js";
import ShoppingCartClient from "../api/ShoppingCartClient.js";

export default class ShoppingCart {
  constructor(entries) {
    this.entries = entries.map((entry) => new ShoppingCartEntry(entry.id, entry.amount, entry.cookie));
  }

  renderCart() {
    const cartTemplate = html`${this.entries.map((entry) => entry.template())}`;
    render(cartTemplate, document.querySelector(".cart-middle"));
  }

  static display() {
    ShoppingCartClient.get().then((entries) => {
      const cookies = new ShoppingCart(entries);
      cookies.renderCart();
    });
  }
}
