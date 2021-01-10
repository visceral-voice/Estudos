import React, { Component } from 'react'
import css from './counter.module.css';

export default class Steps extends Component {
  render() {
    return (
      <spam className={css.counterValue}>({this.props.value})</spam>
    );
  }
}
