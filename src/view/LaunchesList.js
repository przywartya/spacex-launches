import React from 'react';
import PropTypes from 'prop-types';

import './LaunchesList.sass';

import Logo from '../assets/space_x_logo_bw_centered.svg';
import Moon from '../assets/moon.png';
import Footer from '../components/Footer';
import FilterButtons from '../components/LaunchesList/FilterButtons';
import Timeline from '../components/LaunchesList/Timeline';
import { CircleLoader } from 'react-spinners';
import { observer, inject } from 'mobx-react';


@inject('mainStore')
@observer
class LaunchesList extends React.Component {
  static propTypes = {
    mainStore: PropTypes.object,
  };

  render() {
    const { listState } = this.props.mainStore;
    return (
      <div className="launches-list">
        <div className="launches-list__body">
          <img src={Moon} className="launches-list__moon"/>
          <Logo className="launches-list__logo"/>
          <h2>LAUNCHES 2018</h2>
          <FilterButtons />
          {
            listState.error !== null ? <h6>CONNECTING WITH SPACEX API FAILED.</h6> :
            listState.isLoading ? <CircleLoader color={'#ffffff'} /> :
            listState.allLaunches[listState.rocketNameFilter] <= 0 ? <h6>SORRY, NO LAUNCHES FOUND.</h6> :
            <Timeline />
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
