import React from 'react'
import * as api from "../api/apiService";

export default function Years({ onActionCLick, monthToDo }) {
  function handleCLick (month) {
    onActionCLick(month);
  }
  return (
    <div>
        {api.CONST_MONTHS.map((month, index) => {
          return <span key={month} 
                       onClick={() => handleCLick(index + 1)} 
                       style={monthToDo === (index + 1) ? styles.divClickBox : styles.divBox}>
                    {month}
                  </span>
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
    backgroundColor: '#e67e22',
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