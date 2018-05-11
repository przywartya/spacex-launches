import React from 'react';
import PropTypes from 'prop-types';

import './LaunchesList.sass';

import Footer from '../components/Footer';
import Logo from '../assets/space_x_logo_bw_centered.svg';
import Moon from '../assets/moon.png';

class LaunchesList extends React.Component {
  static propTypes = {
    launches: PropTypes.array.isRequired,
    onLaunchClick: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="launches-list">
        <div className="launches-list__body">
          <img src={Moon} className="body__moon"/>
          <Logo className="body__logo"/>
          <h2 onClick={this.props.onLaunchClick}>
            LAUNCHES 2018
          </h2>
        </div>
        <div className="launches-list__footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default LaunchesList;
