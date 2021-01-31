import React, { Component } from 'react';
import Toogle from './components/Toogle/Toogle';
import Users from './components/Users/Users';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      users: [],
      showUsers: false 
    }
  }

  async componentDidMount() {
    const res = await fetch("https://randomuser.me/api/?seed=rush&nat=br&results=10");
    const json = await res.json();

    this.setState ({
      users: json.results,
    });
  } 
  
  handleShowUsers = ((isChecked) => {
    this.setState({showUsers: isChecked});
  });

  render() {
    const {showUsers, users} = this.state;
    return (<div>
              <h3>React LifeCycle</h3>
              <Toogle enabled={showUsers} 
                      description="Show Users"
                      onToogle={this.handleShowUsers} 
              />
              <hr />
              {showUsers && <Users users={users}/>}
           </div>);
  }
}
