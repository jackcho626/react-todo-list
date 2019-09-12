import { connect } from 'react-redux'
import { TodoList } from '../components/todos'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

const mapStateToProps = state  => ({
  todo: state.todos,
  idx: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleDone: bindActionCreators(actions.doneToggled, dispatch),
  removeTodo: bindActionCreators(actions.deleteTodo, dispatch)
})

export const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)