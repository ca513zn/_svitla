import React from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleRemove = (todoToDelete) => {
    setTodos(todos.filter((item) => item != todoToDelete));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(todos.concat(todo));
    setTodo("");
  };

  return (
    <div className="App">
      <div className="header">Welcome to the App</div>
      <div className="todo">
        <div className="todo__input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={todo}
              placeholder="Type here to add item"
              onChange={(e) => handleChange(e)}
            />
          </form>
        </div>
        <div className="todo__list">
          <ul>
            {(todos.length > 0 || todo.length > 0) && (
              <li key="list-header">
                <div>Task</div>
                <div>Delete</div>
              </li>
            )}
            {todos.length === 0 && todo.length === 0 ? (
              <div>NOTHING TO DO!</div>
            ) : (
              todos.map((todo, i) => (
                <li key={"todo-" + i}>
                  <div>{todo}</div>
                  <div
                    style={{
                      marginLeft: "16px",
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={() => handleRemove(todo)}
                    />
                  </div>
                </li>
              ))
            )}
            {todo.length > 0 ? (
              <li key={"new-todo"}>
                <div>{todo}</div>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
