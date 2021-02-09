import React from 'react';
import { YEARS, MONTHS, apiGetTodos, apiToggleTodo } from './api/api';
import Select from './components/Select';
import Todos from './components/Todos';
import Summary from './components/Summary';

export default function App() {
  const [selectedYear, setSelectedYear] = React.useState(YEARS[1].value);
  const [selectedMonth, setSelectedMonth] = React.useState(MONTHS[0].value);
  const [todos, setTodos] = React.useState([]);
  const [loadingData, setLoadingData] = React.useState(true);

  React.useEffect(() => {
    document.title = "React Todo's";
  }, []);

  React.useEffect(() => {
    async function getFilteredTodos() {
      setLoadingData(true);
      const filteredTodos = await apiGetTodos(selectedYear, selectedMonth);

      setTimeout(() => {
        setTodos(filteredTodos);
        setLoadingData(false);
      }, 1000);
    }

    getFilteredTodos();
  }, [selectedYear, selectedMonth]);

  function handleYearChange(newYear) {
    setSelectedYear(newYear);
  }

  function handleMonthChange(newMonth) {
    setSelectedMonth(newMonth);
  }

  function handleToggle(todo) {
    const { id, done } = todo;

    const didUpdate = apiToggleTodo(todo);

    if (didUpdate) {
      const newTodos = [...todos];
      const index = todos.findIndex(todo => todo.id === id);
      newTodos[index].done = !done;

      setTodos(newTodos);
    }
  }

  return (
    <div className="container">
      <h1 className="center">React Todo's</h1>

      <Select
        values={YEARS}
        selectedValue={selectedYear}
        onChange={handleYearChange}
      />

      <Select
        values={MONTHS}
        selectedValue={selectedMonth}
        onChange={handleMonthChange}
      />

      {loadingData && <p>Carregando...</p>}

      {!loadingData && (
        <>
          <Summary>{todos}</Summary>
          <Todos onToggle={handleToggle}>{todos}</Todos>
        </>
      )}
    </div>
  );
}
