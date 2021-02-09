import React from 'react';
import Todo from './Todo';

export default function Todos({ children: todos, onToggle }) {
  return (
    <div style={{ marginTop: '20px' }}>
      {todos.map(todo => {
        return (
          <Todo onToggle={onToggle} key={todo.id}>
            {todo}
          </Todo>
        );
      })}
    </div>
  );
}
