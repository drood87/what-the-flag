import React, { Component } from 'react';

import SearchField from '../../components/search-field/search-field.component';
import FilterDropdown from '../../components/filter-dropdown/filter-dropdown.component';
import CountryCard from '../../components/country-card/country-card.component';

import './homepage.styles.scss';

class HomePage extends Component {
  state = {
    countries: [],
    fullBorderNames: {},
    searchField: '',
  };

  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const countries = await res.json();

    // create object that holds name and alpha3Code of countries

    const countriesCodeName = countries.map(country => ({
      name: country.name,
      code: country.alpha3Code,
    }));

    this.setState({
      countries,
      countriesCodeName,
    });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  handleDropdown = e => {
    console.log(e);
  };

  render() {
    const { countries, searchField, countriesCodeName } = this.state;
    const filterCountries = countries.filter(country =>
      country.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <div className="filter-search">
          <SearchField
            placeholder="Search for a country..."
            handleChange={this.handleChange}
          />
          <FilterDropdown handleDropdown={this.handleDropdown} />
        </div>
        <main className="main-content">
          {filterCountries.map(country => (
            <CountryCard
              key={country.name}
              linkUrl={`country/${country.name}`}
              {...country}
              borderNamesCode={countriesCodeName}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default HomePage;
