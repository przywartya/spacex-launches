import React from 'react';

import ArrowPointer from '../assets/arrow_pointer.svg';

import './Arrow.sass';

class Arrow extends React.Component {
  render() {
    return (
      <div className="arrow">
        <ArrowPointer/>
        <div className="arrow__line"></div>
      </div>
    );
  }
}

export default Arrow;
