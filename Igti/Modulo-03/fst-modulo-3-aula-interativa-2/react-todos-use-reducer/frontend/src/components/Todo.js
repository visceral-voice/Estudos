import React from 'react';
import { helperFormatDate } from '../helpers/dateHelpers';

export default function Todo({ children: todo, onToggle }) {
  const { day, month, year, description, done } = todo;
  const todoColor = done ? '#badc58' : '#fab1a0';
  const date = helperFormatDate(day, month, year);

  const handleToggle = () => {
    onToggle(todo);
  };

  const { todoStyle, dataStyle, dateStyle } = styles;

  return (
    <div
      style={{ ...todoStyle, borderLeft: `10px solid ${todoColor}` }}
      onClick={handleToggle}
    >
      <div style={dataStyle}>
        <span style={dateStyle}>{date}</span>
        <span>{description}</span>
      </div>
    </div>
  );
}

const styles = {
  todoStyle: {
    padding: '20px',
    border: '1px solid lightgray',
    borderRadius: '4px',
    margin: '5px',
    cursor: 'pointer',
  },

  dataStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  dateStyle: {
    marginRight: '20px',
    fontWeight: 'bold',
  },
};
