import * as R from 'ramda'
import { createSelector } from 'reselect'
import { selectFilters, selectHide } from '../reducers/filters'
import { selectTodos } from '../reducers/todos'

const doneLens = R.lensProp('done')
const taskLens = R.lensProp('task')

export const selectFilteredList = createSelector(
    selectFilters,
    selectTodos,
    state => R.pipe(
        todos => todos.map((todo, idx) => R.assoc('idx', idx, todo)),
        R.reject(selectHide(state) ? R.view(doneLens, R.__) : R.F),
        R.filter(todo => R.view(taskLens, todo).toUpperCase().includes(selectFilters(state).search.toUpperCase()))
    )(selectTodos(state))
)