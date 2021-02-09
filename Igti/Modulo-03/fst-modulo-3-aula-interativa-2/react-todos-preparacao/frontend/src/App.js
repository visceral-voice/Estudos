import React from 'react';

import {
  apiGetYears,
  apiGetMonths,
  apiGetTodos,
  apiToggleTodo,
} from './api/api';

import Select from './components/Select';
import Todos from './components/Todos';

const YEARS = apiGetYears();
const MONTHS = apiGetMonths();

export default function App() {
  const [selectedYear, setSelectedYear] = React.useState(YEARS[2].value);
  const [selectedMonth, setSelectedMonth] = React.useState(MONTHS[0].value);
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    document.title = "React Todo's";
  }, []);

  React.useEffect(() => {
    setLoading(true);

    async function getTodos() {
      const filteredTodos = await apiGetTodos(selectedYear, selectedMonth);
      setTodos(filteredTodos);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    }

    getTodos();
  }, [selectedMonth, selectedYear]);

  const handleYearChange = newYear => {
    setSelectedYear(newYear);
  };

  const handleMonthChange = newMonth => {
    setSelectedMonth(newMonth);
  };

  const handleToggleTodo = async todo => {
    const { id, done } = todo;
    const didToggle = await apiToggleTodo(todo);

    if (didToggle) {
      const newTodos = [...todos];
      const index = newTodos.findIndex(todo => todo.id === id);
      newTodos[index].done = !done;
      setTodos(newTodos);
    }
  };

  const { yearMonthStyle } = styles;

  const dataToShow = loading ? (
    <p>Carregando...</p>
  ) : (
    <Todos onToggle={handleToggleTodo}>{todos}</Todos>
  );

  return (
    <div className="container">
      <h1 className="center">React Todo's</h1>

      <div style={yearMonthStyle}>
        <div style={{ flex: 1, marginRight: '5px' }}>
          <Select
            values={YEARS}
            selectedValue={selectedYear}
            onChange={handleYearChange}
          />
        </div>

        <div style={{ flex: 4, marginLeft: '5px' }}>
          <Select
            values={MONTHS}
            selectedValue={selectedMonth}
            onChange={handleMonthChange}
            style={{ flex: 1 }}
          />
        </div>
      </div>

      {dataToShow}
    </div>
  );
}

const styles = {
  yearMonthStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};
