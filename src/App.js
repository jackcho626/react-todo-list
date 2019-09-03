import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React To-do List
        </p>
      </header>
      <CreateTask />
    </div>
  );
}

function CreateTask() {
  return (
    <h1>Create Task:</h1>

  );
}

export default App;
