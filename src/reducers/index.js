
import { combineReducers } from 'redux'
import { reducer as create } from './create'
import { reducer as filters } from './filters'
import { reducer as todos } from './todos'

export const reducer = combineReducers({
  create,
  filters,
  todos
})