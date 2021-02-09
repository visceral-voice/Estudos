import React from 'react';
import Todo from './Todo';

export default function Todos({ children: todos = [], onToggle }) {
  const doneTodos = todos.filter(todo => todo.done).length;
  const undoneTodos = todos.length - doneTodos;

  return (
    <div className="center">
      <h2>
        Total de tarefas: {todos.length} | Tarefas cumpridas: {doneTodos} |
        Tarefas não-cumpridas: {undoneTodos}
      </h2>

      {todos.map(todo => {
        return (
          <Todo key={todo.id} onToggle={onToggle}>
            {todo}
          </Todo>
        );
      })}
    </div>
  );
}
