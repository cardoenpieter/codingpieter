class TodoClient {
  constructor() {
    // define attribute apiUrl on class instance
    this.apiUrl = "http://localhost:3000/todo";
  }

  /**
   * Get all the todos from the server
   * we can access the attribute apiUrl on class instance
   * because we are exporting the class at the bottom of this file
   *using the new keyword
   * @returns {Promise<Todo>} A promise that resolves to an array of todos
   */
  get() {
    return fetch(this.apiUrl).then((response) => response.json());
  }

  /**
   * Create a new todo
   * @param {Todo} todo
   * @returns nothing
   */
  create(todo) {
    return fetch(`${this.apiUrl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  }

  /**
   * Update the status of a todo item
   * @param {string} id the id of the todo item to update
   * @param {boolean} inProgress toggling in progress or done
   * @returns
   */
  updateStatus(id, inProgress) {
    return fetch(`${this.apiUrl}/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, state: inProgress }),
    });
  }

  /**
   * Delete a todo item
   * @param {string} id the id of the todo item to delete
   * @returns
   */
  delete(id) {
    return fetch(`${this.apiUrl}/${id}`, {
      method: "DELETE",
    });
  }
}

export default new TodoClient();
