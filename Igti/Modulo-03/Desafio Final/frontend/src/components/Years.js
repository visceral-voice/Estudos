import React from 'react'
import * as api from "../api/apiService";

export default function Years({ onActionCLick, yearToDo }) {
  function handleCLick (year) {
    onActionCLick(year);
  }
  return (
    <div>
        {api.CONST_YEARS.map(year => {
          return (
          //<span key={year} id={year} onClick={() => handleCLick(year)} style={styles.divBox}>{year}</span>
          <button key={year} 
                  id={year} 
                  onClick={() => handleCLick(year)} 
                  style={yearToDo === year ? styles.divClickBox : styles.divBox}>
            {year}
          </button>
          );
        })}
    </div>
  )
}

const styles = {
  divBox: {
    margin: '30px 0',
    heigth: '10px',
    padding: '15px',
    border: '5px solid #fff',
    backgroundColor: '#1B9CFC',
    cursor: 'pointer'
  },
  divClickBox: {
    margin: '30px 0',
    heigth: '10px',
    padding: '15px',
    border: '5px solid #fff',
    backgroundColor: '#000',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: 'white'
  }  
}