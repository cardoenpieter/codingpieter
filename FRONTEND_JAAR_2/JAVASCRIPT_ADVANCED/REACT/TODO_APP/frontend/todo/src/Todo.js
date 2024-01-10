import { useState, useEffect } from "react";

const TodoApp = (props) => {
  const [name, setName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  //   function addTask(name) {
  //     alert(name);
  //   }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} /*addTask={addTask}*/>
      <div>
        <h1>TODO LIST</h1>
        <input
          type="text"
          id="new-todo-input"
          className="input-todo"
          name="text"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn-submit">
          Add
        </button>
        <h2 className="in-progress">In Progress</h2>
        <h2 className="done">Done</h2>
      </div>
    </form>
  );
};
export default TodoApp;
