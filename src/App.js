import React from 'react';

import Header from './components/header/header.component';
import SearchField from './components/search-field/search-field.component';
import FilterDropdown from './components/filter-dropdown/filter-dropdown.component';
import CountryCard from './components/country-card/country-card.component';

import './components/search-field/search-field.styles.scss';

import './App.scss';

class App extends React.Component {
  state = {
    countries: [],
    searchField: '',
  };

  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const countries = await res.json();

    this.setState({
      countries,
    });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { countries, searchField } = this.state;
    const filterCountries = countries.filter(country =>
      country.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filterCountries);
    return (
      <div className="inner-container">
        <Header />
        <div className="filter-search">
          <SearchField
            placeholder="Search for a country..."
            handleChange={this.handleChange}
          />
          <FilterDropdown />
        </div>
        <main className="main-content">
          {filterCountries.map(country => (
            <CountryCard
              name={country.name}
              key={country.name}
              population={country.population}
              flag={country.flag}
              capital={country.capital}
              region={country.region}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;

