import React from 'react'
import Action from './Action';

export default function GradesControl({grades, onDelete, onPersist}) {
  let currentStudent = grades[0].student;
  let currentSubject = grades[0].subject;
  const tableGrades = [];
  let currentGrade = [];
  let id = 0;
    
  grades.forEach((grade) => {
    if (currentSubject !== grade.subject){
      id = id + 1;
      tableGrades.push({
        id: id,
        student: currentStudent,
        subject: currentSubject,
        grades: currentGrade
      });

      currentSubject = grade.subject;
      currentGrade = [];
    }

    if (currentStudent !== grade.student){
      currentStudent = grade.student;
    }

    currentGrade.push(grade);
  });

  id = id + 1;
  tableGrades.push({
    id: id,
    student: currentStudent,
    subject: currentSubject,
    grades: currentGrade
  });

const handleButtonClick = (id, type) => {
  const grade = grades.find(grade => grade.id === id);
  if (type === "delete") {
    onDelete(grade);
    return;
  } else {
    onPersist(grade);
  }
};

  return (
        <div className="container center"> 
        {
        tableGrades.map(({id, grades}) => {
          const totalGrades = grades.reduce((acc, cur) => acc + cur.value, 0);
          const styleGrade = totalGrades >= 70 ? styles.goodGrade : styles.badGrade;

          return (<table style={styles.table} className="striped center" key={id}>
                    <thead>
                      <tr>
                        <th style={{width: "20%"}}>Aluno</th>
                        <th style={{width: "20%"}}>Disciplina</th>
                        <th style={{width: "20%"}}>Avaliação</th>
                        <th style={{width: "20%"}}>Nota</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grades.map(({id, student, subject, type, value, isDeleted}) => {
                          return (<tr key={id}>
                                    <td>{student}</td>
                                    <td>{subject}</td>
                                    <td>{type}</td>
                                    <td>{isDeleted ? "-" : value}</td>
                                    <td>
                                      <div>
                                        <Action type={isDeleted ? "add" : "edit"} 
                                          id={id}
                                          onActionClick={handleButtonClick}
                                        />
                                        {!isDeleted && <Action type="delete" 
                                                        id={id}
                                                        onActionClick={handleButtonClick}
                                                       />}
                                      </div>
                                    </td>
                                  </tr>
                          );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td style={{textAlign: "right"}}>
                            <strong>Total</strong>
                        </td>
                        <td style={styleGrade}>{totalGrades}</td>
                      </tr>
                    </tfoot>
                  </table>
                );
        })
        }
        </div>
  );
}

const styles = {
  goodGrade: {
    fontWeight: "bold",
    color: "green"
  },
  badGrade: {
    fontWeight: "bold",
    color: "red"
  },  
  table: {
    padding: "20px",
    margin: "10px"
  }  
};