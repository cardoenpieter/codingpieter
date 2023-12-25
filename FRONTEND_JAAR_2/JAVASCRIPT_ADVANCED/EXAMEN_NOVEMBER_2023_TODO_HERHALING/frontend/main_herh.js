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
    .then(displayItems);
}

//function om items te displayen op de browser
function displayItems(items) {
  console.log("items", items);
  return items.todos.map((todo) => {
    const isChecked = todo.state; //? "in_progress" : "done";
    const id = todo.id;
    const li = document.createElement("li");
    li.innerHTML = `
    <input type="checkbox" id=${id} name="item" ${isChecked} />
    <label for=${id}>${todo.name}</label>
    `;
    li.classList.remove("list-items-done");
    li.addEventListener("click", () => {
      updateItem(id, isChecked);
      console.log("addeventlistener", id, isChecked);
      // if (isChecked === "in_progress") {
      //   const isChecked = "done";
      //   todosDoneElem.innerHTML = `
      //   <li>
      //   <input type="checkbox" id=${id} name="item" ${isChecked}/>
      //   <label for=${id}>${todo.name}</label>
      //   <button id=${id}>delete</button>
      //   </li>
      //   `;
      // } else if (isChecked === "done") {
      //   console.log(isChecked);
      // }
    });
    return todosElem.appendChild(li);
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
  console.log("updateitem", id, state);
  return fetch(`http://localhost:3000/todo/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, state }),
  });
}

function init() {
  getToDo();
}
init();

button.addEventListener("click", addItems);
/*
const deleteButtons = document.querySelectorAll(".delete");
      deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          const id = event.target.dataset.id;
          TodoClient.delete(id).then(() => getTodos());
        });
      });
    });*/
/*
    function getName(event) {
      const allCharacters = event.data.results;
      console.log("allcharac", allCharacters);
    
      return allCharacters.forEach((character) => {
        const name = character.name;
        //console.log(name);
        const li = document.createElement("li");
        li.innerText = name;
        li.addEventListener("click", () => {
          const id = character.id;
          getSeries(id);
          removeAll();
          chosenCharacter.innerHTML = `You chose ${name}`;
        });
        return charactersElement.appendChild(li);
      });*/
