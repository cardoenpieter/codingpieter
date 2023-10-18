const categoryHTML = document.getElementById("categories");
const showValue = document.getElementById("showValue");
fetch("https://api.chucknorris.io/jokes/categories")
  .then((res) => res.json())
  .then((res) => {
    const allCat = res.map((category) => {
      return `<li><button onclick=getJokes('${category}')>${category}</button></li>`;
      //onclick=getJokes'${category}' refereert naar de URL
    });
    categoryHTML.innerHTML = allCat.join("");
    console.log(res);
  });

function getJokes(category) {
  //category als event refereert naar de ${category} in de URL
  fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((res) => res.json())
    .then((res) => {
      showValue.innerHTML = res.value;
    });
}
