import React from 'react';

import Header from './components/header/header.component';
import SearchField from './components/search-field/search-field.component';

import './components/search-field/search-field.styles.scss';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="inner-container">
        <Header />
        <SearchField placeholder="Search for a country..." />
      </div>
    );
  }
}

export default App;
