import React, { Component } from 'react'

export default class Headers extends Component {
  handleInputChanged = (event) => {
    const newText = event.target.value;
    this.props.onChangedFilter(newText);
  }

  render() {
    const {filter} = this.props;
    return (
      <div>
        <input type="text"
               value={filter}
               onChange={this.handleInputChanged}
        /> |
        <span>Países: </span> |
        <span>População: </span>
      </div>
    )
  }
}
