/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button {...otherProps}>{children}</button>
);

CustomButton.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default CustomButton;
