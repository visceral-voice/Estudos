import React from 'react';
import { YEARS, MONTHS, apiGetTodos, apiToggleTodo } from './api/api';
import Select from './components/Select';
import Todos from './components/Todos';
import Summary from './components/Summary';

const ACTION_TYPES = {
  CHANGE_MONTH: 'CHANGE_MONTH',
  CHANGE_YEAR: 'CHANGE_YEAR',
  LOAD_DATA_FROM_API: 'LOAD_DATA_FROM_API',
  CHANGE_TODOS: 'CHANGE_TODOS',
  TOGGLE_TODO: 'TOGGLE_TODO',
};

const initialState = {
  loadingData: true,
  selectedYear: YEARS[1].value,
  selectedMonth: MONTHS[0].value,
  todos: [],
};

function todosReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.CHANGE_MONTH: {
      return {
        ...state,
        selectedMonth: payload,
      };
    }

    case ACTION_TYPES.CHANGE_YEAR: {
      return {
        ...state,
        selectedYear: payload,
      };
    }

    case ACTION_TYPES.LOAD_DATA_FROM_API: {
      return {
        ...state,
        loadingData: true,
      };
    }

    case ACTION_TYPES.CHANGE_TODOS: {
      return {
        ...state,
        todos: payload,
        loadingData: false,
      };
    }

    case ACTION_TYPES.TOGGLE_TODO: {
      const newTodos = [...state.todos];
      const { id, done } = payload;

      const index = state.todos.findIndex(todo => todo.id === id);
      newTodos[index].done = done;

      return {
        ...state,
        todos: newTodos,
      };
    }

    default: {
      return state;
    }
  }
}

export default function App() {
  // const [selectedYear, setSelectedYear] = React.useState(YEARS[1].value);
  // const [selectedMonth, setSelectedMonth] = React.useState(MONTHS[0].value);
  // const [todos, setTodos] = React.useState([]);
  // const [loadingData, setLoadingData] = React.useState(true);
  const [state, dispatch] = React.useReducer(todosReducer, initialState);

  const { selectedYear, selectedMonth, loadingData, todos } = state;

  React.useEffect(() => {
    document.title = "React Todo's com useReducer";
  }, []);

  React.useEffect(() => {
    async function getFilteredTodos() {
      dispatch({ type: ACTION_TYPES.LOAD_DATA_FROM_API });

      const filteredTodos = await apiGetTodos(selectedYear, selectedMonth);

      console.log(filteredTodos);
      setTimeout(() => {
        //setTodos(filteredTodos);
        //setLoadingData(false);
        dispatch({ type: ACTION_TYPES.CHANGE_TODOS, payload: filteredTodos });
      }, 1000);
    }

    getFilteredTodos();
  }, [selectedMonth, selectedYear]);

  function handleYearChange(newYear) {
    //setSelectedYear(newYear);
    dispatch({ type: ACTION_TYPES.CHANGE_YEAR, payload: newYear });
  }

  function handleMonthChange(newMonth) {
    //setSelectedMonth(newMonth);
    dispatch({ type: ACTION_TYPES.CHANGE_MONTH, payload: newMonth });
  }

  function handleToggle(todo) {
    const { id, done } = todo;

    const didUpdate = apiToggleTodo(todo);

    if (didUpdate) {
      // const newTodos = [...todos];
      // const index = todos.findIndex(todo => todo.id === id);
      // newTodos[index].done = !done;

      dispatch({
        type: ACTION_TYPES.TOGGLE_TODO,
        payload: { id, done: !done },
      });

      //setTodos(newTodos);
    }
  }

  return (
    <div className="container">
      <h1 className="center">React Todo's com useReducer</h1>

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
