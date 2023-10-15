const categorie = document.getElementById("categories");
const showValue = document.getElementById("showValue");
fetch("https://api.chucknorris.io/jokes/categories")
  .then((res) => res.json())
  .then((res) => {
    const allCat = res.map((category) => {
      return `<li><button>${category}</button></li>`;
    });
    categorie.innerHTML = allCat.join("");
    document.addEventListener("click", function (event) {
      console.log(`${event.target.innerHTML}`);
    });
    getJokes();
    console.log(res);
  });

function getJokes() {
  fetch("https://api.chucknorris.io/jokes/random?category={category}")
    .then((res) => res.json())
    .then((res) => {
      //let category = `{category}`;
      //console.log(category);
      showValue.innerHTML = res.value;
    });
}

//addeventlistener, getjokes meegeven, via event.target in de getjokes
//de categorie meegeven
//categorie.addEventListener("click", getJokes());

/*
document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    alert(`You clicked on button ${event.target.innerText}`)
  })

  */
