import React, { Component } from 'react';
import Countries from './components/countries/Countries';
import Headers from './components/header/Headers';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filter: "",
      totalPopulation: 0
    }
  }

  async componentDidMount() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await res.json();

    const allCountries = json.map(({name, flag, numericCode, population}) => {
      return {
          id: numericCode,
          name,
          filteredName: name.toLowerCase(),
          flag,
          population
      }
    });
    const totalPopulation = this.calcPopulation(allCountries);
    this.setState ({
        allCountries,
        filteredCountries: Object.assign([], allCountries),
        totalPopulation
    })
  } 

  calcPopulation = (countries) => {
    const totalPopulation = countries.reduce((acc, cur) => {
      return acc + cur.population;
    }, 0);

    return totalPopulation;
  }

  handleChangedFilter = (newText) => {
    this.setState({
      filter: newText
    })

    const filteredText = newText.toLowerCase();
    
    const filteredCountries = this.state.allCountries.filter((countries) => {
      return countries.filteredName.includes(filteredText);
    });

    const totalPopulation = this.calcPopulation(filteredCountries);

    this.setState({
      filteredCountries,
      totalPopulation
    })
  }

  render() {
    const {filteredCountries, filter, totalPopulation} = this.state;
    return (
        <div className="container">
          <h2 style={styles.centeredTitle}> React Countries </h2>
          <Headers filter={filter} 
                   onChangedFilter={this.handleChangedFilter} 
                   totalPopulation={totalPopulation}
                   countryCount={filteredCountries.length}
          />
          <Countries countries={filteredCountries} />
        </div>
    );
  }
}

const styles ={
  centeredTitle: {
    textAlign: "center"
  }
}