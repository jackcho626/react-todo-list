import React, { useState } from 'react'
import './App.css'
import { create } from 'domain';

const Todo = ({ todo }) => (
  <div>
    { todo.task }
  </div>
)

const CreateTodo = ({ setTodo, submitTodo }) => (
  <div> 
    <h2>Create To-do: </h2>
    <form onSubmit={ submitTodo }> 
      <input onChange={ e => setTodo(e.target.value) } />
      <input type='submit' value='create' />
    </form>
  </div>
)
const CreateTodoContainer = ({ todoList, setTodoList }) => {
  const [todo, setTodo] = useState('')

  const createTodo = task => {
    const newList = [ ...todoList, { task } ]
    setTodoList(newList)
  }

  const submitTodo = (e) => {
    e.preventDefault() // prevent reverting to default
    createTodo(todo)
  }

  return <CreateTodo setTodo={ setTodo } submitTodo={ submitTodo } />
}
   
const App = ({ todoList, setTodoList }) => (
  <div className='App'>
    <CreateTodoContainer todoList={ todoList } setTodoList={ setTodoList } />
    <header className='App-header'>
      <p>
        React To-do List
      </p>
    </header>
    <div>
      { todoList.map(todo => <Todo todo={ todo } />) }
    </div>
  </div>
)
const AppContainer = () => {
  const [todoList, setTodoList] = useState([{ task: 'Do laundry'}, { task: 'Take out trash'}])

  return <App todoList={ todoList } setTodoList={ setTodoList } />
}

export default AppContainer
