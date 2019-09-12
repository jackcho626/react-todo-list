import { connect } from 'react-redux'
import { TodoList } from '../components/todos'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import * as R from 'ramda'

const doneLens = R.lensProp('done')
const taskLens = R.lensProp('task')

const mapStateToProps = state  => ({
    todos: R.pipe(
        todos => todos.map((todo, idx) => R.assoc('idx', idx, todo)),
        R.reject(state.filters.hide ? R.view(doneLens, R.__) : R.F),
        R.filter(todo => R.view(taskLens, todo).toUpperCase().includes(state.filters.search.toUpperCase()))
    )(state.todos)
})

const mapDispatchToProps = dispatch => ({
  toggleDone: bindActionCreators(actions.doneToggled, dispatch),
  removeTodo: bindActionCreators(actions.deleteTodo, dispatch)
})

export const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)