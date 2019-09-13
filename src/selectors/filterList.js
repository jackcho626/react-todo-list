import * as R from 'ramda'

const doneLens = R.lensProp('done')
const taskLens = R.lensProp('task')

export const filteredList = state => R.pipe(
    todos => todos.map((todo, idx) => R.assoc('idx', idx, todo)),
    R.reject(state.filters.hide ? R.view(doneLens, R.__) : R.F),
    R.filter(todo => R.view(taskLens, todo).toUpperCase().includes(state.filters.search.toUpperCase()))
)(state.todos)