import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // will stop the page from refreshing
    setTodos([...todos, input]);
    setInput(""); // clear up the input after clicking the button
  };

  return (
    <div>
      <h1> To-do App </h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
