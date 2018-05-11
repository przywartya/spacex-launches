import React from 'react';
import PropTypes from 'prop-types';

import ArrowPointer from '../assets/arrow_pointer.svg';

import './Arrow.sass';

class Arrow extends React.Component {
  static propTypes = {
    direction: PropTypes.string.isRequired,
  };
  get arrowWithDirection() {
    const { direction } = this.props;

    switch (direction) {
      case 'left':
        return (
          <div className="arrow">
            <div className="arrow__dot"></div>
            <ArrowPointer/>
            <div className="arrow__line"></div>
          </div>
        );

      case 'right':
        return (
          <div className="arrow">
            <div className="arrow__line"></div>
            <ArrowPointer className="right-arrow-pointer"/>
            <div className="arrow__dot"></div>
          </div>
        );

      default: return null;
    }
  }
  render() {
    return (
      <arrow>
        {this.arrowWithDirection}
      </arrow>
    );
  }
}

export default Arrow;
