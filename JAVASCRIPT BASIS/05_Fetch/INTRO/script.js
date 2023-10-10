/* DOM FETCHING */
let $cntcont = document.querySelectorAll('.count-container');
let $todoCount = document.getElementById('todo-count');
let $doneCount = document.getElementById('done-count');
let $box = document.querySelectorAll('.box');
let $todoList = document.getElementById('todo-list');
let $doneList = document.getElementById('done-list');
let $btnsave = document.getElementById('save-btn');
let $btnclearall = document.getElementById('clear-all-btn');
let $container = document.querySelectorAll('.container');
let $todoInput = document.getElementById('todo-input');
let $inputcontainer = document.getElementById('input-container');
let $field = document.querySelectorAll('.field');

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
    $todoList.innerHTML = '';
    updateTodoCounter();
}

//empty done list
function clearDoneList() {
    $doneList.innerHTML = '';
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
    $todoList.insertAdjacentHTML('beforeend', boxHTML);
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
    $doneList.insertAdjacentHTML('beforeend', boxHTML);
    updateDoneCounter();
}

//add text in box with save button
function addTodoItem() {
    let curText = $todoInput.value;

    if (!curText) {
        return;
    }
    
    const data = {
        description: curText,
        done: false,
    };

    fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ABcEHA2kcrKY4a6ipUA3',
        },
        body: JSON.stringify(data),
    })
        .then(function(response) {
            $todoInput.value = '';
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            getTodoItems();
        } )
        .catch(function(err) {
            console.error(err)
        });

    
}

function todoListClick(event) {
    const $target = event.target;
    if ($target.matches('.done-btn')) {
        let todoText = $target.previousElementSibling.innerText;
        $target.parentElement.remove();
        writeDoneItem(todoText);
        updateTodoCounter();
    }

    if ($target.matches('.box') || $target.matches('.box p')) {
        const $activeTodoItem = $todoList.querySelector('.box.active');
        if ($activeTodoItem) {
            $activeTodoItem.classList.remove('active');
        }

        const $box = $target.closest('.box');
        $box.classList.add('active');
    }
}

function doneListClick(event) {
    const $target = event.target;
    if ($target.matches('.remove-btn')) {
        $target.parentElement.remove();
        updateDoneCounter();
    }
}

function getDoneItems() {
    fetch(
        'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo?filter%5Bdone%5D%5Beq%5D=1&sort=-modified_on',
        {
            method: 'GET',
            headers: { Authorization: 'Bearer ABcEHA2kcrKY4a6ipUA3' },
        }
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            clearDoneList();
            for (let i = 0; i < response.data.length; i++) {
                let doneText = response.data[i].description;
                writeDoneItem(doneText);
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}

function getTodoItems() {
    fetch(
        'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo?filter%5Bdone%5D%5Beq%5D=0&sort=-modified_on',
        {
            method: 'GET',
            headers: { Authorization: 'Bearer ABcEHA2kcrKY4a6ipUA3' },
        }
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            clearToDoList();
            for (let i = 0; i < response.data.length; i++) {
                let todoText = response.data[i].description;
                writeTodoItem(todoText);
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}

//load page
function init() {
    $todoInput.value = '';
    $todoInput.focus();
    getTodoItems();
    getDoneItems();
}

//start page
init();

//clear all button
$todoList.addEventListener('click', todoListClick);
$doneList.addEventListener('click', doneListClick);
$btnclearall.addEventListener('click', init);
$btnsave.addEventListener('click', addTodoItem);