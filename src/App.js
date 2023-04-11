import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn about React', isCompleted: false },
    { text: 'Meet friend for lunch', isCompleted: false },
    { text: 'Build really cool todo app', isCompleted: false }
  ]);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div className="todo" key={index}>
            <div className="checkbox" onClick={() => completeTodo(index)}>
              {todo.isCompleted && <span>&#x2714;</span>}
            </div>
            <div className={todo.isCompleted ? 'completed-text' : 'todo-text'}>
              {todo.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
