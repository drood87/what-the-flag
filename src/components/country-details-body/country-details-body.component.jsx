import React from 'react';
import PropTypes from 'prop-types';

import './country-details-body.styles.scss';

const CountryDetail = ({ children, detail }) => (
  <p className="detail">
    <span className="detail__span">{children}</span> {detail}
  </p>
);

CountryDetail.propTypes = {
  children: PropTypes.string,
  detail: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
  ]),
};

export default CountryDetail;
