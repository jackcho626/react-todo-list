import { connect } from 'react-redux'
import { CreateTodo } from '../components/create'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import { selectCreate } from '../reducers/create'

const mapStateToProps = state  => ({
  // value: state.create
  value: selectCreate(state)
})

const mapDispatchToProps = dispatch => ({
  setTodo: bindActionCreators(actions.createChanged, dispatch),
  submitTodo: bindActionCreators(actions.createSubmited, dispatch)
})

export const CreateTodoContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTodo)