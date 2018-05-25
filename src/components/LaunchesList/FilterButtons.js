import React from 'react';
import PropTypes from 'prop-types';

import './FilterButtons.sass';

import { observer, inject } from 'mobx-react';


@inject('mainStore')
@observer
class FilterButtons extends React.Component {
  static propTypes = {
    mainStore: PropTypes.object,
  };

  renderButtonWithName(name) { 
    let selectedItem = this.props.mainStore.listState.rocketNameFilter;
    const className = selectedItem === name ? 'menu-link menu-link_active': 'menu-link';
    return (
      <a onClick={this.props.mainStore.setFilter} key={name} className={className}>{name}</a>
    );
  };
  
  render() {
    return (
      <div className="filter-buttons">
        {this.props.mainStore.availableRocketNames.map((name) => this.renderButtonWithName(name))}
      </div>
    );
  }
}

export default FilterButtons;
