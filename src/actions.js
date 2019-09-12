import * as consts from './consts'

export const searchChanged = (search) => ({ type: consts.SEARCH_CHANGED, payload: search })
export const hideDone = (hide) => ({ type: consts.SHOW_DONE, payload: hide })
export const createChanged = (topic) => ({ type: consts.CREATE_CHANGED, payload: topic })
export const createSubmited = (topic) => ({ type: consts.CREATE_SUBMITTED, payload: topic })
export const doneToggled = (idx) => ({ type: consts.DONE_TOGGLED, payload: idx })
export const  deleteTodo = (idx) => ({ type: consts.DELETE_TODO, payload: idx })