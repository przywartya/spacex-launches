import React from 'react';

import Arrow from './Arrow';

import ArrowPointer from '../assets/arrow_pointer.svg';
import Logo from '../assets/space_x_logo_bw_centered.svg';

import './Navbar.sass';

class Navbar extends React.Component {
  render() {
    return (
        <div className="navbar">
          <div className="navbar__backlink">
            <Arrow/>
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
