/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';

import './dropdown.styles.scss';

const Dropdown = ({ handleDropdown }) => (
  <div className="dropdown">
    <span tabIndex="0" role="button" onClick={handleDropdown}>
      Africa
    </span>
    <span tabIndex="0" role="button" onClick={handleDropdown}>
      Asia
    </span>
    <span tabIndex="0" role="button" onClick={handleDropdown}>
      America
    </span>
    <span tabIndex="0" role="button" onClick={handleDropdown}>
      Europe
    </span>
    <span tabIndex="0" role="button" onClick={handleDropdown}>
      Oceania
    </span>
  </div>
);

export default Dropdown;
