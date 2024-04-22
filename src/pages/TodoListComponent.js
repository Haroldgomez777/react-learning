import React, { useReducer, useState } from 'react';

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { todos: [...state.todos, { id: Date.now(), text: action.payload, editing: false }] };
    case 'delete':
      return { todos: state.todos.filter(todo => todo.id !== action.payload) };
    case 'edit':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text, editing: false } : todo
        ),
      };
    case 'toggleEdit':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, editing: !todo.editing } : todo
        ),
      };
    default:
      return state;
  }
}

function TodoListComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'add', payload: newTodo });
          setNewTodo('');
        }}
        className="mb-4 flex"
      >
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          className="flex-grow p-2 border border-gray-300 rounded-l"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r">
          Add
        </button>
      </form>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between mb-2">
            {todo.editing ? (
              <input
                type="text"
                defaultValue={todo.text}
                onBlur={e => dispatch({ type: 'edit', payload: { id: todo.id, text: e.target.value } })}
                className="flex-grow p-2 border border-gray-300"
                autoFocus
              />
            ) : (
              <span className="flex-grow p-2">{todo.text}</span>
            )}
            <button
              onClick={() => dispatch({ type: 'toggleEdit', payload: todo.id })}
              className="text-sm bg-yellow-500 hover:bg-yellow-700 text-white p-2 mx-1"
            >
              {todo.editing ? 'Save' : 'Edit'}
            </button>
            <button
              onClick={() => dispatch({ type: 'delete', payload: todo.id })}
              className="text-sm bg-red-500 hover:bg-red-700 text-white p-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListComponent;
