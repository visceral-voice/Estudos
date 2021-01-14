import React, { Component } from 'react';
import Input from './components/Input/Input';
import Transformation from './components/transformations/Transformation';
import Transformations from './components/transformations/Transformations';

const defaultState = {
  userInput: "Trabalho prático"
};

const MY_TRANSFOMATION = [
    {
      id: "T1",
      description: "Texto invertido",
      transformFunction: text => text.split("").reverse().join("")
    },
    {
      id: "T2",
      description: "Texto númerico",
      transformFunction: text => text.split("").reverse().join("")
    },
    {
      id: "T3",
      description: "CSV",
      transformFunction: text => text.split("").reverse().join("")
    },
    {
      id: "T4",
      description: "Slug",
      transformFunction: text => text.split("").reverse().join("")
    },
    {
      id: "T5",
      description: "Somente vogais",
      transformFunction: text => text.split("").reverse().join("")
    },
    {
      id: "T6",
      description: "Somente consoantes",
      transformFunction: text => text.split("").reverse().join("")
    },
    {
      id: "T7",
      description: "Variável",
      transformFunction: text => text.split("").reverse().join("")
    }
];

export default class App extends Component {
  constructor(){
    super();

    this.state = { ...defaultState };
  };

  handleUserInputChange = (newText) => {
    this.setState({
      userInput: newText
    });
  };

  render() {
    const {userInput} = this.state;

    return (<div className="container center">
             <h1><b>react-text-transformer</b></h1>
            <Input id="userInput" 
                  autoFocus
                  description="Digite um texto qualquer" 
                  value={userInput}
                  onChange={this.handleUserInputChange}
            />
            <Transformations>
              {MY_TRANSFOMATION.map(({ id, description, transformFunction }) =>{
                    const value = transformFunction(userInput);
                    return (
                      <Transformation 
                          id={id}
                          key={id}
                          description={description}
                          value={value}
                          readOnly
                          allowCopy
                      />  
                    );
              })}
            </Transformations>  
          </div>);
  };
}
