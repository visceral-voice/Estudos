import React, { Component, useState } from 'react'
import User from './User';

export default function Users({users}) {
  const [ secondsVisible, setSecondsVisible ] = useState(0);

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // } 
  return (
    <div>
      <p>Componente Users exibido por {secondsVisible} segundos</p>
      <ul>
        {users.map((user => {
          const{login} = user;
          return <li key={login.uuid}> 
                  <User user={user} />
                  </li>
        }))}
      </ul>
    </div>
  )
}
