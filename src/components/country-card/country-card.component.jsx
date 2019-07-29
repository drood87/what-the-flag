import React from 'react';

import './country-card.styles.scss';

const CountryCard = () => (
  <div className="country-card">
    <div className="country-card__image-box">
      <img
        src={require('../../assets/germany.png')}
        alt="country"
        className="country-card__image"
      />
    </div>
    <div className="country-card__content">
      <h3 className="country-card__title">Germany</h3>
      <div className="country-card__details">
        <p className="country-card__detail">
          Population:{' '}
          <span className="country-card__detail--info">81,000,000</span>
        </p>
        <p className="country-card__detail">
          Region: <span className="country-card__detail--info">Europe</span>
        </p>
        <p className="country-card__detail">
          Capital: <span className="country-card__detail--info">Berlin</span>
        </p>
      </div>
    </div>
  </div>
);

export default CountryCard;
