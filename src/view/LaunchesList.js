import React from 'react';
import PropTypes from 'prop-types';

import './LaunchesList.sass';

import Footer from '../components/Footer';
import FilterButtons from './FilterButtons';
import Logo from '../assets/space_x_logo_bw_centered.svg';
import Moon from '../assets/moon.png';

class LaunchesList extends React.Component {
  get availableRocketNames() {
    return this.props.launches.reduce((names, launch) => {
      let rocketName = launch.rocket.rocket_name.toUpperCase();
      !names.includes(rocketName) && names.push(rocketName);
      return names;
    }, []);
  }

  handleFilterChange(value) {
    this.setState({ rocketNameFilter: value });
  }

  render() {
    return (
      <div className="launches-list">
        <div className="launches-list__body">
          <img src={Moon} className="body__moon"/>
          <Logo className="body__logo"/>
          <h2 onClick={this.props.onLaunchClick}>LAUNCHES 2018</h2>
          <FilterButtons options={this.availableRocketNames} onChange={this.handleFilterChange.bind(this)}/>
        </div>
        <div className="launches-list__footer">
          <Footer/>
        </div>
      </div>
    );
  }

  static propTypes = {
    launches: PropTypes.array.isRequired,
    onLaunchClick: PropTypes.func.isRequired,
  }
}

export default LaunchesList;
