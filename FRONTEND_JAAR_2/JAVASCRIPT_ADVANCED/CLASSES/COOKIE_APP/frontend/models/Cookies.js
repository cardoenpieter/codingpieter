import { html, render } from "https://unpkg.com/lit-html";
import Cookie from "./Cookie.js";

export default class Cookies {
  constructor(cookies) {
    this.cookies = cookies.map(
      (cookie) => new Cookie(cookie.id, cookie.name, cookie.price, cookie.picture, cookie.allergens)
    );
  }

  display() {
    const cookiesTemplate = html`${this.cookies.map((cookie) => cookie.template())}`;
    render(cookiesTemplate, document.querySelector("#container"));
  }
}
