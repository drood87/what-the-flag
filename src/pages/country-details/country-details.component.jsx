import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import CustomButton from '../../components/custom-button/custom-button.component';
import CountryDetail from '../../components/country-details-body/country-details-body.component';

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
          <FontAwesomeIcon icon={faArrowLeft} style={{ paddingTop: '2px' }} />{' '}
          <span className="country-details__back">Back</span>
        </CustomButton>
        <div className="country-details__body">
          <div className="country-details__flag">
            <img src={state.flag} alt={`${state.name} flag`} />
          </div>
          <div className="country-details__information">
            <h1 className="title">{state.name}</h1>
            <div className="country-details__main">
              <div>
                <CountryDetail detail={state.nativeName}>
                  Native Name:
                </CountryDetail>
                <CountryDetail detail={state.population.toLocaleString()}>
                  Population:
                </CountryDetail>
                <CountryDetail detail={state.region}>Region:</CountryDetail>
                <CountryDetail detail={state.subregion}>
                  Sub Region:
                </CountryDetail>
                <CountryDetail detail={state.capital}>Capital:</CountryDetail>
              </div>
              <div>
                <CountryDetail detail={state.topLevelDomain[0]}>
                  Top Level Domain:
                </CountryDetail>
                <CountryDetail
                  detail={state.currencies.map((currency, idx) =>
                    idx < state.currencies.length - 1
                      ? `${currency.name}, `
                      : currency.name
                  )}
                >
                  Currencies:
                </CountryDetail>
                <CountryDetail
                  detail={state.languages.map((language, idx) =>
                    idx < state.languages.length - 1
                      ? `${language.name}, `
                      : language.name
                  )}
                >
                  Languages:
                </CountryDetail>
              </div>
            </div>
            <div>
              <p>Border Countries:</p>
              <CustomButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CountryDetails.propTypes = {
  location: PropTypes.object,
  state: PropTypes.object,
};

export default withRouter(CountryDetails);
