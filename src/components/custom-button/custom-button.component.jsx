/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isCardDetails,
  isDarkMode,
  ...otherProps
}) => (
  <button
    className={`${isCardDetails ? 'btn__card-details' : ''}
    ${isDarkMode ? 'btn__dark-mode' : ''}
    btn`}
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default CustomButton;
