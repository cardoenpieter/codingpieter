import { html, render } from "https://unpkg.com/lit-html";
import Cookie from "./Cookie.js";
import CookieClient from "../api/CookieClient.js";

export default class Cookies {
  constructor(cookies) {
    this.cookies = cookies.map(
      (cookie) => new Cookie(cookie.id, cookie.name, cookie.price, cookie.picture, cookie.allergens)
    );
  }

  renderCookies() {
    const cookiesTemplate = html`${this.cookies.map((cookie) => cookie.template())}`;
    render(cookiesTemplate, document.querySelector("#container"));
  }

  static display() {
    CookieClient.get().then((cookieObjects) => {
      const cookies = new Cookies(cookieObjects);
      cookies.renderCookies();
    });
  }
}
