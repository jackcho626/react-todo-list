export const searchChanged = (search) => ({ type: 'search_changed', payload: search })
export const showDone = (show) => ({ type: 'show_done', payload: show })
export const createChanged = (topic) => ({ type: 'create_changed', payload: topic })
export const createSubmited = (topic) => ({ type: 'create_submitted', payload: topic })
export const doneToggled = (idx) => ({ type: 'done_toggled', payload: idx })
export const  deleteTodo = (idx) => ({ type: 'delete_todo', payload: idx })