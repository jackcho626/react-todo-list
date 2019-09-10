export const searchChanged = (search) => { type: 'search_changed', payload: boolean }
export const showDone = (show) => { type: 'show_done', payload: boolean }
export const createChanged = (topic) => { type: 'create_changed', payload: boolean }
export const createSubmited = (topic) => { type: 'create_submitted', payload: boolean }
export const doneToggled = (idx) => { type: 'done_toggled', payload: boolean }
export const  deleteTodo = (idx) => { type: 'delete_todo', payload: boolean }