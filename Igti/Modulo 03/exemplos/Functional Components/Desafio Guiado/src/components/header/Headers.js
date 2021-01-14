import React, { Component } from 'react'
import { formatedNumbers } from '../../helpers/HelperFormatted';

import css from "./Headers.module.css";

export default class Headers extends Component {
  handleInputChanged = (event) => {
    const newText = event.target.value;
    this.props.onChangedFilter(newText);
  }

  render() {
    const {filter, totalPopulation, countryCount} = this.props;
    return (
      <div className={css.flexRow}>
        <input type="text"
               placeholder="Filtro"
               value={filter}
               onChange={this.handleInputChanged}
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
}
