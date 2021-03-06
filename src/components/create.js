import React from 'react'

// export const CreateTodo = ({ setTodo, submitTodo, value }) => (
//     <div className='bg-info'> 
//         {/* <form className='p-3' onSubmit={ submitTodo }>  */}
//         <form className='p-3' onSubmit={ () => submitTodo(value) }> 
//         <input placeholder='add a new todo' onChange={ e => setTodo(e.target.value)} value={ value } />
//         <input type='submit' value='create' />
//         </form>
//     </div>
// )

export const CreateTodo = ({ setTodo, submitTodo, value }) => (
    <div className='bg-info' style={{ padding: '10px' }}>         
        <input placeholder='add a new todo' onChange={ e => setTodo(e.target.value)} value={ value } />
        <input type='submit' value='create' onClick={() => submitTodo(value)} />
    </div>
)