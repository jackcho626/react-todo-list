import { SEARCH_CHANGED, SHOW_DONE } from '../consts'

export const initState = {
    hide: false,
    search: ''
  }
  
  export const reducer = (state = initState, action) => {
    switch(action.type) {
        case SEARCH_CHANGED:
          return { ...state, search: action.payload }
        case SHOW_DONE:
          return { hide: action.payload, ...state }
        default: 
          return state
    }
}
