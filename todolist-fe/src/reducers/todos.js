let todoIndex = 0;
const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: todoIndex++,
                    text: action.text,
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
            })
                
        default:
            return state;
    }
}

export default todos;