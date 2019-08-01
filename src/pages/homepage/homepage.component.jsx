import React, { Component } from 'react';

import SearchField from '../../components/search-field/search-field.component';
import FilterDropdown from '../../components/filter-dropdown/filter-dropdown.component';
import CountryCard from '../../components/country-card/country-card.component';

import './homepage.styles.scss';

class HomePage extends Component {
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

  handleDropdown = e => {
    console.log(e);
  };

  render() {
    const { countries, searchField } = this.state;
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
            />
          ))}
        </main>
      </div>
    );
  }
}

export default HomePage;
