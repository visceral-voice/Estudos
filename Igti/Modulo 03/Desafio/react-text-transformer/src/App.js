import React, { Component } from 'react';
import Input from './components/Input/Input';

export default class App extends Component {
  render() {
    return <div className="container">
             <h1>react-text-transformer</h1>
             <Input /> 
          </div>;
  }
}
