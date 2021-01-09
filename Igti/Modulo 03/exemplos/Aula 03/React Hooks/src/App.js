import React, { useState, useEffect } from 'react';
import ProjetoBase from './components/ProjetoBase/ProjetoBase'
import { getTimeStamp } from './helpers/formatedTimestampHelpers';

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() =>{
    document.title = list.length;
  });

  const handleClick = () => {
    const newList = Object.assign([], list);
    newList.push(getTimeStamp());
    setList(newList);
  };
  
  return (
    <div>
      <ProjetoBase />;
      <h1>
        React With <em>Hooks</em>
      </h1>

      <button onClick={handleClick}>Clique Aqui!</button>

      <ul>
          {list.map((item) => {
            return <li key={item}>{item}</li>;
          })}
      </ul>
    </div>
  )
}
