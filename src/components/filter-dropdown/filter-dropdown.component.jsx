import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../dropdown/dropdown.component';

import './filter-dropdown.styles.scss';

class FilterDropdown extends Component {
  state = {
    isHidden: true,
  };

  handleToggle = () => {
    const { isHidden } = this.state;
    this.setState({
      isHidden: !isHidden,
    });
  };

  handleKeyDown = e => {
    e.preventDefault();
    if (e.keyCode === 32) {
      this.handleToggle();
    }
  };

  render() {
    const { isHidden } = this.state;
    return (
      <div className="filter-box" style={{ marginTop: '5rem' }}>
        <div
          tabIndex="0"
          role="button"
          className="filter-box__input"
          onClick={this.handleToggle}
          onKeyDown={this.handleKeyDown}
        >
          <span>Filter by Region</span>
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </div>
        {isHidden ? null : <Dropdown />}
      </div>
    );
  }
}

export default FilterDropdown;
