import React from 'react'
import { formatedNumbers } from '../../helpers/HelperFormatted';

import css from "./Headers.module.css";

export default function Headers({filter, totalPopulation, countryCount, onChangedFilter}) {
  const handleInputChanged = (event) => {
    const newText = event.target.value;
    onChangedFilter(newText);
  }

  return (
    <div className={css.flexRow}>
      <input type="text"
              placeholder="Filtro"
              value={filter}
              onChange={handleInputChanged}
      /> |
      <span className={css.country}>Países: 
        <strong> {countryCount}</strong>
      </span> |
      <span className={css.population}>População: 
      <strong> {formatedNumbers(totalPopulation)}</strong>
      </span>
    </div>
  )
}
