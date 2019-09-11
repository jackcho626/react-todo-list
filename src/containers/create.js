import { connect } from 'react-redux'
import { CreateTodo } from '../components/create'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

const mapStateToProps = state  => ({
  value: state.value
})

const mapDispatchToProps = dispatch => ({
  setTodo: bindActionCreators(actions.createChanged, dispatch),
  submitTodo: bindActionCreators(actions.createSubmited, dispatch)
})

export const CreateTodoContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTodo)