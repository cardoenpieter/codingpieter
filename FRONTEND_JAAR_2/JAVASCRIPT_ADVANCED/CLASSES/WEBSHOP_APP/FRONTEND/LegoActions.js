import { html } from "https://unpkg.com/lit-html";
import LegoClient from "./LegoClient.js";
import LegoRender from "./LegoRender.js";

export default class LegoActions {
  constructor(lego) {
    this.id = lego.id;
    this.model = lego.model;
    this.item = lego.item;
    this.price = lego.price;
    this.available = lego.available;
    this.theme = lego.theme;
    this.picture = lego.picture;
  }

  onDelete = () => {
    LegoClient.delete(this.id).then(() => {
      LegoRender.display();
    });
  };

  onUpdate = () => {
    const container = document.getElementById(`lego-${this.id}`);
    const model = container.querySelector(".title");
    const theme = container.querySelector(".theme");
    const item = container.querySelector(".item");
    //console.log(model.innerText);
    LegoClient.update(this.id, {
      model: model.innerText,
      theme: theme.innerText,
      item: item, //zoeken naar enkel nummer wijzigen en geen tekst
    });
  };

  template() {
    const euro = Intl.NumberFormat("nl-BE", {
      style: "currency",
      currency: "EUR",
    }).format(this.price / 100);
    return html`
      <div id="lego-${this.id}" class="product">
        <h2 class="theme" contenteditable>${this.theme}</h2>
        <img .src=${this.picture} alt="" />
        <h2 class="title" contenteditable>${this.model}</h2>
        <p class="description" contenteditable>Item ${this.item}</p>
        <p class="price">${euro}</p>
        <div class="btn">Add to cart</div>
        <button
          class="delete"
          @click=${this.onDelete}
          type="button"
          data-id=${this.id}
        >
          Delete
        </button>
        <button
          class="update"
          @click=${this.onUpdate}
          type="button"
          data-id=${this.id}
        >
          Update
        </button>
      </div>
    `;
  }
}

// getItems() {
//     const containerCard = document.querySelector(".container");
//     LegoClient.get().then(({ data }) => {
//       console.log(data);
//       data.forEach((item) => {
//         containerCard.innerHTML += template(item);
//       });
//     });
//   }

//   template({ attributes }) {
//     const euro = Intl.NumberFormat("nl-BE", {
//       style: "currency",
//       currency: "EUR",
//     }).format(attributes.price / 100);
//     return `
//             <div class='product'>
//                 <img src=${
//                   "http://localHost:1337" +
//                   attributes.picture.data[0].attributes.url
//                 } alt="">
//                 <h2 class='title'>${attributes.model}</h2>
//                 <p class='description'>Item ${attributes.item}</p>
//                 <p class='price'>${euro}</p>
//                 <div class='btn'>Add to cart</div>
//                 <div class='delete'>Delete</div>
//             </div>
//             `;
//   }

//   init() {
//     getItems();
//   }
