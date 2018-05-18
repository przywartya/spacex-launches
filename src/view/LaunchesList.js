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
    rocketNameFilter: "FALCON 1",
    filteredLaunches: [],
  };

  async componentDidMount() {
    this.setState({
      filteredLaunches: await this.fetchLaunchByRocketName(this.state.rocketNameFilter)
    });
  }

  get availableRocketNames() {
    return ["ALL ROCKETS", "FALCON 1", "FALCON 9", "FALCON 10", "FALCON HEAVY"];
  };

  async fetchLaunchByRocketName(rocketName) {
    try {
      const rocketId = rocketName.split(" ").join("").toLowerCase();
      const URL = `https://api.spacexdata.com/v2/launches?rocket_id=${rocketId}`;
      const fetchResult = fetch(URL);
      const response = await fetchResult;
      return await response.json();
    } catch(e) {
      throw Error(e);
    }
  }

  async getFilteredLaunches(rocketNameFilter){
    if(rocketNameFilter === "ALL ROCKETS") {
      const filteredLaunches = await this.fetchLaunchByRocketName('');
      this.setState({ filteredLaunches: filteredLaunches });
    } else {
      const filteredLaunches = await this.fetchLaunchByRocketName(rocketNameFilter);
      this.setState({ filteredLaunches: filteredLaunches });
    }
  };

  handleFilterChange(value) {
    this.setState({ rocketNameFilter: value });
    this.getFilteredLaunches(value);
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
          filteredLaunches={this.state.filteredLaunches}
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
