import React from 'react';
import PropTypes from 'prop-types';

import './LaunchesList.sass';

import Logo from '../assets/space_x_logo_bw_centered.svg';
import Moon from '../assets/moon.png';
import Footer from '../components/Footer';
import FilterButtons from '../components/LaunchesList/FilterButtons';
import Timeline from '../components/LaunchesList/Timeline';


class LaunchesList extends React.Component {
  static propTypes = {
    launches: PropTypes.array.isRequired,
    onLaunchClick: PropTypes.func.isRequired,
  };

  state = {
    rocketNameFilter: "ALL ROCKETS",
  };

  get availableRocketNames() {
    return this.props.launches.reduce((names, launch) => {
      let rocketName = launch.rocket.rocket_name.toUpperCase();
      !names.includes(rocketName) && names.push(rocketName);
      return names;
    }, []);
  };

  get filteredLaunches(){
    const {rocketNameFilter} = this.state;
    const {launches} = this.props;

    if(rocketNameFilter === "ALL ROCKETS") return launches;

    return launches.filter( launch => launch.rocket.rocket_name.toUpperCase() === rocketNameFilter);
  };

  handleFilterChange(value) {
    this.setState({ rocketNameFilter: value });
  };

  render() {
    return (
      <div className="launches-list">
        <div className="launches-list__body">
          <img src={Moon} className="launches-list__moon"/>
          <Logo className="launches-list__logo"/>
          <h2>LAUNCHES 2018</h2>
          <FilterButtons
          options={this.availableRocketNames}
          onChange={this.handleFilterChange.bind(this)}/>
          <Timeline 
          filteredLaunches={this.filteredLaunches}
          onLaunchClick={this.props.onLaunchClick}/>
        </div>
        <div className="launches-list__footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default LaunchesList;
