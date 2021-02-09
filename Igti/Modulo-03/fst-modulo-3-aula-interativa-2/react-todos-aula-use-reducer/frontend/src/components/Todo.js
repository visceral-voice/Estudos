import React from 'react';

export default function Todo({ children: todo, onToggle }) {
  const { todoStyle } = styles;

  function handleClick() {
    onToggle(todo);
  }

  const borderColor = todo.done ? '#27ae60' : '#c0392b';

  return (
    <div
      style={{ ...todoStyle, borderLeft: `8px solid ${borderColor}` }}
      onClick={handleClick}
    >
      <span>
        {todo.date} | {todo.description}
      </span>
    </div>
  );
}

const styles = {
  todoStyle: {
    padding: '20px',
    margin: '5px',
    border: '1px solid lightgray',
    borderRadius: '4px',
    fontFamily: 'Consolas',
    cursor: 'pointer',
  },
};
