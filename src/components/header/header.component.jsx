import React from 'react';

import './header.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../custom-button/custom-button.component';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__title">What the Flag?</h1>
        <CustomButton type="button" isDarkMode isCardDetails={false}>
          <FontAwesomeIcon icon={faMoon} />
          <span className="header__switch">Dark Mode</span>
        </CustomButton>
      </div>
    );
  }
}

export default Header;
