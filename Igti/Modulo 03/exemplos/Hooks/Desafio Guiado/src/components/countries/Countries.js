import React from 'react'
import Country from './Country';

import css from "./Countries.module.css";

//export default function Countries(props) {
//  const { countries } = props;
export default function Countries({ countries }) {
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
