const category = document.getElementById("categories");
const showValue = document.getElementById("showValue");
fetch("https://api.chucknorris.io/jokes/categories")
  .then((res) => res.json())
  .then((res) => {
    const allCat = res.map((allCategory) => {
      return `<li><button onclick=getJokes()>${allCategory}</button></li>`;
    });
    category.innerHTML = allCat.join("");
    document.addEventListener("click", function (event) {
      console.log(`${event.target.innerHTML}`);
    });
    console.log(res);
  });

function getJokes(event) {
  fetch("https://api.chucknorris.io/jokes/random?category={category}")
    .then((res) => res.json())
    .then((res) => {
      let chosenCategory = `{category}`;
      console.log(chosenCategory);
      document.addEventListener("change", () => {
        chosenCategory = event.target.value;
        console.log(chosenCategory);
      });
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
