import React from 'react';

export default function Summary({ children: todos }) {
  const doneTodos = todos.filter(todo => todo.done).length;
  const allTodos = todos.length;
  const undoneTodos = allTodos - doneTodos;

  return (
    <div style={{ marginTop: '20px', fontSize: '1.8rem' }}>
      Total de tarefas: {allTodos} | Tarefas cumpridas: {doneTodos} | Tarefas
      não-cumpridas: {undoneTodos}
    </div>
  );
}
