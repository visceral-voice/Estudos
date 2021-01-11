import React, { Component } from 'react'

export default class Toogle extends Component {
  handleChange = (event) => {
    const {onToogle} = this.props;
    const isChecked = event.target.checked;
    onToogle(isChecked);
  };

  render() {
    const {enabled, description} = this.props;
    return (
      <div className="switch">
              <label>
                {description}
                <input type="checkbox" 
                       checked={enabled} 
                       onChange={this.handleChange} 
                />
                <span className="lever"></span>
              </label> 
      </div>
    );
  }
}
