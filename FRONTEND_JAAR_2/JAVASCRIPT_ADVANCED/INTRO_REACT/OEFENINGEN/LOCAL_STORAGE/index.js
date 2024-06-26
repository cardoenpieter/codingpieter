//oplossing
/**** 
function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset(); //inputfield gaat leeg zijn
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
            <label for="item${i}">${plate.text}</label>
    
          </li>
        `;
    })
    .join("");
}

//van wanneer er een toggle gebeurt ook in local storage steken
function toggleDone(e) { 
  if (!e.target.matches("input")) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList); //direct uitvoeren wnn pagina opstart
****/

const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("item")) || []; //json.parse alles in local storage is een string, de lege array mag geparsd worden als er een lege string is

function addItem(event) {
  event.preventDefault();
  //grab the value from the input field
  //this is een referentie van op welk html element je werkt en verwijst er naar
  //this is in dit geval event.target
  const text = this.querySelector("[name=item]").value; //query op een attribuut in html
  const item = {
    text,
    done: false,
  };
  items.push(item);
  localStorage.setItem("item", JSON.stringify(items));
  populateList(items, itemsList);
  this.reset(); //inputfield gaat leeg zijn
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map(function (plate, i) {
      const isChecked = plate.done ? "checked" : "";
      // let isChecked
      // if (plate.done === false) {
      //     isChecked = "checked"
      // }
      return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${isChecked} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    })
    .join("");
}

//van wanneer er een toggle gebeurt ook in local storage steken
function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem); //additem is een callbackfunctie
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList); //direct uitvoeren wnn pagina opstart
