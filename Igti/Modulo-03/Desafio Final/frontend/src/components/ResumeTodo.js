import React from 'react'
import TotalCont from './TotalCont';

export default function ResumeTodo({todos}) {
  let contAllTodos = todos.length;
  let contDoneTodos = 0;
  let contNoDoneTodos = 0;
  todos.forEach((todo) => {
    if (todo.done){
      contDoneTodos = contDoneTodos + 1;
    }
    else {
      contNoDoneTodos = contNoDoneTodos + 1;
    }
  });
  return (
      <div style={styles.flexRow}>
          <TotalCont 
            textContent="Total de tarefas" 
            countContent={contAllTodos}
            contColor="Blue"
          />
          <TotalCont 
            textContent="Tarefas cumpridas" 
            countContent={contDoneTodos}
            contColor="Green"
          />
          <TotalCont 
            textContent="Tarefas não cumpridas" 
            countContent={contNoDoneTodos}
            contColor="Red"
          />          
      </div>
  )
}

const styles = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItens: "center",
    justifyContent: "space-between"
  }  
};
  