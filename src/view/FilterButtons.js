import React from 'react';
import PropTypes from 'prop-types';

import './FilterButtons.sass';

class FilterButtons extends React.Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  state = {
    selectedItem: "ALL ROCKETS",
  };

  onItemClick = (event) => {
    const selectedItem = event.currentTarget.text;
    this.props.onChange(selectedItem);
    this.setState({
      selectedItem,
    });
  };

  render() {
    return (
      <div className="filter-buttons">
        <a
        onClick={this.onItemClick}
        className={this.state.selectedItem === "ALL ROCKETS" ? 'menu-link menu-link_active': 'menu-link' }>
        ALL ROCKETS</a>
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
