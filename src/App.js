import React, { useState } from 'react'
import './App.css'
import { create } from 'domain'
import * as R from 'ramda'
import { Alert, Row, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap'

const doneLens = R.lensProp('done')

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
  <div className='bg-info'> 
    <form className='p-3' onSubmit={ submitTodo }> 
      <input placeholder='add a new todo' onChange={ e => setTodo(e.target.value) } />
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
   
const App = ({ todoList, setTodoList, toggleDone, removeTodo, filterDone, search }) => (
  <div className='App mt-0'>
    <CreateTodoContainer todoList={ todoList } setTodoList={ setTodoList } />
    <header className='App-header mt-0'>
      <p className='mt-3'>
        React To-do List
      </p>
      <Navbar bg='info' expand='lg'>
        {/* <Navbar.Brand href='#home'>My To-do List</Navbar.Brand> */}
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav.Link className='text-black-50' onClick={ filterDone }>show/hide done todos</Nav.Link>
          <Form inline onSubmit={ search }>
            <FormControl id='searchForm' type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-dark' type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
    <div>
      { todoList.map((todo, idx) => <Todo todo={ todo } idx={ idx } toggleDone={ toggleDone } removeTodo={ removeTodo } />) }
    </div>
  </div>
)
const AppContainer = () => {
  const [todoList, setTodoList] = useState([{ task: 'Do laundry', done: false }, { task: 'Take out trash', done: false }])
  const [tempList, setTempList] = useState([])
  const [hide, setHide] = useState(true)
  const [searching, setSearching] = useState(true)

  const toggleDone = (idx) => {
    const newList = [ ...todoList ]
    // newList[idx].done = R.not(newList[idx].done)
    newList[idx] = R.over(doneLens, R.not, newList[idx])
    setTodoList(newList)
  }

  const removeTodo = (idx) => {
    const newList = R.remove(idx, 1, todoList)
    // const newList = R.without([R.nth(idx, todoList)], todoList)
    // const nthSingleton = (idx, list) => [R.nth(idx, list)] // creates list only containing nth elem
    // const removeNth = R.compose(R.without, nthSingleton) // doesn't take args for some reason?
    // const newList = removeNth(idx, todoList)
    setTodoList(newList)
  }

  const filterDone = () => {
    const filteredList = R.reject(R.view(doneLens, R.__), todoList) // reject done todos, show not done
    // to hide done todos, save todoList as tempList and show filtered list
    // to show all again, restore tempList as todoList
    setTempList(todoList)
    setTodoList(hide? filteredList : tempList)
    setHide(R.not(hide))
  }

  const strMatch = (todo, matchStr) => {
    // this todo arg receives undefined props
    // alert(todo.done)
    // alert(todo.task)
    return todo.task.toUpperCase.includes(matchStr.toUpperCase)
  }

  const search = () => {
    // react-bootstrap elem's value field not recognized by VS Code but is correct
    const matchStr = document.getElementById('searchForm').value
    // gets right search val but gets stuck here
    const searchResults = R.filter(strMatch(R.__, matchStr), todoList)
    // alert(searchResults)
    setTempList(todoList)
    // alert(todoList)
    setTodoList(searching? searchResults : tempList)
    setSearching(R.not(searching))
  }

  return <App todoList={ todoList } setTodoList={ setTodoList } toggleDone={ toggleDone } removeTodo={ removeTodo } filterDone={ filterDone } search={ search } />
}

export default AppContainer
