import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const Todo = () => {
    const [newTodo, setNewTodo] = useState("");

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const addTodo = e => {
        dispatch({ type: "ADD_TODO", payload: newTodo });
    };

    // const createNewTodo = e => {
    //     dispatch({ type: "CREATE_TODO" });
    // }

    return (
        <div>
            {state.completed ? (
                <div>
                    <input
                    className="todo-input"
                    type="text"
                    name="todoText"
                    value={newTodo}
                    />
                    <button />
                </div>
            ) : (
            <div>
                <h2>
                {state.item}
                </h2>
            <input
            type="text"
            name="newTodoText"
            value={newTodo}
            onChange={handleChanges}
            />
            <button onClick={addTodo} >Add task!</button>
            </div>
            )}
        </div>
            // <div>
            //     <h2>{state.item}</h2>

            //     <input
            //     type="text"
            //     name="newTodoText"
            //     value={newTodo}
            //     onChange={handleChanges}
            //     />
            //    <button onClick={addTodo} >Add task!</button>
            // </div>
    );
};
export default Todo;