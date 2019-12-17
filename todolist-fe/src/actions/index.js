export const addToDo = task =>{
    return {
        type: 'ADD_TODO',
        task
    }
}

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const changeStatus = (id, status) => {
    return {
        type: 'CHANGE_STATUS',
        id, 
        status
    }
}

export const initTodos = (todos) => {
    return {
        type: 'INIT_TODOS',
        todos
    } 
}