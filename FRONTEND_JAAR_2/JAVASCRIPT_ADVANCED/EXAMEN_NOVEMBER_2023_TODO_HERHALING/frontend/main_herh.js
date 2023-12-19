const addItemsElem = document.querySelector(".add-items"); //queryselector werkt met alles, queryselectorall returnt array van classes
const button = document.querySelector(".button-additem");
const todosElem = document.querySelector(".todos-inprogress");
const todosDoneElem = document.querySelector(".todos-done");

//fetch GET om de data in op te slaan
function getToDo() {
  fetch(`http://localhost:3000/todo`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then(displayItems)
    .then(updateItem);
}

//function om items te displayen op de browser
function displayItems(items) {
  console.log("items", items);
  todosElem.innerHTML = items.todos
    .map((todo) => {
      const isChecked = todo.state ? "in_progress" : "done";
      const id = todo.id;
      return `
            <li>
              <input type="checkbox" id=${id} name="item" ${isChecked} />
              <label for=${id}>${todo.name}</label>
            </li>
            `;
    })
    .join("");
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
  //event.preventDefault();
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
function updateItem(id, state) {
  console.log(id, state);
  return fetch(`http://localhost:3000/todo/update/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, state }),
  });
}

function changeItems(items) {
  console.log("changeitems", items);
  return items.todos.map((todo) => {
    const id = todo.id;
    const state = todo.state;
    updateItem(id, state).then(() => {
      getToDo();
    });
  });
}

function init() {
  getToDo();
}
init();

button.addEventListener("click", addItems);
