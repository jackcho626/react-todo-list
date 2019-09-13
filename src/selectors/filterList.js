import * as R from 'ramda'
import { createSelector } from 'reselect'
import { selectFilters } from '../reducers/filters'
import { selectTodos } from '../reducers/todos'

const doneLens = R.lensProp('done')

export const selectFilteredList = createSelector(
    selectTodos,
    selectFilters,
    // (todos, filters) => {
    //     const newTodos = todos.map((todo, idx) => R.assoc('idx', idx, todo))
    //     // const rej = R.reject(filters.hide ? R.view(doneLens, R.__) : R.F)(newTodos)
    //     const rej = R.reject(filters.hide ? R.view(doneLens, R.__) : R.F)(newTodos)
    //     const filt = R.filter(todo => todo.task.toUpperCase().includes(selectSearch(filters).toUpperCase()))(rej)
    //     return filt
    // }
    (todos, filters) =>
    todos.map((todo, idx) => ({ ...todo, idx }))
        .filter(todo => filters.hide ? !todo.done: true)
        .filter(todo => todo.task.toUpperCase().includes(filters.search.toUpperCase()))
)