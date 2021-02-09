import React from 'react';
import ResumeTransactions from './ResumeTransactions';
import { formatedNumbers, formatedCurrency } from '../Helpers/HelpersFormated';

import css from './TransactionControl.module.css';

export default function TransactionControl({ transactions }) {
  return (
    <div className="container center">
      <table className={css.table}>
        <thead>
          <tr>
            <th colSpan="3">
              <ResumeTransactions transactions={transactions} />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr key="1" colSpan="3">
            <td>Teste</td>
          </tr>
          {transactions.map(
            ({ _id, type, description, value, day, category }) => {
              const tdStyles = type === '+' ? css.tdReceita : css.tdDespesa;
              return (
                <tr key={_id} className={tdStyles}>
                  <td className={css.day}>{day < 10 ? `0${day}` : day}</td>
                  <td className={css.flexRow}>
                    <span className={css.category}>{category}</span>
                    {description}
                  </td>
                  <td className={css.value}>{formatedCurrency(value)}</td>
                  <td>
                    <div className={css.icon}>
                      <i id="Edit" className="tiny material-icons">
                        edit
                      </i>
                      <i id="Delete" className="tiny material-icons">
                        delete
                      </i>
                    </div>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
        <tfoot>
          <tr>
            <td>&nbsp;</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
