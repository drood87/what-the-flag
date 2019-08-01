import React, { Component } from 'react';

class CountryDetails extends Component {
  render() {
    const {
      location: { state },
    } = this.props;
    console.log(state);
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default CountryDetails;
