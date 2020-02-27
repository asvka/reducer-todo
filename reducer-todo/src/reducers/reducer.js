export const initialState = {
    item: 'learn about reducers',
    completed: false,
    id: Date.now()
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
        return { ...state, item: action.payload, completed: false };

        // case "CREATE_TODO":
        // return { ...state };

        default:
        return state;
    }
}