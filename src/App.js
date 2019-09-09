import React, { useState } from 'react'
import './App.css'
import { create } from 'domain'
import * as R from 'ramda'
import { Alert, Row, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

const doneLens = R.lensProp('done')
const taskLens = R.lensProp('task')

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
   
const App = ({ todoList, setTodoList, toggleDone, removeTodo, filterDone, setSearchStr }) => (
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
          <Form inline>
            <FormControl id='searchForm' type='text' placeholder='Search' className='mr-sm-2' onChange={ e => setSearchStr(e.target.value) } />
            {/* <Button variant='outline-dark' type='submit'>Search</Button> */}
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
  const [hide, setHide] = useState(false)
  const [searchStr, setSearchStr] = useState('')

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

  const filteredList = R.pipe(
    todos => todos.map((todo, idx) => R.assoc('idx', idx, todo)),
    R.reject(hide ? R.view(doneLens, R.__) : R.F),
    R.filter(todo => R.view(taskLens, todo).toUpperCase().includes(searchStr.toUpperCase()))
  )(todoList)

  const filterDone = () => {
    // const filteredList = R.reject(R.view(doneLens, R.__), todoList) // reject done todos, show not done
    // // to hide done todos, save todoList as tempList and show filtered list
    // // to show all again, restore tempList as todoList
    // setTempList(todoList)
    // setTodoList(hide? filteredList : tempList)
    setHide(R.not(hide))
  }

  // const isSubstr = (searchStr, todo) => {
  //   // this todo arg receives undefined props
  //   // alert(todo.done)
  //   alert(todo.task)
  //   return todo.task.toUpperCase.includes(searchStr.toUpperCase)
  //   // const upperTask = R.toUpper(todo.task)
  //   // return R.includes(R.toUpper(matchStr), upperTask)
  // }

  // const search = () => {
  //   // react-bootstrap elem's value field not recognized by VS Code but is correct
  //   // Never use this in React
  //   // const matchStr = document.getElementById('searchForm').value
  //   // gets right search val & type but gets stuck here

  //   const searchResults = R.filter(isSubstr(searchStr, R.__), todoList)
  //   // const searchResults = R.filter(R.includes(, R.__.task), todoList)

  //   // alert(searchResults)
  //   setTempList(todoList)
  //   // alert(todoList)
  //   setTodoList(searchResults)
  // }

  return <App todoList={ filteredList } setTodoList={ setTodoList } toggleDone={ toggleDone } removeTodo={ removeTodo } 
    filterDone={ filterDone } setSearchStr={ setSearchStr } />
}

export default AppContainer
