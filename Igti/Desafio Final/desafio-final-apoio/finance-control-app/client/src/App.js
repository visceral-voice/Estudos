import React, { useState, useEffect } from 'react';
import SelectFilter from './components/SelectFilter';
import * as api from './api/ApiService';
import TransactionControl from './components/TransactionControl';

export default function App() {
  const [yearMonth, setYearMonth] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    let today = new Date();
    const YearMonth =
      (today.getMonth() + 1).toString() + today.getFullYear().toString();
    setYearMonth(YearMonth);
    searchTransactions(YearMonth);
  }, []);

  async function searchTransactions(YearMonth) {
    const transaction = await api.getFilterTransactions(YearMonth);
    setTransactions(transaction);
  }
  const handleSelectChange = (newValue) => {
    setYearMonth(newValue);
    searchTransactions(newValue);
  };

  return (
    <div className="container center">
      <h5>
        <b>Bootcamp Full Stack - Desafio Final</b>
      </h5>
      <h5>Controle Financeiro Pessoal</h5>
      <div className="center">
        <SelectFilter YearMonth={yearMonth} onChange={handleSelectChange} />
      </div>
      <TransactionControl transactions={transactions} />
    </div>
  );
}
