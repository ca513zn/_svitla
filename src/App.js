import React from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleRemove = (todoToDelete) => {
    setTodos(todos.filter((item) => item !== todoToDelete));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(todos.concat(todo));
    setTodo("");
  };

  return (
    <div className="App">
      <div className="todo centered">
      <div className="header">Welcome to the App</div>
        <div className="todo__input centered">
          <form onSubmit={handleSubmit} className="w-100-h-100 centered">
            <input
              type="text"
              value={todo}
              placeholder="Type here to add item"
              onChange={handleChange}
            />
          </form>
        </div>
        <div className="todo__list centered">
          <ul>
            {(todos.length > 0 || todo.length > 0) && (
              <li key="list-header">
                <p>Task</p>
                <p>Delete</p>
              </li>
            )}
            {todos.length === 0 && todo.length === 0 ? (
              <div className="todo__nothing centered">
                <p>NOTHING TO DO!</p>
              </div>
            ) : (
              todos.map((todo, i) => (
                <li key={"todo-" + i}>
                  <p>{todo}</p>
                  <div
                    style={{
                      marginLeft: "16px",
                    }}
                  >
                    <input
                      style={{
                        marginRight: "16px",
                      }}
                      type="checkbox"
                      onChange={() => handleRemove(todo)}
                    />
                  </div>
                </li>
              ))
            )}
            {todo.length > 0 && (
              <li key={"new-todo"}>
                <div>{todo}</div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
