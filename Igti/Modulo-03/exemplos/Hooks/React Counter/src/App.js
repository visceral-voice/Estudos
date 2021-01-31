import React, { Fragment, useState } from 'react';
import Band from './components/Counter/Band';
import Counter from './components/Counter/Counter';
import Counter2 from './components/Counter/Counter2';

export default function App () {
   const [ currentCounter, setCurrentCounter ] = useState(3);
   const [ steps, setSteps ] = useState(0);

  const handleCount = (clickType) => {
    const counter = clickType === "+" ? currentCounter + 1 : currentCounter - 1;
    setCurrentCounter(counter);
    setSteps(steps + 1);
  }

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
            onCount={handleCount} 
            countValue={currentCounter} 
            currentSetps={steps} 
          />
                    <Counter2 
            onCount={handleCount} 
            countValue={currentCounter} 
            currentSetps={steps} 
          />
                    <Counter2 
            onCount={handleCount} 
            countValue={currentCounter} 
            currentSetps={steps} 
          />
        </Fragment>  
        );
}
