import React from 'react';

import Header from './components/header/header.component';
import SearchField from './components/search-field/search-field.component';
import FilterDropdown from './components/filter-dropdown/filter-dropdown.component';
import CountryCard from './components/country-card/country-card.component';

import './components/search-field/search-field.styles.scss';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="inner-container">
        <Header />
        <div className="filter-search">
          <SearchField placeholder="Search for a country..." />
          <FilterDropdown />
        </div>
        <main className="main-content">
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </main>
      </div>
    );
  }
}

export default App;
