import React, { Component } from 'react'

import css from "./Countries.module.css";

export default class Country extends Component {
  render() {
    const { country } = this.props;
    return (
      <div className={`${css.flexRow} ${css.country}`}>
        <img src={country.flag} alt={country.name} className={css.flag} />
        {country.name}
      </div>
    )
  }
}
