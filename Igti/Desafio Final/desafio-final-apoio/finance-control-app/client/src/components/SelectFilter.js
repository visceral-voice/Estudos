import React, { useEffect, useState } from 'react';
import * as api from '../api/ApiService';
import M from 'materialize-css';

export default function SelectFilter({ YearMonth, onChange }) {
  const [myValue, setMyValue] = useState('');

  useEffect(() => {
    M.AutoInit();
  }, []);

  function defaultValue() {
    let today = new Date();
    const YearMonthSelect =
      (today.getMonth() + 1).toString() + today.getFullYear().toString();
    if (!YearMonth) {
      return YearMonthSelect;
    } else {
      return YearMonth;
    }
  }

  const setValue = (value) => {
    setMyValue(value);
  };

  const handleSelectChange = ({ target }) => {
    const newValue = target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div style={styles.flexRow} className="input-field row">
      <button className="btn waves-effect waves-light">&lt;</button>
      <select value={defaultValue()} onChange={handleSelectChange}>
        {api.CONST_YEARS.map((year) => {
          return api.CONST_MONTHS.map((month, index) => {
            const valueFilter = (index + 1).toString() + year.toString();
            const displayFilter = api.yearMonthDisplay(valueFilter);
            return (
              <option key={valueFilter} value={valueFilter}>
                {' '}
                {displayFilter}
              </option>
            );
          });
        })}
      </select>
      <button className="btn waves-effect waves-light">&gt;</button>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
