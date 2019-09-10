import { DELETE_TODO, DONE_TOGGLED, CREATE_SUBMITTED } from '../consts'
import R from 'ramda'

const doneLens = R.lensProp('done')

export const initState = [{ task: 'Do laundry', done: false}, 
    { task: 'Take out trash', done: false}]

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case DELETE_TODO:
            return R.remove(action.payload, 1, state)
        case DONE_TOGGLED:
            const idx = action.payload
            const newList = [...state]
            newList[idx] = R.over(doneLens, R.not, newList[idx])
            return newList
        case CREATE_SUBMITTED:
            return [...state, { task: action.payload, done: false }]
        default:
            return state
    }
}
