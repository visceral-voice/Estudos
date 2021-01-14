import React, { Component, Fragment } from 'react';
import Band from './components/Counter/Band';
import Counter from './components/Counter/Counter';
import Counter2 from './components/Counter/Counter2';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      currentCounter: 3,
      steps: 0
    }
  }

  handleCount = (clickType) => {
    const {currentCounter, steps} = this.state;
    this.setState ({
      currentCounter: clickType === "+" ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1
    });
  }

  render() {
    const {currentCounter, steps} = this.state;
    return (
        <Fragment>
          <h1>Band</h1>
          <Band />
          
          <h1>Counter 01</h1>
          <Counter />
          <Counter />
          <Counter />

          <h1>Counter 02</h1>
          <Counter2 
            onCount={this.handleCount} 
            countValue={currentCounter} 
            currentSetps={steps} 
          />
                    <Counter2 
            onCount={this.handleCount} 
            countValue={currentCounter} 
            currentSetps={steps} 
          />
                    <Counter2 
            onCount={this.handleCount} 
            countValue={currentCounter} 
            currentSetps={steps} 
          />
        </Fragment>  
        );
  }
}
