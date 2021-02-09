import React, { useState, useEffect } from 'react';
import * as api from "./api/apiService";
import TodosControl from "./components/TodosControl";
import Spinner from "./components/Spinner";
import Years from './components/Years';
import Months from './components/Months';

export default function App() {
  const [ allTodos, setAllTodos ] = useState([]);
  const [ filteredTodos, setFilteredTodos ] = useState([]);
  const [yearTodo, setYearTodo] = useState(0);
  const [monthTodo, setMonthTodo] = useState(0);

  const handleYearClick = (year)  => {
    setYearTodo(year);
  }

  const handleMonthClick = (month)  => {
    setMonthTodo(month);
  }
  useEffect(() => {
    const getFiltered = async (year, month) => {
      const filterTodos = await api.getFilterTodos(year, month);
      setFilteredTodos(filterTodos);
    };
    if(yearTodo > 0 && monthTodo > 0){
      getFiltered(yearTodo, monthTodo);
    }
  }, [yearTodo, monthTodo]);

  useEffect(() => {
    const getTodos = async () => {
      const todos = await api.getAllTodos();
      setAllTodos(todos);
      setFilteredTodos(todos);
    };
    getTodos();
  }, []);  

    return (
          <div className="contaiber center">
            <h4>React Todos</h4>
            <br />
            <div>
                <Years 
                  onActionCLick={handleYearClick}
                  yearToDo={yearTodo}
                />
            </div>
            <br />
            <br />
            <div>
                <Months 
                  onActionCLick={handleMonthClick}
                  monthToDo={monthTodo}
                />
            </div>            
            <br />
            {allTodos.length > 0 && <TodosControl 
                                      todos={filteredTodos}
                                   />}
          {allTodos.length === 0 && <Spinner />}            
          </div>
    );
}
