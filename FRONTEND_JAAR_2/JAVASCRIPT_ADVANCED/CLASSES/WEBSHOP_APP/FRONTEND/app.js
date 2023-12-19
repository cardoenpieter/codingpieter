import LegoClient from "./legoClient.js";

function getItems() {
  const containerCard = document.querySelector(".container");
  LegoClient.get().then(({ data }) => {
    console.log(data);
    data.forEach((item) => {
      containerCard.innerHTML += template(item);
    });
  });
}

function template({ attributes }) {
  const euro = Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency: "EUR",
  }).format(attributes.price / 100);
  return `
    <div class='product'>
        <img src=${
          "http://localHost:1337" + attributes.picture.data[0].attributes.url
        } alt="">
        <h2 class='title'>${attributes.model}</h2>
        <p class='description'>Item ${attributes.item}</p>
        <p class='price'>${euro}</p>
        <div class='btn'>Add to cart</div>
        <div class='quickview'>Quickview</div>
    </div>
    `;
}

function init() {
  getItems();
}
init();
