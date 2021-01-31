import React, { Component } from 'react';
import ProjetoBase from './components/ProjetoBase/ProjetoBase';

import { getTimeStamp } from './helpers/formatedTimestampHelpers'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
    };
  }
  /**
   * Método do ciclo de vida do React
   * que é executado após cada render().
   * Útil para "efeitos colaterais", como
   * por exemplo, a atualização de
   * document.title
   */
  componentDidUpdate(prevProps, prevState) {
    document.title = this.state.list.length.toString();
  }

  handleClick = () => {
    const newList = Object.assign([], this.state.list);
    newList.push(getTimeStamp());

    this.setState({ list: newList });
  };

  render() {
    const { list } = this.state;

    return <div>
              <ProjetoBase />;
              <h1>
                React and <em>Class Component</em>
              </h1>

              <button onClick={this.handleClick}>Clique Aqui!</button>

              <ul>
                  {list.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
              </ul>
          </div>
  }
}
