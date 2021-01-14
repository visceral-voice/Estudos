import React from 'react'

import css from "./Countries.module.css";

export default function Country({ country }) {
  return (
    <div className={`${css.flexRow} ${css.country}`}>
      <img src={country.flag} alt={country.name} className={css.flag} />
      {country.name}
    </div>
  )
}
