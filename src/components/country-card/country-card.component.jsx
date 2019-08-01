import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './country-card.styles.scss';

const CountryCard = ({
  name,
  population,
  flag,
  capital,
  region,
  match,
  history,
  linkUrl,
  ...otherDetails
}) => (
  <div
    className="country-card"
    onClick={() => history.push(`${match.url}${linkUrl}`, { ...otherDetails })}
  >
    <div className="country-card__image-box">
      <img src={flag} alt={`${name} Flag`} className="country-card__image" />
    </div>
    <div className="country-card__content">
      <h3 className="country-card__title">{name}</h3>
      <div className="country-card__details">
        <p className="country-card__detail">
          Population:{' '}
          <span className="country-card__detail--info">
            {population.toLocaleString()}
          </span>
        </p>
        <p className="country-card__detail">
          Region: <span className="country-card__detail--info">{region}</span>
        </p>
        <p className="country-card__detail">
          Capital: <span className="country-card__detail--info">{capital}</span>
        </p>
      </div>
    </div>
  </div>
);

CountryCard.propTypes = {
  name: PropTypes.string,
  population: PropTypes.number,
  flag: PropTypes.string,
  capital: PropTypes.string,
  region: PropTypes.string,
  match: PropTypes.object,
  history: PropTypes.object,
  linkUrl: PropTypes.string,
}.isRequired;

// @ts-ignore
export default withRouter(CountryCard);
