const addItemsElem = document.querySelector(".add-items"); //queryselector werkt met alles, queryselectorall returnt array van classes
const button = document.querySelector(".button-additem");

//fetch GET om de data in op te slaan
function getToDo() {
  fetch(`http://localhost:3000/todo`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}

//fetch POST om data te creeren en naar toe te sturen
function createItem(data) {
  return fetch(`http://localhost:3000/todo/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

//bij click op button: input meegeven aan createItem en .then wegens promise
function addItems() {
  //name required
  //waarde uit de input halen
  const name = document.querySelector("[name=item]").value;
  const item = {
    name,
  };
  //functie createItem gebruiken en doorgeven aan de getToDo
  createItem(item).then(() => {
    getToDo();
  });
}

//fetch POST om data te updaten zoals checkbox afvinken,state: Enum -> "in_progress" or "done"
function updateItem() {
  return fetch(`http://localhost:3000/todo/update`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}

function init() {
  getToDo();
}
init();

button.addEventListener("click", addItems);
