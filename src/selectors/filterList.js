import * as R from 'ramda'
import { createSelector } from 'reselect'
import { selectFilters, selectHide, selectSearch } from '../reducers/filters'
import { selectTodos } from '../reducers/todos'

const doneLens = R.lensProp('done')
const taskLens = R.lensProp('task')

export const selectFilteredList = createSelector(
    selectFilters,
    selectTodos,
    (todos, filters) => {
        const newTodos = todos.map((todo, idx) => R.assoc('idx', idx, todo))
        const rej = R.reject(selectHide(filters) ? R.view(doneLens, R.__) : R.F)(newTodos)
        const filt = R.filter(todo => R.view(taskLens, todo).toUpperCase().includes(selectSearch(filters).toUpperCase()))(rej)
        return filt
    }
)