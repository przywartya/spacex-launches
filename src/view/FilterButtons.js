import React from 'react';
import PropTypes from 'prop-types';

import './FilterButtons.sass';

class FilterButtons extends React.Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  state = {
    selectedItem: this.props.options[0],
  };

  onItemClick = (event) => {
    const selectedItem = event.currentTarget.text;
    this.setState({
      selectedItem,
    });
  };

  render() {
    return (
      <div className="filter-buttons">
        {this.props.options.map((name) => {
           return <a 
                onClick={this.onItemClick} 
                className={this.state.selectedItem === name ? 'menu-link menu-link_active': 'menu-link' }
                >{name}</a>;
        })}
      </div>
    );
  }
}

export default FilterButtons;
