import React, { Component } from 'react'
import M from 'materialize-css';

export default class Input extends Component {
  componentDidMount(){
    M.AutoInit();
  }

  handleChange = (event) => {
    const newText = event.target.value;
    this.props.onChange(newText);
  }

  handleCopy = () => {
    const { id } = this.props;
    const inputId = `input_${id}`;
    const inputElement = document.querySelector(inputId);
    inputElement.select();
    document.execCommand("copy");
  }

  render() {
    const{
          autoFocus = false, 
          readOnly = false, 
          allowCopy = false, 
          id, 
          description, 
          value
    } = this.props;

    const inputId = `input_${id}`;
    const {inputStyle}  = styles;

    return (
            <div style={inputStyle}>
              <div className="input-field" style={{ flex: 7 }}>
                <input id={inputId}
                      type="text" 
                      className="validate" 
                      value={value} 
                      readOnly={readOnly}
                      autoFocus={autoFocus}
                      onChange={this.handleChange}
                />
                <label htmlFor={inputId} id={inputId}>
                  {description}
                </label>
              </div>
              {allowCopy && <span 
                              onClick={this.handleCopy}
                              className="material-icons dp48"
                              style={{marginLeft: "10px", cursor: "pointer"}}
                             >
                             content_copy
                             </span>
              }
            </div>
    );
  }
}

const styles = {
  inputStyle: {
    display: "flex",
    flexDirection: "row",
    alignItens: "center",
    justifyContent: "space-between"
  }
}
