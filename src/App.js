import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <CreateTodo />
      <header className="App-header">
        <p>
          React To-do List
        </p>
      </header>
    </div>
  );
}

function CreateTodo({createTodo}) {
  const [todo, setTodo] = useState("");
  return (
    <div> 
      <h2>Create To-do: </h2>
      <form>
        <input onChange={ e => setTodo(e.target.value) } />
      </form>
    </div>
  );
}

export default App;
