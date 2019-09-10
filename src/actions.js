import * as consts from './consts'

export const searchChanged = (search) => ({ type: consts.searchChanged, payload: search })
export const showDone = (show) => ({ type: consts.showDone, payload: show })
export const createChanged = (topic) => ({ type: consts.createChanged, payload: topic })
export const createSubmited = (topic) => ({ type: consts.createSubmited, payload: topic })
export const doneToggled = (idx) => ({ type: consts.doneToggled, payload: idx })
export const  deleteTodo = (idx) => ({ type: consts.deleteTodo, payload: idx })