import React from 'react';
import PropTypes from 'prop-types';

import './FilterButtons.sass';

class FilterButtons extends React.Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  state = {
    selectedItem: "FALCON 1",
  };

  onItemClick = (event) => {
    const selectedItem = event.currentTarget.text;
    this.props.onChange(selectedItem);
    this.setState({
      selectedItem,
    });
  };

  renderButtonWithName(name) { 
    const className = this.state.selectedItem === name ? 'menu-link menu-link_active': 'menu-link';
    return (
      <a onClick={this.onItemClick} className={className}>{name}</a>
    );
  };
  
  render() {
    return (
      <div className="filter-buttons">
        {this.props.options.map((name) => this.renderButtonWithName(name))}
      </div>
    );
  }
}

export default FilterButtons;
