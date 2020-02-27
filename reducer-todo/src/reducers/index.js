export const initialState = {
    todos: [
        {
            item: 'learn about reducers',
            completed: false,
            id: Date.now()
        },
    ]
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state, todos: [...state.todos, {item: action.payload, id: Date.now(), completed: false}]
            };
        case "CLEAR_COMPLETED":
            return {
                ...state, todos: state.todos.filter((todo) => !todo.completed)
            };
        case "TOGGLE_COMPLETE": {
            return {
                ...state, todos: state.todos.map((todo) => (todo.id === action.payload ? {...todo, completed: !todo.completed}: todo))
            }
        }
        default:
        return state;
    }
}