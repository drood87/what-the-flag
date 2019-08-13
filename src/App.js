import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import CountryDetails from './pages/country-details/country-details.component';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/country/" component={CountryDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
