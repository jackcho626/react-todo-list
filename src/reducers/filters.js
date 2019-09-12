import { SEARCH_CHANGED, HIDE_DONE } from '../consts'

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
