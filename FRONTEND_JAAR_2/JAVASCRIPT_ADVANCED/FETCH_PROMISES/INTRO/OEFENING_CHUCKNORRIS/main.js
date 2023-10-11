const categorie = document.getElementById("categories");
const showValue = document.getElementById("showValue");
fetch("https://api.chucknorris.io/jokes/categories")
  .then((res) => res.json())
  .then((res) => {
    const allCat = res.map((category) => {
      //addeventlistener, getjokes meegeven, via event.target in de getjokes de categorie meegeven
      return `<li><button onclick="getJokes()">${category}</button></li>`;
    });
    categorie.innerHTML = allCat.join("");

    console.log(res);
  });

function getJokes() {
  fetch("https://api.chucknorris.io/jokes/random?category=food")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      showValue.innerHTML = res.value;
    });
}
