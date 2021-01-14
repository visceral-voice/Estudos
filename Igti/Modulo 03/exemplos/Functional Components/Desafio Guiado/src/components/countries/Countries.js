import React, { Component } from 'react'
import Country from './Country';

import css from "./Countries.module.css";

export default class Countries extends Component {
  render() {
      const { countries } = this.props;
    return (
      <div className={`${css.flexRow}`}>
          {countries.map((country) => {
            return (
                <Country country={country} />
            )
          })}
      </div>
    )
  }
}
