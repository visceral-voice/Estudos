export function helperFormatDate(day, month, year) {
  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');

  return `${formattedDay}/${formattedMonth}/${year}`;
}
