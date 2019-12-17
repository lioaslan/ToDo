let todoIndex = 0;
const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: todoIndex++,
                    task: action.task,
                    status: "todo"
                }
            ];

        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);

        case 'CHANGE_STATUS':
            return state.map((todo) => {
                if (todo.id === action.id) 
                    todo.status = action.status;
                return todo;
            });
                
        case 'INIT_TODOS': 
            return action.todos;
        default:
            return state;
    }
}

export default todos;