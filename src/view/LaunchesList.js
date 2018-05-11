import React from 'react';
import PropTypes from 'prop-types';

import parse from 'date-fns/parse';
import { format } from 'date-fns';

import './LaunchesList.sass';

import Footer from '../components/Footer';
import Arrow from '../components/Arrow';
import FilterButtons from './FilterButtons';
import Logo from '../assets/space_x_logo_bw_centered.svg';
import Moon from '../assets/moon.png';

class LaunchesList extends React.Component {
  state = {
    rocketNameFilter: this.availableRocketNames[0],
  };

  get availableRocketNames() {
    return this.props.launches.reduce((names, launch) => {
      let rocketName = launch.rocket.rocket_name.toUpperCase();
      !names.includes(rocketName) && names.push(rocketName);
      return names;
    }, []);
  }

  get filteredLaunches(){
    const {rocketNameFilter} = this.state;
    const {launches} = this.props;

    if(!rocketNameFilter) return launches;

    return launches.filter( launch => launch.rocket.rocket_name.toUpperCase() === rocketNameFilter);
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
          <h2>LAUNCHES 2018</h2>
          <FilterButtons options={this.availableRocketNames} onChange={this.handleFilterChange.bind(this)}/>
          <div className="launches-timeline">
            <div className="launches-timeline__line"></div>
            {this.filteredLaunches.map((launch, index) => {
            return <div onClick={this.props.onLaunchClick} className="launches-timeline__item">
              <h5>{format(parse(launch.launch_date_utc), "DD MMMM YYYY").toUpperCase()}</h5>
              <Arrow direction={index % 2 === 0 ? 'right': 'left' }/>
            </div>;
            })}
          </div>
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
