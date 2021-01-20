import axios from "axios";

const CONST_YEARS = [2019, 2020, 2021];
const CONST_MONTHS = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]

const API_URL = "http://localhost:3001/todos";

async function getAllTodos() {
  const res = await axios.get(API_URL);
  const todos = res.data;

  todos.sort((a, b) => a.day - b.day);
  todos.sort((a, b) => a.month - b.month);
  todos.sort((a, b) =>  a.year - b.year);

  return todos;
}

async function getFilterTodos(filterYear, filterMonth) {
  const res = await axios.get(`${API_URL}?year=${filterYear}&month=${filterMonth}`);
  const filterTodos = res.data;

  filterTodos.sort((a, b) => a.day - b.day);
  filterTodos.sort((a, b) => a.month - b.month);
  filterTodos.sort((a, b) =>  a.year - b.year);

  return filterTodos;
}

export { CONST_YEARS, CONST_MONTHS, getAllTodos, getFilterTodos }

