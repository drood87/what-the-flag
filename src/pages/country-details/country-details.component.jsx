import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import CustomButton from '../../components/custom-button/custom-button.component';
import CountryDetail from '../../components/country-details-body/country-details-body.component';

import './country-details.styles.scss';

class CountryDetails extends Component {
  constructor(props) {
    super(props);

    const {
      location: { state },
    } = this.props;

    const {
      location: {
        state: { borderNamesCode, borders },
      },
    } = this.props;

    this.state = {
      details: state,
      countryNamesFromBorders: [],
      borderNamesCode,
      borders,
      country: [],
    };
  }

  componentDidMount() {
    /* ----------------------------------------------------------------------------*/
    // create new array that checks alpha codes against country names and then spits // out full names instead of the alpha3code
    /* ----------------------------------------------------------------------------*/
    // state from React Router which is passed in as props and receive it from location
    const { borderNamesCode, borders } = this.state;

    const fullBorderNames = (function codeToName() {
      const names = borders.map(borderCountry =>
        borderNamesCode
          .filter(borderName => borderName.code === borderCountry)
          .map(countryObj => countryObj.name)
      );
      return names.flat();
    })();

    /* ----------------------------------------------------------*/
    // filter out countries which are not a border to that country
    /* ----------------------------------------------------------*/

    const filterCountries = (function filter() {
      /* ------------------------------------------*/
      // retrieve countries object from local storage
      /* ------------------------------------------*/

      const countries = localStorage.getItem('countries');
      const retrieveCountries = JSON.parse(countries);

      const filterBorders = borders.map(borderCountry =>
        retrieveCountries
          .filter(country => country.alpha3Code === borderCountry)
          .map(countryObj => countryObj)
      );

      return filterBorders.flat();
    })();

    // change state based on button click and replace with details of that country

    this.setState({
      countryNamesFromBorders: fullBorderNames,
      country: filterCountries,
    });
  }

  // handle click on border country

  handleBorder = border => {
    const { country, borderNamesCode } = this.state;

    const borderCountryClicked = country.find(
      countryBorder => countryBorder.name === border
    );

    // get borders from new country and transform into full Names from alpha3Code

    const newBorders = borderCountryClicked.borders;

    const createFullNames = (function newBordersToName() {
      const names = newBorders.map(borderCountry =>
        borderNamesCode
          .filter(borderName => borderName.code === borderCountry)
          .map(countryObj => countryObj.name)
          .flat()
      );
      return names.flat();
    })();

    const filterCountries = (function filter() {
      /* ------------------------------------------*/
      // retrieve countries object from local storage
      /* ------------------------------------------*/

      const countries = localStorage.getItem('countries');
      const retrieveCountries = JSON.parse(countries);

      const filterBorders = newBorders.map(borderCountry =>
        retrieveCountries
          .filter(countryName => countryName.alpha3Code === borderCountry)
          .map(countryObj => countryObj)
      );

      return filterBorders.flat();
    })();

    // update state with new country --> still need to update the borders with function from componentDidMount

    this.setState(prevState => ({
      details: borderCountryClicked,
      countryNamesFromBorders: createFullNames,
      country: filterCountries,
    }));
  };

  render() {
    const { countryNamesFromBorders, details } = this.state;

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
            <img src={details.flag} alt={`${details.name} flag`} />
          </div>
          <div className="country-details__information">
            <h1 className="title">{details.name}</h1>
            <div className="country-details__main">
              <div>
                <CountryDetail detail={details.nativeName}>
                  Native Name:
                </CountryDetail>
                <CountryDetail detail={details.population.toLocaleString()}>
                  Population:
                </CountryDetail>
                <CountryDetail detail={details.region}>Region:</CountryDetail>
                <CountryDetail detail={details.subregion}>
                  Sub Region:
                </CountryDetail>
                <CountryDetail detail={details.capital}>Capital:</CountryDetail>
              </div>
              <div>
                <CountryDetail detail={details.topLevelDomain[0]}>
                  Top Level Domain:
                </CountryDetail>
                <CountryDetail
                  detail={details.currencies.map((currency, idx) =>
                    idx < details.currencies.length - 1
                      ? `${currency.name}, `
                      : currency.name
                  )}
                >
                  Currencies:
                </CountryDetail>
                <CountryDetail
                  detail={details.languages.map((language, idx) =>
                    idx < details.languages.length - 1
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
                {countryNamesFromBorders.map(border => (
                  <Link to={`${border}`}>
                    <CustomButton
                      onClick={() => this.handleBorder(border)}
                      key={border}
                      isCardDetails
                      isDarkMode={false}
                    >
                      {border}
                    </CustomButton>
                  </Link>
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
  details: PropTypes.object,
};

export default withRouter(CountryDetails);
