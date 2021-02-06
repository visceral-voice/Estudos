import React, { useEffect, useState } from 'react';
import * as api from '../api/ApiService';
import M from 'materialize-css';

export default function SelectFilter({ YearMonth, onChange }) {
  const [myValue, setMyValue] = useState('');

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleSelectChange = ({ target }) => {
    const newValue = target.value;
    onChange(newValue);
  };

  return (
    <div style={styles.flexRow} className="input-field col s6">
      <select onChange={handleSelectChange} defaultValue={YearMonth}>
        <option selected value={YearMonth}>
          {YearMonth}
        </option>
        {api.CONST_YEARS.map((year) => {
          return api.CONST_MONTHS.map((month, index) => {
            const valueFilter = (index + 1).toString() + year.toString();
            return (
              <option key={valueFilter} value={valueFilter}>
                {' '}
                {` ${month}/${year} `}{' '}
              </option>
            );
          });
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
