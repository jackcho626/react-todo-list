import { CREATE_CHANGED, CREATE_SUBMITTED } from '../consts'
import * as R from 'ramda'

export const initState = ''

export const selectCreate = R.prop('create')

export const reducer = (state = initState, action) => {
    switch(action.type) {
        case CREATE_CHANGED:
            return action.payload
        case CREATE_SUBMITTED:
            return initState
        default: return state
    }
}
