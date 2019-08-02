import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import CustomButton from '../../components/custom-button/custom-button.component';

import './country-details.styles.scss';

class CountryDetails extends Component {
  render() {
    const {
      location: { state },
    } = this.props;
    console.log(state);
    return (
      <div className="country-details">
        <CustomButton type="button" isCardDetails isDarkMode={false}>
          Back
        </CustomButton>
      </div>
    );
  }
}

CountryDetails.propTypes = {
  location: PropTypes.object,
  state: PropTypes.object,
};

export default withRouter(CountryDetails);
