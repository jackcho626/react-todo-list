import { connect } from 'react-redux'
import { CreateTodo } from '../components/create'

const mapStateToProps = state  => ({
  value: 'hello world'
})

const mapDispatchToProps = dispatch => ({
  setTodo: console.log,
  submitTodo: console.log
})

export const CreateTodoContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTodo)