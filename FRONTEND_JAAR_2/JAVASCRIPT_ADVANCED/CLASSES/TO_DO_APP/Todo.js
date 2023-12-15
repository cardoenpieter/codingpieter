class Todo {
  /**
   * Private attribute.
   * This means that it is only accessible from within the class.
   */
  states = {
    IN_PROGRESS: "in_progress",
    DONE: "done",
  };

  constructor(todo) {
    this.todo = todo;
    this.todo.state = this.todo.state || this.states.IN_PROGRESS;
  }

  /**
   * Will make sure the todo items are rendered in the DOM
   */
  render() {
    const list = document.getElementById("tasks");
    const template = this.template();
    list.innerHTML += template; //deze this.template() wordt er gewoon bij geduwd om te kunnen afbeelden in de browser
  }

  /**
   * @returns {string} HTML representation of the todo item
   */
  template() {
    return `
        <li>
            <input type="checkbox" />
            <label>${this.todo.name}</label>
            <button class="edit" data-id="${this.todo.id}">Edit</button>
            <button class="delete" data-id="${this.todo.id}">Delete</button>
        </li>
    `;
  }

  get() {
    return this.todo;
  }
}

export default Todo;
