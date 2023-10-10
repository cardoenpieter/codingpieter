/* DOM FETCHING */
let $cntcont = document.querySelectorAll(".count-container");
let $todoCount = document.getElementById("todo-count");
let $doneCount = document.getElementById("done-count");
let $box = document.querySelectorAll(".box");
let $todoList = document.getElementById("todo-list");
let $doneList = document.getElementById("done-list");
let $btnsave = document.getElementById("save-btn");
let $btnclearall = document.getElementById("clear-all-btn");
let $container = document.querySelectorAll(".container");
let $todoInput = document.getElementById("todo-input");
let $inputcontainer = document.getElementById("input-container");
let $field = document.querySelectorAll(".field");

function updateTodoCounter() {
  let todoCount = $todoList.children.length;
  $todoCount.innerText = todoCount;
}

function updateDoneCounter() {
  let doneCount = $doneList.children.length;
  $doneCount.innerText = doneCount;
}

//empty to do list
function clearToDoList() {
  $todoList.innerHTML = "";
  updateTodoCounter();
}

//empty done list
function clearDoneList() {
  $doneList.innerHTML = "";
  updateDoneCounter();
}

//add box and text with save button
function writeTodoItem(text) {
  let boxHTML = `
        <div class="box">
            <p>
                ${text}
            </p>
            <button class="done-btn fas fa-check-circle fa-2x"></button>
        </div>
    `;
  $todoList.insertAdjacentHTML("beforeend", boxHTML);
  updateTodoCounter();
}

function writeDoneItem(text) {
  let boxHTML = `
         <div class="box">
            <p>
                ${text}
            </p>
            <button class="remove-btn fas fa-times-circle fa-2x"></button>
        </div>
    `;
  $doneList.insertAdjacentHTML("beforeend", boxHTML);
  updateDoneCounter();
}

//add text in box with save button
function addTodoItem() {
  let curText = $todoInput.value;

  if (!curText) {
    return;
  }

  writeTodoItem(curText);
  $todoInput.value = "";
}

function todoListClick(event) {
  const $target = event.target;
  if ($target.matches(".done-btn")) {
    let todoText = $target.previousElementSibling.innerText;
    $target.parentElement.remove();
    writeDoneItem(todoText);
    updateTodoCounter();
  }

  if ($target.matches(".box") || $target.matches(".box p")) {
    const $activeTodoItem = $todoList.querySelector(".box.active");
    if ($activeTodoItem) {
      $activeTodoItem.classList.remove("active");
    }

    const $box = $target.closest(".box");
    $box.classList.add("active");
  }
}

function doneListClick(event) {
  const $target = event.target;
  if ($target.matches(".remove-btn")) {
    $target.parentElement.remove();
    updateDoneCounter();
  }
}
//load page
function init() {
  $todoInput.value = "";
  $todoInput.focus();
  clearToDoList();
  clearDoneList();
}

//start page
init();

//eventListener
$todoList.addEventListener("click", todoListClick);
$doneList.addEventListener("click", doneListClick);
$btnclearall.addEventListener("click", init);
$btnsave.addEventListener("click", addTodoItem);
