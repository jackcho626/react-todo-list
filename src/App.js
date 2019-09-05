import React, { useState } from 'react'
import './App.css'
import { create } from 'domain'
import * as R from 'ramda'
import { Alert, Row } from 'react-bootstrap'

const toggleDone = (done) => {
  done = R.not(done)
}

const Todo = ({ todo, done }) => (
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
        <input type='checkbox' onClick={ done => toggleDone(done) }></input>
        <div style={{display: 'inline', margin: '0 1.5vw', textDecoration: done? 'line-through': ''}}>{ todo.task }</div>
        <input type='button' value='x'></input>
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
    const newList = R.append({task}, todoList)
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
      { todoList.map(todo => <Todo todo={ todo } done={ false } />) }
    </div>
  </div>
)
const AppContainer = () => {
  const [todoList, setTodoList] = useState([{ task: 'Do laundry'}, { task: 'Take out trash'}])

  return <App todoList={ todoList } setTodoList={ setTodoList } />
}

export default AppContainer
