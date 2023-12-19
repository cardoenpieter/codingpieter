import Cookies from "./models/Cookies.js";
import CookieClient from "./api/CookieClient.js";

window.addEventListener("DOMContentLoaded", () => {
  CookieClient.get().then((cookieObjects) => {
    const cookies = new Cookies(cookieObjects);
    cookies.display();
  });
});
