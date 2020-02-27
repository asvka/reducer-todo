import React, { useReducer } from 'react';
import './App.css';
import  TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { todoReducer, initialState } from './reducers/index'

function App() {
  const [ state, dispatch ] = useReducer(todoReducer, initialState);
  const addTodo  = (item) => dispatch({type: 'ADD_TODO', payload: item})
  const toggleComplete  = (id) => dispatch({type: 'TOGGLE_COMPLETE', payload: id})
  const clearCompleted = () => dispatch({type: 'CLEAR_COMPLETED'})
  return (
    <div className="App">
      <h1>To-Do List:</h1>
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/>
      <TodoList todos={state.todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
