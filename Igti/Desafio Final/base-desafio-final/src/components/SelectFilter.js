import React, { useEffect } from 'react';
import * as api from '../api/ApiService';
import M from 'materialize-css';

export default function SelectFilter() {
  useEffect(() => {
    let elems = document.getElementById('sel');
    let instances = window.M.FormSelect.init(elems, {});
  }, []);

  const filter = (year) => {
    api.CONST_MONTHS.map((month, index) => {
      console.log(`${month}/${year}`);
      return (
        <option
          key={(index + 1).toString() + year.toString()}
        >{`${month}/${year}`}</option>
      );
    });
  };

  return (
    <div style={styles.flexRow} className="input-field col s6">
      <select id="sel">
        {api.CONST_YEARS.map((year) => {
          return filter(year);
        })}
      </select>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItens: 'center',
    justifyContent: 'center',
    wiidth: '300px',
  },
};
