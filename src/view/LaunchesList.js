import React from 'react';
import PropTypes from 'prop-types';

import './LaunchesList.sass';

import Logo from '../assets/space_x_logo_bw_centered.svg';
import Moon from '../assets/moon.png';
import Footer from '../components/Footer';
import FilterButtons from '../components/LaunchesList/FilterButtons';
import Timeline from '../components/LaunchesList/Timeline';
import { CircleLoader } from 'react-spinners';

class LaunchesList extends React.Component {
  static propTypes = {
    launches: PropTypes.array.isRequired,
    onLaunchClick: PropTypes.func.isRequired,
  };

  state = {
    rocketNameFilter: "FALCON 1",
    filteredLaunches: [],
    isLoading: false,
    error: null,
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
      this.setState({ isLoading: true });
      const response = await fetch(URL);
      const jsonResponse = await response.json();
      this.setState({ isLoading: false });
      return jsonResponse;
    } catch(error) {
      this.setState({ error, isLoading: false })
    }
  }

  async getFilteredLaunches(rocketNameFilter){
    let filteredLaunches;
    if(rocketNameFilter === "ALL ROCKETS") {
      filteredLaunches = await this.fetchLaunchByRocketName('');
    } else {
      filteredLaunches = await this.fetchLaunchByRocketName(rocketNameFilter);
    }
    if (!filteredLaunches) {
      filteredLaunches = [];
    }
    this.setState({ filteredLaunches: filteredLaunches });
  };

  handleFilterChange(value) {
    this.setState({ error: null, rocketNameFilter: value });
    this.getFilteredLaunches(value);
  };

  render() {
    return (
      <div className="launches-list">
        <div className="launches-list__body">
          <img src={Moon} className="launches-list__moon"/>
          <Logo className="launches-list__logo"/>
          <h2>LAUNCHES 2018</h2>
          <FilterButtons options={this.availableRocketNames} onChange={this.handleFilterChange.bind(this)}/>
          {
            this.state.error !== null ? <h6>CONNECTING WITH SPACEX API FAILED.</h6> :
            this.state.isLoading ? <CircleLoader color={'#ffffff'} loading={this.state.isLoading}/> :
            this.state.filteredLaunches.length <= 0 ? <h6>SORRY, NO LAUNCHES FOUND.</h6> :
            <Timeline filteredLaunches={this.state.filteredLaunches} onLaunchClick={this.props.onLaunchClick}/>
          }
        </div>
        <div className="launches-list__footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default LaunchesList;
