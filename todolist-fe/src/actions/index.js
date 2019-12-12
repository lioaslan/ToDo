export const addToDo = text =>{
    return {
        type: 'ADD_TODO',
        text
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