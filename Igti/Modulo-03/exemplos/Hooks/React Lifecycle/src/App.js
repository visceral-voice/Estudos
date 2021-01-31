import React, { useState, useEffect } from 'react';
import Toogle from './components/Toogle/Toogle';
import Users from './components/Users/Users';

export default function App() {
  const [ users, setUsers ] = useState([]);
  const [ showUsers, setShowUsers ] = useState(false);

  useEffect(() =>{
    const fetchUsers = async () => {
      const res = await fetch(
        "https://randomuser.me/api/?seed=rush&nat=br&results=10"
      );

      const json = await res.json();
      setUsers(json.results);
    }
    fetchUsers();
  }, []);
  
  const handleShowUsers = ((isChecked) => {
    setShowUsers(isChecked);
  });

  return (<div>
            <h3>React LifeCycle</h3>
            <Toogle enabled={showUsers} 
                    description="Show Users"
                    onToogle={handleShowUsers} 
            />
            <hr />
            {showUsers && <Users users={users}/>}
          </div>);
}
