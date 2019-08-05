import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import CustomButton from '../../components/custom-button/custom-button.component';
import CountryDetail from '../../components/country-details-body/country-details-body.component';

import './country-details.styles.scss';

class CountryDetails extends Component {
  state = {
    countryNames: [],
  };

  componentDidMount() {
    const {
      location: {
        state: { borderNamesCode },
      },
    } = this.props;

    const {
      location: {
        state: { borders },
      },
    } = this.props;

    // create new array that checks alpha codes against country names and then spits out full names instead of the alpha3code

    const fullBorderNames = (function codeToName() {
      const names = borders.map(borderCountry =>
        borderNamesCode
          .filter(borderName => borderName.code === borderCountry)
          .map(countryObj => countryObj.name)
      );
      return names.flat();
    })();

    this.setState({
      countryNames: fullBorderNames,
    });
  }

  render() {
    const {
      location: { state },
    } = this.props;

    const { countryNames } = this.state;

    return (
      <div className="country-details">
        <Link to="/">
          <CustomButton type="button" isCardDetails isDarkMode={false}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ paddingTop: '2px' }} />{' '}
            <span className="country-details__back">Back</span>
          </CustomButton>
        </Link>
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
            <div className="country-details__borders">
              <p>Border Countries:</p>
              <div className="country-details__button-wrapper">
                {countryNames.map(border => (
                  <CustomButton isCardDetails isDarkMode={false}>
                    {border}
                  </CustomButton>
                ))}
              </div>
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
