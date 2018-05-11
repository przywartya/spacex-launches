import React from 'react';
import PropTypes from 'prop-types';

import './LaunchesList.sass';

import Footer from '../components/Footer';

class LaunchesList extends React.Component {
  static propTypes = {
    launches: PropTypes.array.isRequired,
    onLaunchClick: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="launches-list">
        <div className="launches-list__body">
          <h1 onClick={this.props.onLaunchClick}>List of launches placeholder</h1>
        </div>
        <div className="launches-list__footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default LaunchesList;
