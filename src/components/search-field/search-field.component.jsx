import React, { Component } from 'react';
import PropsTypes from 'prop-types';

import './search-field.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchField extends Component {
  render() {
    const { placeholder } = this.props;
    return (
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} className="search-box__icon" />
        <input
          type="search"
          name="Search"
          placeholder={placeholder}
          className="search-box__input"
        />
      </div>
    );
  }
}

SearchField.propTypes = {
  placeholder: PropsTypes.string,
};

export default SearchField;
