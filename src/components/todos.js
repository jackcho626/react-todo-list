import { Row, Alert } from 'react-bootstrap'
import React from 'react'

const Todo = ({ todo, idx, toggleDone, removeTodo }) => (
    <Row className='justify-content-md-center'>
      <Alert variant='info'>
        {/* { <InputGroup.Prepend>
          <InputGroup.Checkbox />
        </InputGroup.Prepend>
        <FormControl>
          
        </FormControl>
        <InputGroup.Append>
          <InputGroup.Text>x</InputGroup.Text>
        </InputGroup.Append> } */}
        <input type='checkbox' checked={ todo.done } onChange={ () => toggleDone(idx) }></input>
        <p style={{display: 'inline', margin: '0 1.5vw', color: todo.done? 'grey':'black', textDecoration: todo.done? 'line-through': ''}}>
          { todo.task }</p>
        <input type='button' value='x' onClick={ () => removeTodo(idx) }></input>
      </Alert>
    </Row>
)

export const TodoList = ({ todo, toggleDone, removeTodo, idx }) => (
<div>
    todoList.map((todo, idx) => <Todo todo={ todo } idx={ todo.idx } toggleDone={ toggleDone } removeTodo={ removeTodo } key={ `todo-${idx}` } />) }
</div>)
