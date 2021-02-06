import React, { useState, useEffect } from 'react';
import SelectFilter from './components/SelectFilter';

export default function App() {
  const [yearMonth, setYearMonth] = useState('');

  useEffect(() => {
    let today = new Date();
    const YearMonth = today.getMonth() + 1 + '/' + today.getFullYear();
    setYearMonth(YearMonth);
  }, []);

  return (
    <div className="contaiber center">
      <h1>{yearMonth}</h1>
      <SelectFilter />
    </div>
  );
}
