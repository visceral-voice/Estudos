import React, { Component } from 'react';
import Countries from './components/countries/Countries';
import Headers from './components/countries/header/Headers';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filter: ""
    }
  }

  async componentDidMount() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await res.json();

    const allCountries = json.map(({name, flag, numericCode, population}) => {
      return {
          id: numericCode,
          name,
          flag,
          population
      };
    });
    this.setState ({
        allCountries,
        filteredCountries: allCountries
    })
  } 

  handleChangedFilter = (newText) => {
    this.setState({
      filter: newText
    })
  }

  render() {
    const {allCountries, filter} = this.state;
    return (
        <div className="container">
          <h2> React Countries </h2>
          <Headers filter={filter} onChangedFilter={this.handleChangedFilter} />
          <Countries countries={allCountries} />
        </div>
    );
  }
}
