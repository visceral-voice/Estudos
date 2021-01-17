import React, { useState, useEffect} from 'react';
import Candidates from './components/Candidates';
import Header from './components/Header';
import Spinner from './components/Spinner';

export default function App() {
  const [ candidates, setCandidates ] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8080/votes").then(res => {
              res.json().then(json => {
                setCandidates(json.candidates);
              });
            });
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [candidates]);

  if(candidates.length ===0){
    return <Spinner description="Aguardando..." />
  }
  return (<div className="container">
            <Header>Votação</Header>
            <Candidates candidates={candidates} />
          </div>);
}
