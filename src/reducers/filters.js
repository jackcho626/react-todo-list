import { SEARCH_CHANGED, HIDE_DONE } from '../consts'
import * as R from 'ramda'

export const selectFilters = R.prop('filters')
export const selectHide = R.pipe(selectFilters, R.prop('hide'))
export const selectSearch = R.pipe(selectFilters, R.prop('search'))

export const initState = {
    hide: false,
    search: ''
  }
  
  export const reducer = (state = initState, action) => {
    switch(action.type) {
        case SEARCH_CHANGED:
          return { ...state, search: action.payload }
        case HIDE_DONE:
          return { ...state, hide: !action.payload  }
        default: 
          return state
    }
}
