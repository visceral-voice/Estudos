import React from 'react'
import css from './counter.module.css';

export default function Value(props) {
  return (
      <spam className={css.counterValue}>{props.value}</spam>
  )
}
