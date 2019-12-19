const todos = (state = [], action) => {
  
  const map = new Map();
  map.clear();
  state.map(todo => map.set(todo.id, true));
  let todoIndex = 0;
  while (map.has(++todoIndex));

  switch (action.type) {
    case "ADD_TODO": {
      localStorage.setItem('index', todoIndex);
      return [
        ...state,
        {
          id: todoIndex,
          task: action.task,
          status: "todo"
        }
      ];
    }

    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);

    case "CHANGE_STATUS":
      return state.map(todo => {
        if (todo.id === action.id) todo.status = action.status;
        return todo;
      });

    case "INIT_TODOS":
      return action.todos;

    default:
      return state;
  }
};

export default todos;
