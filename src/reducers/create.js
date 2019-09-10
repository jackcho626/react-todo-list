import { CREATE_CHANGED } from '../consts'

export const initState = ''

export const reducer = (state = initState, action) => {
    switch(action.type) {
        case CREATE_CHANGED:
            return action.payload
        default: return state
    }
}
