import React, { Component } from 'react'

export default class Band extends Component {
  constructor(){
    super();

    this.state = {
      bandName: "Rush",
      bandMenbers: [
        {
          id: 1,
          name: "Neil Peart",
          instrument: "Drums"
        },
        {
          id: 2,
          name: "Alex Lifeson",
          instrument: "Guitar"
        },
        {
          id: 3,
          name: "Geddy Lee",
          instrument: "Bass"
        }
      ]
    }
  }

  render() {
    const {bandName, bandMenbers} = this.state;
    return (
      <div>
        <h4>{bandName}</h4>
        <ul>
        {bandMenbers.map(({id, name, instrument}) => {
          return (
           <li key={id}>{name} - {instrument}</li> 
          );
        })}
        </ul>
      </div>
    )
  }
}
