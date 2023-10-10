const tasks = [];

const taskInput = document.getElementById("taskInput");
const taskValue = taskInput.value;
const taskList = document.getElementById("taskList");

function addTask() {
  const allTasks = tasks.map((task) => {
    return task.taskValue;
  });
  console.log(allTasks);
  //oefening local storage kijken
}

function displayTasks() {
  // Your code goes here
}

function updateInsights() {
  // Your code goes here
}

// const nameUppercase = productsAboveTreshold.map((product) => {
//   return `<li>${product.name.toUpperCase()}</li>`;
// });
// productList.innerHTML = nameUppercase.join("");
