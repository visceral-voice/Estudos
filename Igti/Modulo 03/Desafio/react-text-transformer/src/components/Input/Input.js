import React, { Component } from 'react'
import M from 'materialize-css';

export default class Input extends Component {
  componentDidMount(){
    M.AutoInit();
  }

  render() {
    return (
      <div classname="row">
        <div classname="input-field col s12">
            <input id="anyText" type="text" classname="validate" />
            <label HtmlFor="anyText">Digite um texto qualquer:</label>
        </div>
        <span className="material-icons dp48">content_copy</span>
      </div>
    );
  }
}
