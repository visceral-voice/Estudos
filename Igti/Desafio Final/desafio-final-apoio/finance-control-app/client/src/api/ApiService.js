import axios from 'axios';

const CONST_YEARS = [2019, 2020, 2021];
const CONST_MONTHS = [
  'JAN',
  'FEV',
  'MAR',
  'ABR',
  'MAI',
  'JUN',
  'JUL',
  'AGO',
  'SET',
  'OUT',
  'NOV',
  'DEZ',
];

const API_URL = 'http://localhost:3001/api/transactions';

async function getFilterTransactions(filterMonthYear) {
  let filterMonth = '';
  let filterYear = '';

  if (filterMonthYear.length === 6) {
    filterMonth = filterMonthYear.substring(0, 2);
    filterYear = filterMonthYear.substring(2);
  } else {
    filterMonth = filterMonthYear.substring(0, 1);
    filterMonth = '0' + filterMonth;
    filterYear = filterMonthYear.substring(1);
  }

  const res = await axios.get(`${API_URL}?period=${filterYear}-${filterMonth}`);
  const filterTransactions = res.data;

  filterTransactions.sort((a, b) => a.day - b.day);
  filterTransactions.sort((a, b) => a.month - b.month);
  filterTransactions.sort((a, b) => a.year - b.year);

  return filterTransactions;
}

export { CONST_YEARS, CONST_MONTHS, getFilterTransactions };
