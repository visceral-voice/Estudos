import axios from 'axios';

const YEAR_NUMBERS = [2019, 2020, 2021];

const MONTH_DESCRIPTIONS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const YEARS = YEAR_NUMBERS.map((year, index) => {
  return {
    id: `y${index + 1}`,
    description: year.toString(),
    value: year,
  };
});

const MONTHS = MONTH_DESCRIPTIONS.map((month, index) => {
  return {
    id: `m${index + 1}`,
    description: month,
    value: index + 1,
  };
});

async function fetchJson(url) {
  const resource = await fetch(url);
  const json = await resource.json();
  return json;
}

export function apiGetYears() {
  return [...YEARS];
}

export function apiGetMonths() {
  return [...MONTHS];
}

export async function apiGetTodos(year, month) {
  const url = `http://localhost:3001/todos?year=${year}&month=${month}`;
  const json = await fetchJson(url);
  return json.sort((a, b) => a.date.localeCompare(b.date));
}

export async function apiToggleTodo(todo) {
  const { id } = todo;
  const newTodo = { ...todo, done: !todo.done };

  const { status } = await axios.put(
    `http://localhost:3001/todos/${id}`,
    newTodo
  );

  return status === 200;
}
