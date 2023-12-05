import TodoClient from "./TodoClient.js";
import Todo from "./Todo.js";

function getTodos() {
  const tasks = document.getElementById("tasks");
  tasks.innerHTML = "";
  TodoClient.get()
    .then(({ todos }) => {
      todos.forEach((todo) => {
        const newTodo = new Todo(todo);
        newTodo.render();
      });
    })
    .then(() => {
      const deleteButtons = document.querySelectorAll(".delete");
      deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          const id = event.target.dataset.id;
          TodoClient.delete(id).then(() => getTodos());
        });
      });
    });
}

window.addEventListener("DOMContentLoaded", () => {
  const newTaskInput = document.getElementById("new-task");
  const newTaskSubmit = document.getElementById("add-task");

  /**
   * Render the todos when the page loads
   */
  getTodos();

  newTaskSubmit.addEventListener("click", () => {
    const todo = new Todo({ name: newTaskInput.value });
    TodoClient.create(todo.get())
      .then(() => getTodos())
      .finally(() => (newTaskInput.value = ""));
  });
});
