import { CREATE_CHANGED, CREATE_SUBMITTED } from '../consts'

export const initState = ''

export const reducer = (state = initState, action) => {
    switch(action.type) {
        case CREATE_CHANGED:
            return action.payload
        case CREATE_SUBMITTED:
            state = initState
            break
        default: return state
    }
}
