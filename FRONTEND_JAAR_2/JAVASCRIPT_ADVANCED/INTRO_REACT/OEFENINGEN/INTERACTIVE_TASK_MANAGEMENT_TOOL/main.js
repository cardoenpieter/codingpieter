// const tasks = [];
// let taskID = 0; //deze is nodig om elke task een ID te geven om makkelijk te kunnen weervinden

// const taskInput = document.getElementById("taskInput");
// //const taskValue = taskInput.value;
// const taskList = document.getElementById("taskList");

// function addTask() {
//   const inputField = taskInput.value;
//   //console.log(inputField);
//   tasks.push(inputField);
//   console.log(tasks);
//   taskInput.value = "";
// }

// function displayTasks() {
//   const display = tasks.map((task) => {
//     console.log(display);
//   });
//   addTask();
// }

// function updateInsights() {
//   // Your code goes here
// }

// const nameUppercase = productsAboveTreshold.map((product) => {
//   return `<li>${product.name.toUpperCase()}</li>`;
// });
// productList.innerHTML = nameUppercase.join("");

// const text = this.querySelector("[name=item]").value;
//   const item = {
//     text,
//     done: false,
//   };
//   items.push(item);
//   localStorage.setItem("item", JSON.stringify(items));
//   populateList(items, itemsList);
//   this.reset();

const tasks = [];
let taskId = 0; // A simple way to ensure unique IDs
function addTask() {
  const taskDescription = document.getElementById("taskInput").value;
  if (taskDescription) {
    tasks.push({
      //object in een array aanmaken om met deze data verder te kunnen werken
      id: taskId++,
      description: taskDescription,
      status: "pending",
    });
    document.getElementById("taskInput").value = ""; // Clear the input field
    displayTasks();
    updateInsights();
  }
}
function toggleTaskStatus(taskId) {
  const task = tasks.find((t) => t.id === taskId); //ID vinden
  if (task) {
    task.status = task.status === "completed" ? "pending" : "completed";
    displayTasks();
    updateInsights();
  }
}
function displayTasks() {
  const filterValue = document.getElementById("taskFilter").value;
  const filteredTasks = tasks.filter(
    //.filter gebruiken om te kunnen filteren op de 3 values
    (task) => filterValue === "all" || task.status === filterValue
  );
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear previous tasks
  filteredTasks.forEach((task) => {
    //geen array nodig na deze functie, vandaar .foreach en geen .map
    const listItem = document.createElement("li");
    listItem.textContent = task.description;
    listItem.style.textDecoration =
      task.status === "completed" ? "line-through" : "none";
    listItem.onclick = () => toggleTaskStatus(task.id);
    taskList.appendChild(listItem); //
  });
}
function updateInsights() {
  const completedTasks = tasks.filter((task) => task.status === "completed");
  const avgTaskLength =
    tasks.reduce((acc, task) => acc + task.description.length, 0) /
    tasks.length;
  document.getElementById("completedCount").textContent = completedTasks.length;
  document.getElementById("avgTaskLength").textContent =
    avgTaskLength.toFixed(2); //tofixed bepaalt de komma's
}
