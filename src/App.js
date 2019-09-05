import React, { useState } from 'react'
import './App.css'
import { create } from 'domain'
import * as R from 'ramda'
import { Alert, Row } from 'react-bootstrap'


const Todo = ({ todo, idx, toggleDone, removeTodo }) => (
    <Row className='justify-content-md-center'>
      <Alert variant='info'>
        {/* <InputGroup.Prepend>
          <InputGroup.Checkbox />
        </InputGroup.Prepend>
        <FormControl>
          
        </FormControl>
        <InputGroup.Append>
          <InputGroup.Text>x</InputGroup.Text>
        </InputGroup.Append> */}
        <input type='checkbox' onClick={ () => toggleDone(idx) }></input>
        <p style={{display: 'inline', margin: '0 1.5vw', color: todo.done? 'grey':'black', textDecoration: todo.done? 'line-through': ''}}>
          { todo.task }</p>
        <input type='button' value='x' onClick={ () => removeTodo(idx) }></input>
      </Alert>
    </Row>
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
    // const newList = [ ...todoList, { task } ]
    const newList = R.append({ task, done: false }, todoList)
    setTodoList(newList)
  }

  const submitTodo = (e) => {
    e.preventDefault() // prevent reverting to default
    createTodo(todo)
  }

  return <CreateTodo setTodo={ setTodo } submitTodo={ submitTodo } />
}
   
const App = ({ todoList, setTodoList, toggleDone, removeTodo }) => (
  <div className='App'>
    <CreateTodoContainer todoList={ todoList } setTodoList={ setTodoList } />
    <header className='App-header'>
      <p>
        React To-do List
      </p>
    </header>
    <div>
      { todoList.map((todo, idx) => <Todo todo={ todo } idx={ idx } toggleDone={ toggleDone } removeTodo={ removeTodo } />) }
    </div>
  </div>
)
const AppContainer = () => {
  const [todoList, setTodoList] = useState([{ task: 'Do laundry', done: false }, { task: 'Take out trash', done: false }])

  const toggleDone = (idx) => {
    const newList = [ ...todoList ]
    newList[idx].done = R.not(newList[idx].done)
    setTodoList(newList)
  }

  const removeTodo = (idx) => {
    const newList = R.without([R.nth(idx, todoList)], todoList)
    // const nthSingleton = (idx, list) => [R.nth(idx, list)] // creates list only containing nth elem
    // const removeNth = R.compose(R.without, nthSingleton)
    // const newList = removeNth(idx, todoList)
    setTodoList(newList)
  }

  return <App todoList={ todoList } setTodoList={ setTodoList } toggleDone={ toggleDone } removeTodo={ removeTodo } />
}

export default AppContainer
