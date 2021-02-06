import React, { useState, useEffect } from 'react';
import SelectFilter from './components/SelectFilter';

export default function App() {
  const [yearMonth, setYearMonth] = useState('');

  useEffect(() => {
    let today = new Date();
    const YearMonth =
      (today.getMonth() + 1).toString() + today.getFullYear().toString();
    setYearMonth(YearMonth);
  }, []);

  const handleSelectChange = (newValue) => {
    setYearMonth(newValue);
  };

  return (
    <div className="contaiber center">
      <h1>Desafio Final do Bootcamp Full Stack</h1>
      <br />
      <h1>{yearMonth}</h1>
      <SelectFilter YearMonth={yearMonth} onChange={handleSelectChange} />
    </div>
  );
}
