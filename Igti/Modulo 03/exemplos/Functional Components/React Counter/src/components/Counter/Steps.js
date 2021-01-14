import React from 'react'
import css from './counter.module.css';

export default function Steps(props) {
  return (
    <spam className={css.counterValue}>({props.value})</spam>
  );
}
