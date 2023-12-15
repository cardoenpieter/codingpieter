const items = document.querySelector(".todos");
const addItems = document.querySelector(".add-items");

function getToDo() {
  fetch(`http://localhost:3000/todo`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then(displayToDo);
}

function displayToDo(data) {
  console.log(data);
  items.innerHTML = data.todos
    .map(function (todoItem, i) {
      const isChecked = todoItem.state ? "in_progress" : "";
      const idCheck = todoItem.id;
      return `
      <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${isChecked} ${idCheck} />
          <label for="item${i}">${todoItem.name}</label>
      </li>
      `;
    })
    .join("");
}

function createItem(data) {
  return fetch(`http://localhost:3000/todo/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

function addItem() {
  const name = document.querySelector("[name=item]").value;
  const item = {
    name,
  };
  createItem(item).then(() => {
    getToDo();
  });
}

function updateItem() {
  fetch(`http://localhost:3000/todo/update`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}

function deleteItem(id) {
  fetch(`http://localhost:3000/todo${id}`, {
    method: "DELETE",
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

addItems.addEventListener("submit", addItem);
