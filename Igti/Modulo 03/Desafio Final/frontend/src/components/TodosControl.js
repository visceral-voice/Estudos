import React from 'react'
import ResumeTodo from './ResumeTodo';

import css from "./todosControl.module.css";

export default function TodosControl({todos}) {
  return (
    <div className="container center"> 
              <table className={css.table}>
                <thead>
                  <tr>
                    <th><ResumeTodo todos={todos} /></th>
                  </tr>
                </thead>
                <tbody>
    {todos.map(({ id, date, description, done }) => {
      const tdStyles = done ? css.tdDone : css.tdNoDone;
      return (         
                  <tr key={id}>           
                    <td className={tdStyles}>
                      {date} {description}
                    </td>
                  </tr>                  
            )})
      }
                </tbody>
                <tfoot>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                </tfoot>
              </table>
  </div>
);
}

const styles = {
flexRow: {
  display: "flex",
  flexDirection: "row",
  alignItens: "center",
  justifyContent: "space-between"
},
table: {
  padding: "50px",
  margin: "50px"
}  
};
