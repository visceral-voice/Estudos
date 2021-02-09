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

/**
 * Indicam as ações que o reducer pode fazer.
 * Uma boa prática é utilizar um objeto onde o
 * identificador tem o seu valor em string, o
 * que pode evitar erros de digitação
 */
const ACTION_TYPES = {
  CHANGE_MONTH: 'CHANGE_MONTH',
  CHANGE_YEAR: 'CHANGE_YEAR',
  LOAD_DATA_FROM_API: 'LOAD_DATA_FROM_API',
  SET_TODOS: 'SET_TODOS',
  TOGGLE_TODO: 'TOGGLE_TODO',
};

/**
 * Estado inicial do reducer. É utilizado
 * na própria instrução do useReducer
 */
const initialState = {
  loading: true,
  selectedYear: YEARS[1].value,
  selectedMonth: MONTHS[0].value,
  todos: [],
};

/**
 * Reducer. Recebe o estado atual e uma action.
 * A action por sua vez possui type (tipo) e
 * payload (dados necessários à ação, que variam
 * conforme o type). É importante implementarmos sempre
 * funções "puras", com imutabilidade. Uma boa prática é
 * o spred operator em state (...state). O que vier após o
 * spread é o que será de fato atualizado no estado.
 */
function todoReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.LOAD_DATA_FROM_API: {
      return { ...state, loading: true };
    }

    case ACTION_TYPES.CHANGE_MONTH: {
      return { ...state, selectedMonth: payload };
    }

    case ACTION_TYPES.CHANGE_YEAR: {
      return { ...state, selectedYear: payload };
    }

    case ACTION_TYPES.SET_TODOS: {
      return { ...state, todos: payload, loading: false };
    }

    case ACTION_TYPES.TOGGLE_TODO: {
      const newTodos = [...state.todos];
      const { id, done } = payload;

      const index = state.todos.findIndex(todo => todo.id === id);
      newTodos[index].done = done;

      return { ...state, todos: newTodos };
    }

    default: {
      return { ...state };
    }
  }
}

export default function App() {
  /**
   * Declaração do useReducer.
   * state é o objeto de estado
   * dispatch é a função que dispara uma ação
   */
  const [state, dispatch] = React.useReducer(todoReducer, initialState);

  /**
   * Desestruturação do estado do reducer
   */
  const { selectedYear, selectedMonth, loading, todos } = state;

  React.useEffect(() => {
    document.title = "React Todo's";
  }, []);

  React.useEffect(() => {
    /**
     * Exemplo de dispath. Aqui, não é necessário payload
     */
    dispatch({ type: ACTION_TYPES.LOAD_DATA_FROM_API });

    async function getTodos() {
      const filteredTodos = await apiGetTodos(selectedYear, selectedMonth);

      setTimeout(() => {
        /**
         * Exemplo de dispatch com payload
         */
        dispatch({
          type: ACTION_TYPES.SET_TODOS,
          payload: filteredTodos,
        });
      }, 500);
    }

    getTodos();
  }, [selectedMonth, selectedYear]);

  const handleYearChange = newYear => {
    /**
     * Exemplo de dispatch com payload
     */
    dispatch({ type: ACTION_TYPES.CHANGE_YEAR, payload: newYear });
  };

  const handleMonthChange = newMonth => {
    /**
     * Exemplo de dispatch com payload
     */
    dispatch({ type: ACTION_TYPES.CHANGE_MONTH, payload: newMonth });
  };

  const handleToggleTodo = async todo => {
    const { id, done } = todo;
    const didToggle = await apiToggleTodo(todo);

    if (didToggle) {
      /**
       * Exemplo de dispatch com payload
       */
      dispatch({
        type: ACTION_TYPES.TOGGLE_TODO,
        payload: { id, done: !done },
      });
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
