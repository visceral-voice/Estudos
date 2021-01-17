import React, { useState, useEffect } from 'react';
import Countries from './components/countries/Countries';
import Headers from './components/header/Headers';

export default function App() {
  const [ allCountries, setAllCountries ] = useState([]);
  const [ filteredCountries, setFilteredCountries ] = useState([]);
  const [ filter, setFilter ] = useState("");
  const [ totalPopulation, setTotalPopulation ] = useState(0);
  
  useEffect(() =>{
    const fetcContries = async () => {
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
      setAllCountries(allCountries);
      const totalPopulation = calcPopulation(allCountries);
      setTotalPopulation(totalPopulation);
      setFilteredCountries(Object.assign([], allCountries));
    }
    fetcContries();
  }, []);

  
  const calcPopulation = (countries) => {
    const totalPopulation = countries.reduce((acc, cur) => {
      return acc + cur.population;
    }, 0);

    return totalPopulation;
  }

  const handleChangedFilter = (newText) => {
    setFilter(newText);
    const filteredText = newText.toLowerCase();
    
    const filteredCountries = allCountries.filter((countries) => {
      return countries.filteredName.includes(filteredText);
    });

    const totalPopulation = calcPopulation(filteredCountries);
    setFilteredCountries(filteredCountries);
    setTotalPopulation(totalPopulation);
  }

  return (
      <div className="container">
        <h2 style={styles.centeredTitle}> React Countries </h2>
        <Headers filter={filter} 
                  onChangedFilter={handleChangedFilter} 
                  totalPopulation={totalPopulation}
                  countryCount={filteredCountries.length}
        />
        <Countries countries={filteredCountries} />
      </div>
  );
}

const styles ={
  centeredTitle: {
    textAlign: "center"
  }
}