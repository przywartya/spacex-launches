import React from 'react';
import PropTypes from 'prop-types';

import Arrow from './Arrow';

import ArrowPointer from '../assets/arrow_pointer.svg';
import Logo from '../assets/space_x_logo_bw_centered.svg';

import './Navbar.sass';

class Navbar extends React.Component {
  static propTypes = {
    onBackClick: PropTypes.func.isRequired,
  }
  render() {
    return (
        <div className="navbar">
          <div className="navbar__backlink" onClick={this.props.onBackClick}>
            <Arrow direction="left"/>
            <h5>GO BACK</h5>
          </div>
          <div className="navbar__logo">
            <Logo width="256px"/>  
          </div>
          <div></div>
        </div>
    );
  }
}

export default Navbar;
